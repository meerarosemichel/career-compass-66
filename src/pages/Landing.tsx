import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain, ArrowRight, Target, BarChart3, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Brain, title: 'Behaviour Analysis', desc: '20 curated questions to map your career mindset' },
    { icon: Target, title: 'Domain Exploration', desc: 'Discover technical & non-technical career paths' },
    { icon: BarChart3, title: 'Engagement Scoring', desc: 'AI-powered analysis of your interests' },
    { icon: Compass, title: 'Career Roadmap', desc: 'Step-by-step guidance to your ideal career' },
  ];

  return (
    <div className="min-h-screen gradient-subtle">
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-primary" />
          <span className="font-display font-bold text-lg text-foreground">CareerLens</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
            <Brain className="w-4 h-4" />
            Rule-Based AI Career System
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Career Confusion{' '}
            <span className="text-gradient">Prediction System</span>
            {' '}for Students
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Feeling lost about your career path? Our intelligent assessment analyzes your behaviour patterns,
            interests, and engagement to predict your confusion level and recommend the perfect career for you.
          </p>
          <Button
            onClick={() => navigate('/questionnaire')}
            className="gradient-hero text-primary-foreground px-8 py-6 text-lg rounded-xl font-semibold shadow-elevated hover:opacity-90 transition-opacity"
          >
            Start Assessment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 bg-card rounded-2xl p-8 shadow-card"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Algorithms Used</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'Rule-Based Algorithm', desc: 'Predefined rules map answers to career traits without ML models.' },
              { name: 'Behavioural Conflict Detection', desc: 'Detects contradictory interests indicating career confusion.' },
              { name: 'Domain Switching Algorithm', desc: 'Tracks how often you switch between domains to measure indecision.' },
              { name: 'Engagement Scoring Algorithm', desc: 'Combines watch time, clicks, and consistency into a single score.' },
              { name: 'Rule-Based AI Decision System', desc: 'Synthesizes all signals to recommend a career with confidence.' },
            ].map(a => (
              <div key={a.name} className="p-4 rounded-xl bg-secondary/50">
                <h4 className="font-display font-semibold text-foreground text-sm">{a.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Landing;
