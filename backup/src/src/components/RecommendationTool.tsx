import React, { useState } from 'react';
import { Brain, Calculator } from 'lucide-react';

type Question = {
  id: number;
  text: string;
  options: string[];
};

const questions: Question[] = [
  {
    id: 1,
    text: "What level of physics problems are you solving?",
    options: ["High School", "Undergraduate", "Graduate", "Professional"]
  },
  {
    id: 2,
    text: "Do you prefer AI-only solutions or live tutoring options?",
    options: ["AI-only", "Live Tutoring", "Both"]
  },
  {
    id: 3,
    text: "What's your budget preference?",
    options: ["Low-cost", "Mid-range", "Premium"]
  }
];

const RecommendationTool = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    const [level, preference, budget] = answers;
    
    if (preference === "AI-only" || (budget === "Low-cost" && level !== "Graduate")) {
      return {
        tool: "Julius AI",
        icon: <Brain className="h-12 w-12 text-indigo-600" />,
        reason: "Based on your preferences for AI-driven solutions and budget considerations, Julius AI would be the perfect fit for your needs. It offers instant, accurate solutions at a more accessible price point.",
        link: "https://julius.ai/?via=kwan",
        buttonColor: "bg-indigo-600 hover:bg-indigo-700"
      };
    } else {
      return {
        tool: "TutorBin",
        icon: <Calculator className="h-12 w-12 text-purple-600" />,
        reason: "Given your preference for live tutoring and your requirements, TutorBin would be the best choice. It offers personalized support and comprehensive solutions that align with your needs.",
        link: "https://student.tutorbin.com/auth/register/?ref=Sage3238",
        buttonColor: "bg-purple-600 hover:bg-purple-700"
      };
    }
  };

  const resetTool = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      {!showResult ? (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h3>
          <p className="text-lg text-gray-700 mb-6">{questions[currentQuestion].text}</p>
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors duration-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {getRecommendation().icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            We Recommend: {getRecommendation().tool}
          </h3>
          <p className="text-gray-700 mb-6">
            {getRecommendation().reason}
          </p>
          <div className="space-y-4">
            <a
              href={getRecommendation().link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block ${getRecommendation().buttonColor} text-white px-8 py-3 rounded-lg transition-colors duration-200`}
            >
              Get Started with {getRecommendation().tool}
            </a>
            <div>
              <button
                onClick={resetTool}
                className="mt-4 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationTool;