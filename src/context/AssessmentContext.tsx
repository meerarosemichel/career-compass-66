import React, { createContext, useContext, useState, useCallback } from 'react';
import { Question, shuffleAndSelect, allQuestions } from '@/data/questions';
import { Domain, domains } from '@/data/domains';

export type AnswerValue = 5 | 4 | 3 | 2 | 1;

export interface DomainEngagement {
  domainId: string;
  clicks: number;
  watchTime: number; // seconds
}

export interface AnalysisResult {
  technicalScore: number;
  nonTechnicalScore: number;
  decisionStability: number;
  confusionLevel: number;
  confusionLabel: 'Low' | 'Moderate' | 'High';
}

export interface FinalResult extends AnalysisResult {
  recommendedDomain: Domain;
  engagementScore: number;
  domainSwitchCount: number;
  longTermFit: string;
  selectedType: 'technical' | 'non-technical';
}

interface AssessmentState {
  selectedQuestions: Question[];
  answers: Record<number, AnswerValue>;
  analysisResult: AnalysisResult | null;
  selectedType: 'technical' | 'non-technical' | null;
  domainEngagements: Record<string, DomainEngagement>;
  domainSwitchCount: number;
  lastViewedDomain: string | null;
  finalResult: FinalResult | null;
}

interface AssessmentContextType extends AssessmentState {
  initQuestions: () => void;
  setAnswer: (questionId: number, value: AnswerValue) => void;
  analyzeAnswers: () => AnalysisResult;
  setSelectedType: (type: 'technical' | 'non-technical') => void;
  trackDomainClick: (domainId: string) => void;
  trackWatchTime: (domainId: string, seconds: number) => void;
  computeFinalResult: () => FinalResult;
  resetAssessment: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | null>(null);

export const useAssessment = () => {
  const ctx = useContext(AssessmentContext);
  if (!ctx) throw new Error('useAssessment must be used within AssessmentProvider');
  return ctx;
};

const initialState: AssessmentState = {
  selectedQuestions: [],
  answers: {},
  analysisResult: null,
  selectedType: null,
  domainEngagements: {},
  domainSwitchCount: 0,
  lastViewedDomain: null,
  finalResult: null,
};

export const AssessmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AssessmentState>(initialState);

  const initQuestions = useCallback(() => {
    setState(s => ({ ...s, selectedQuestions: shuffleAndSelect(allQuestions, 20), answers: {} }));
  }, []);

  const setAnswer = useCallback((questionId: number, value: AnswerValue) => {
    setState(s => ({ ...s, answers: { ...s.answers, [questionId]: value } }));
  }, []);

  const analyzeAnswers = useCallback(() => {
    const { selectedQuestions, answers } = state;
    let techScore = 0, nonTechScore = 0, decisionScore = 0, confusionScore = 0;
    let neutralCount = 0, studyScore = 0;

    selectedQuestions.forEach(q => {
      const val = answers[q.id] || 3;
      if (val === 3) neutralCount++;
      switch (q.category) {
        case 'technical': techScore += val; break;
        case 'non-technical': nonTechScore += val; break;
        case 'decision': decisionScore += val; break;
        case 'confusion': confusionScore += val; break;
        case 'study': studyScore += val; break;
        case 'social': 
          if (val >= 4) nonTechScore += 1;
          else if (val <= 2) techScore += 1;
          break;
      }
    });

    // Normalize
    const maxPerCategory = 5 * 20; // theoretical max
    const techNorm = (techScore / maxPerCategory) * 100;
    const nonTechNorm = (nonTechScore / maxPerCategory) * 100;
    const decisionNorm = (decisionScore / maxPerCategory) * 100;

    // Confusion calculation
    let confusion = (neutralCount / 20) * 40; // neutral answers contribute
    confusion += Math.abs(techNorm - nonTechNorm) < 15 ? 20 : 0; // mixed interests
    confusion += (100 - decisionNorm) * 0.3; // low decision stability
    confusion += (confusionScore / maxPerCategory) * 30;
    confusion = Math.min(100, Math.max(0, confusion));

    const confusionLabel = confusion < 35 ? 'Low' : confusion < 65 ? 'Moderate' : 'High';

    const result: AnalysisResult = {
      technicalScore: Math.round(techNorm),
      nonTechnicalScore: Math.round(nonTechNorm),
      decisionStability: Math.round(decisionNorm),
      confusionLevel: Math.round(confusion),
      confusionLabel,
    };

    setState(s => ({ ...s, analysisResult: result }));
    return result;
  }, [state]);

