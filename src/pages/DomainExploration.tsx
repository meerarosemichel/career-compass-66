import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAssessment } from '@/context/AssessmentContext';
import { domains } from '@/data/domains';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, RotateCcw } from 'lucide-react';

const DomainExploration = () => {
  const navigate = useNavigate();
  const { selectedType, trackDomainClick, trackWatchTime, domainSwitchCount } = useAssessment();
  const [activeDomain, setActiveDomain] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const watchStartRef = useRef<number>(0);

  const filteredDomains = domains.filter(d => d.type === selectedType);

  useEffect(() => {
    if (!selectedType) navigate('/domain-selection');
  }, [selectedType, navigate]);

  const handlePlayVideo = (domainId: string) => {
    // Stop previous timer
    if (timerRef.current && activeDomain) {
      clearInterval(timerRef.current);
      const elapsed = Math.round((Date.now() - watchStartRef.current) / 1000);
      trackWatchTime(activeDomain, elapsed);
    }

    setActiveDomain(domainId);
    trackDomainClick(domainId);
    watchStartRef.current = Date.now();

    // Track time every 5 seconds
    timerRef.current = setInterval(() => {
      trackWatchTime(domainId, 5);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleProceed = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (activeDomain) {
      const elapsed = Math.round((Date.now() - watchStartRef.current) / 1000);
      trackWatchTime(activeDomain, elapsed);
    }
    navigate('/results');
  };

  return (
    <div className="min-h-screen gradient-subtle">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">
              Explore {selectedType === 'technical' ? 'Technical' : 'Non-Technical'} Domains
            </h1>
            <p className="text-muted-foreground mt-1">Watch videos to explore different career domains.</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <RotateCcw className="w-4 h-4" />
              <span>{domainSwitchCount} switches</span>
            </div>
          </div>
        </div>

        {/* Active video */}
        {activeDomain && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl overflow-hidden shadow-elevated mb-8"
          >
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${domains.find(d => d.id === activeDomain)?.videoId}?autoplay=1`}
                title="Domain Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0"
              />
            </div>
            <div className="p-4">
              <h3 className="font-display font-semibold text-foreground">
                {domains.find(d => d.id === activeDomain)?.name}
              </h3>
            </div>
          </motion.div>
        )}

        {/* Domain cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDomains.map(d => (
            <motion.button
              key={d.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handlePlayVideo(d.id)}
              className={`text-left bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-all border-2
                ${activeDomain === d.id ? 'border-primary' : 'border-transparent'}`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  d.type === 'technical' ? 'gradient-hero' : 'gradient-warm'
                }`}>
                  <Play className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm">{d.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{d.description}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            onClick={handleProceed}
            className="gradient-hero text-primary-foreground rounded-xl px-8 py-6 text-lg font-semibold"
          >
            See My Results <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DomainExploration;
