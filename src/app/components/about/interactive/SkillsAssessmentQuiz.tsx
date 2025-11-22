'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SkillsAssessmentQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      q: 'What type of project do you need?',
      options: ['Website', 'Web App', 'Mobile App', 'API'],
    },
    {
      q: 'What is your timeline?',
      options: ['1-2 weeks', '1 month', '2-3 months', '3+ months'],
    },
    {
      q: 'What is your budget range?',
      options: ['< $5k', '$5k-$10k', '$10k-$25k', '$25k+'],
    },
  ];

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="my-12 p-8 bg-white/5 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-cyan-300">Skills Assessment Quiz</h3>
      
      {step < questions.length ? (
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <p className="text-lg mb-4 text-white">{questions[step].q}</p>
          <div className="space-y-3">
            {questions[step].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="block w-full text-left p-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      ) : (
        <div className="text-center">
          <p className="text-xl text-green-400 mb-4">✅ Assessment Complete!</p>
          <p className="text-gray-300">Based on your answers, I can help you build your project.</p>
          <button
            onClick={() => { setStep(0); setAnswers([]); }}
            className="mt-4 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Start Over
          </button>
        </div>
      )}

      <div className="mt-6 flex gap-2">
        {questions.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 flex-1 rounded-full ${
              idx <= step ? 'bg-cyan-400' : 'bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