  const setSelectedType = useCallback((type: 'technical' | 'non-technical') => {
    setState(s => ({ ...s, selectedType: type }));
  }, []);

  const trackDomainClick = useCallback((domainId: string) => {
    setState(s => {
      const switchCount = s.lastViewedDomain && s.lastViewedDomain !== domainId
        ? s.domainSwitchCount + 1 : s.domainSwitchCount;
      const existing = s.domainEngagements[domainId] || { domainId, clicks: 0, watchTime: 0 };
      return {
        ...s,
        domainSwitchCount: switchCount,
        lastViewedDomain: domainId,
        domainEngagements: {
          ...s.domainEngagements,
          [domainId]: { ...existing, clicks: existing.clicks + 1 },
        },
      };
    });
  }, []);

  const trackWatchTime = useCallback((domainId: string, seconds: number) => {
    setState(s => {
      const existing = s.domainEngagements[domainId] || { domainId, clicks: 0, watchTime: 0 };
      return {
        ...s,
        domainEngagements: {
          ...s.domainEngagements,
          [domainId]: { ...existing, watchTime: existing.watchTime + seconds },
        },
      };
    });
  }, []);

  const computeFinalResult = useCallback(() => {
    const { analysisResult, domainEngagements, domainSwitchCount, selectedType } = state;
    if (!analysisResult || !selectedType) throw new Error('Missing analysis');

    const typeDomains = domains.filter(d => d.type === selectedType);

    // Find most engaged domain
    let bestDomain = typeDomains[0];
    let bestScore = 0;
    typeDomains.forEach(d => {
      const eng = domainEngagements[d.id];
      if (eng) {
        const score = eng.clicks * 2 + (eng.watchTime > 30 ? 3 : eng.watchTime > 10 ? 1 : 0);
        if (score > bestScore) { bestScore = score; bestDomain = d; }
      }
    });

    // Engagement score
    const totalWatchTime = Object.values(domainEngagements).reduce((s, e) => s + e.watchTime, 0);
    const engagementScore = Math.min(100, Math.round(
      (totalWatchTime / 60) * 10 + bestScore * 5 - domainSwitchCount * 3
    ));

    // Updated confusion with domain switching
    const finalConfusion = Math.min(100, Math.max(0,
      analysisResult.confusionLevel + domainSwitchCount * 3 - (bestScore > 5 ? 10 : 0)
    ));
    const confusionLabel = finalConfusion < 35 ? 'Low' : finalConfusion < 65 ? 'Moderate' : 'High';

    const longTermFit = finalConfusion < 35 ? 'Good Long-Term Fit'
      : finalConfusion < 65 ? 'Moderate Fit' : 'Needs Further Exploration';

    const result: FinalResult = {
      ...analysisResult,
      confusionLevel: Math.round(finalConfusion),
      confusionLabel,
      recommendedDomain: bestDomain,
      engagementScore: Math.max(0, engagementScore),
      domainSwitchCount,
      longTermFit,
      selectedType,
    };

    setState(s => ({ ...s, finalResult: result }));
    return result;
  }, [state]);

  const resetAssessment = useCallback(() => {
    setState(initialState);
  }, []);

  return (
    <AssessmentContext.Provider value={{
      ...state, initQuestions, setAnswer, analyzeAnswers,
      setSelectedType, trackDomainClick, trackWatchTime,
      computeFinalResult, resetAssessment,
    }}>
      {children}
    </AssessmentContext.Provider>
  );
};
