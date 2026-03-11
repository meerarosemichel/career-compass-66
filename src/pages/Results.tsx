import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '@/context/AssessmentContext';
import { Button } from '@/components/ui/button';
import { Trophy, Target, TrendingUp, AlertTriangle, Download, RotateCcw, CheckCircle } from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();
  const { finalResult, computeFinalResult, resetAssessment, analysisResult } = useAssessment();

  useEffect(() => {
    if (!finalResult && analysisResult) {
      try { computeFinalResult(); } catch { navigate('/'); }
    } else if (!analysisResult) {
      navigate('/');
    }
  }, [finalResult, analysisResult, computeFinalResult, navigate]);

  if (!finalResult) return null;

  const { recommendedDomain, confusionLevel, confusionLabel, engagementScore, longTermFit,
    technicalScore, nonTechnicalScore, decisionStability, domainSwitchCount } = finalResult;

  const confusionColor = confusionLabel === 'Low' ? 'text-confusion-low' :
    confusionLabel === 'Moderate' ? 'text-confusion-medium' : 'text-confusion-high';

  const handleDownload = () => {
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Career Assessment Report</title>
    <style>body{font-family:system-ui,sans-serif;max-width:700px;margin:0 auto;padding:40px;color:#1a1a2e}
    h1{color:#0d9373}h2{color:#333;border-bottom:2px solid #0d9373;padding-bottom:8px}
    .metric{display:inline-block;margin:10px 20px 10px 0;padding:12px 20px;background:#f0fdf9;border-radius:12px}
    .metric strong{display:block;font-size:24px;color:#0d9373}
    .step{padding:8px 0;border-bottom:1px solid #eee}
    </style></head><body>
    <h1>🎯 Career Assessment Report</h1>
    <p>Generated on ${new Date().toLocaleDateString()}</p>
    <h2>Confusion Level</h2>
    <div class="metric"><strong>${confusionLabel} (${confusionLevel}%)</strong>Career Confusion</div>
    <div class="metric"><strong>${engagementScore}%</strong>Engagement Score</div>
    <h2>Behaviour Pattern Summary</h2>
    <div class="metric"><strong>${technicalScore}%</strong>Technical Interest</div>
    <div class="metric"><strong>${nonTechnicalScore}%</strong>Non-Technical Interest</div>
    <div class="metric"><strong>${decisionStability}%</strong>Decision Stability</div>
    <div class="metric"><strong>${domainSwitchCount}</strong>Domain Switches</div>
    <h2>Recommended Career</h2>
    <p><strong>${recommendedDomain.name}</strong></p>
    <p>Careers: ${recommendedDomain.careers.join(', ')}</p>
    <p>Long-Term Suitability: <strong>${longTermFit}</strong></p>
    <h2>Learning Roadmap</h2>
    ${recommendedDomain.roadmap.map((s, i) => `<div class="step"><strong>Step ${i + 1}:</strong> ${s}</div>`).join('')}
    </body></html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'career-assessment-report.html';
    a.click();
  };

  const handleRestart = () => {
    resetAssessment();
    navigate('/');
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Recommended Career */}
          <div className="bg-card rounded-2xl p-8 shadow-elevated text-center mb-6">
            <Trophy className="w-16 h-16 text-accent mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-1">Recommended Career</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
              {recommendedDomain.name}
            </h1>
            <p className="text-muted-foreground mb-4">{recommendedDomain.description}</p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {recommendedDomain.careers.map(c => (
                <span key={c} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {c}
                </span>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{longTermFit}</span>
            </div>
          </div>

          {/* Scores */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Confusion', value: `${confusionLevel}%`, sub: confusionLabel, icon: AlertTriangle, color: confusionColor },
              { label: 'Engagement', value: `${engagementScore}%`, sub: 'Score', icon: TrendingUp, color: 'text-primary' },
              { label: 'Technical', value: `${technicalScore}%`, sub: 'Interest', icon: TrendingUp, color: 'text-primary' },
              { label: 'Stability', value: `${decisionStability}%`, sub: 'Decision', icon: Target, color: 'text-primary' },
            ].map(s => (
              <div key={s.label} className="bg-card rounded-xl p-4 shadow-card text-center">
                <s.icon className={`w-6 h-6 mx-auto mb-2 ${s.color}`} />
                <p className="font-display text-xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label} · {s.sub}</p>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <div className="bg-card rounded-2xl p-8 shadow-card mb-6">
            <h2 className="font-display text-xl font-bold text-foreground mb-6">
              📚 Study Roadmap for {recommendedDomain.name}
            </h2>
            <div className="space-y-4">
              {recommendedDomain.roadmap.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full gradient-hero flex items-center justify-center shrink-0 text-primary-foreground text-sm font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="text-foreground font-medium">{step}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-muted-foreground/30 shrink-0 mt-1" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button onClick={handleDownload} className="flex-1 gradient-hero text-primary-foreground rounded-xl py-6 text-lg font-semibold">
              <Download className="mr-2 w-5 h-5" /> Download Report
            </Button>
            <Button onClick={handleRestart} variant="outline" className="rounded-xl py-6">
              <RotateCcw className="mr-2 w-4 h-4" /> Start Over
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;
