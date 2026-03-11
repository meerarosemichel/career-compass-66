import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAssessment, AnswerValue } from '@/context/AssessmentContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

const answerOptions: { label: string; value: AnswerValue }[] = [
  { label: 'Strongly Agree', value: 5 },
  { label: 'Agree', value: 4 },
  { label: 'Neutral', value: 3 },
  { label: 'Disagree', value: 2 },
  { label: 'Strongly Disagree', value: 1 },
];

const Questionnaire = () => {
  const navigate = useNavigate();
  const { selectedQuestions, initQuestions, answers, setAnswer } = useAssessment();
  const [currentQ, setCurrentQ] = useState(0);

  useEffect(() => {
    if (selectedQuestions.length === 0) initQuestions();
  }, [selectedQuestions, initQuestions]);

  if (selectedQuestions.length === 0) return null;

  const question = selectedQuestions[currentQ];
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / 20) * 100;
  const allAnswered = answeredCount === 20;

  return (
    <div className="min-h-screen gradient-subtle">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQ + 1} of 20</span>
            <span>{answeredCount}/20 answered</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full gradient-hero rounded-full"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question */}
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card rounded-2xl p-8 shadow-card"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4 capitalize">
            {question.category}
          </div>
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-8">
            {question.text}
          </h2>

          <div className="space-y-3">
            {answerOptions.map(opt => {
              const selected = answers[question.id] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => setAnswer(question.id, opt.value)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all font-medium text-sm
                    ${selected
                      ? 'border-primary bg-primary/5 text-foreground'
                      : 'border-border bg-card text-muted-foreground hover:border-primary/30'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    {opt.label}
                    {selected && <CheckCircle className="w-5 h-5 text-primary" />}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
            disabled={currentQ === 0}
            className="rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Previous
          </Button>

          {currentQ < 19 ? (
            <Button
              onClick={() => setCurrentQ(currentQ + 1)}
              className="gradient-hero text-primary-foreground rounded-xl"
            >
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={() => navigate('/analysis')}
              disabled={!allAnswered}
              className="gradient-hero text-primary-foreground rounded-xl"
            >
              Submit Assessment <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>

        {/* Question dots */}
        <div className="flex flex-wrap gap-2 mt-8 justify-center">
          {selectedQuestions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrentQ(i)}
              className={`w-8 h-8 rounded-lg text-xs font-medium transition-all
                ${i === currentQ ? 'gradient-hero text-primary-foreground' :
                  answers[q.id] ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'
                }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
