import React from 'react';
import { HelpCircle } from 'lucide-react';

const Faqs = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <HelpCircle className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">
          Common questions about physics AI solvers and our comparison tools
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">General Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">What is a physics AI solver?</h3>
                <p>A physics AI solver is an artificial intelligence tool that helps solve physics problems by providing step-by-step solutions and explanations. It uses advanced algorithms to understand and solve complex physics equations and problems.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">How accurate are AI physics solvers?</h3>
                <p>Modern physics AI solvers are highly accurate, especially for standard physics problems. However, for very complex or novel problems, it's always good to verify solutions with multiple methods or consult with a physics expert.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Platform-Specific Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">What's the difference between Julius AI and TutorBin?</h3>
                <p>Julius AI is primarily an AI-powered solution offering instant, automated problem-solving, while TutorBin combines AI capabilities with human tutoring support. Julius AI is subscription-based, while TutorBin uses a pay-per-use model.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Which physics topics are covered?</h3>
                <p>Both platforms cover a wide range of physics topics including mechanics, thermodynamics, electromagnetism, quantum physics, and more. They can handle problems from high school to graduate level physics.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Usage Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold">How do I choose the right physics AI solver?</h3>
                <p>Use our recommendation tool at the top of our homepage. It considers your specific needs, including your study level, preferred learning style, and budget to suggest the best platform for you.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Can I try these platforms before subscribing?</h3>
                <p>Yes, both Julius AI and TutorBin offer trial options. Julius AI typically offers a limited free trial, while TutorBin allows you to try a sample problem before purchasing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;