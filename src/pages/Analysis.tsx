import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '@/context/AssessmentContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';

const Analysis = () => {
  const navigate = useNavigate();
  const { analysisResult, analyzeAnswers } = useAssessment();

  useEffect(() => {
    if (!analysisResult) analyzeAnswers();
  }, [analysisResult, analyzeAnswers]);

  if (!analysisResult) return null;

  const { technicalScore, nonTechnicalScore, decisionStability, confusionLevel, confusionLabel } = analysisResult;

  const confusionColor = confusionLabel === 'Low' ? 'text-confusion-low' :
    confusionLabel === 'Moderate' ? 'text-confusion-medium' : 'text-confusion-high';

  const confusionBg = confusionLabel === 'Low' ? 'bg-confusion-low' :
    confusionLabel === 'Moderate' ? 'bg-confusion-medium' : 'bg-confusion-high';

  const stats = [
    { label: 'Technical Interest', value: technicalScore, icon: TrendingUp },
    { label: 'Non-Technical Interest', value: nonTechnicalScore, icon: TrendingDown },
    { label: 'Decision Stability', value: decisionStability, icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen gradient-subtle">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display text-3xl font-bold text-foreground mb-2">Behaviour Pattern Analysis</h1>
          <p className="text-muted-foreground mb-8">Here's what we learned from your responses.</p>

          {/* Confusion Level */}
          <div className="bg-card rounded-2xl p-8 shadow-card mb-6 text-center">
            <AlertTriangle className={`w-12 h-12 mx-auto mb-3 ${confusionColor}`} />
            <p className="text-sm text-muted-foreground mb-1">Career Confusion Level</p>
            <h2 className={`font-display text-4xl font-bold ${confusionColor}`}>{confusionLabel}</h2>
            <div className="mt-4 h-3 bg-secondary rounded-full overflow-hidden max-w-xs mx-auto">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${confusionLevel}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className={`h-full rounded-full ${confusionBg}`}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{confusionLevel}%</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {stats.map(s => (
              <div key={s.label} className="bg-card rounded-2xl p-6 shadow-card text-center">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">{s.label}</p>
                <p className="font-display text-2xl font-bold text-foreground">{s.value}%</p>
              </div>
            ))}
          </div>

          <Button
            onClick={() => navigate('/domain-selection')}
            className="w-full gradient-hero text-primary-foreground rounded-xl py-6 text-lg font-semibold"
          >
            Choose Your Interest Area <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Analysis;
