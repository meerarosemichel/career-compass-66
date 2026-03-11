import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '@/context/AssessmentContext';
import { Monitor, Users } from 'lucide-react';

const DomainSelection = () => {
  const navigate = useNavigate();
  const { setSelectedType } = useAssessment();

  const choose = (type: 'technical' | 'non-technical') => {
    setSelectedType(type);
    navigate('/domain-exploration');
  };

  return (
    <div className="min-h-screen gradient-subtle flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center"
      >
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
          Choose Your Interest Area
        </h1>
        <p className="text-muted-foreground mb-12">Select the path that resonates with you most.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => choose('technical')}
            className="bg-card rounded-2xl p-10 shadow-card hover:shadow-elevated transition-shadow text-center group"
          >
            <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Monitor className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Technical</h3>
            <p className="text-sm text-muted-foreground">
              Web Dev, Data Science, Cyber Security, UI/UX, Mobile Apps
            </p>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => choose('non-technical')}
            className="bg-card rounded-2xl p-10 shadow-card hover:shadow-elevated transition-shadow text-center group"
          >
            <div className="w-20 h-20 rounded-2xl gradient-warm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-10 h-10 text-accent-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Non-Technical</h3>
            <p className="text-sm text-muted-foreground">
              Digital Marketing, Business, Graphic Design, Writing, HR
            </p>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default DomainSelection;
