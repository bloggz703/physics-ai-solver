import React from 'react';
import RecommendationTool from '../components/RecommendationTool';
import { Brain, Calculator, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Find Your Perfect Physics AI Solver
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Compare and choose between the best AI-powered physics problem solvers to ace your assignments and master complex concepts.
        </p>
      </div>

      {/* Recommendation Tool Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Not Sure Which One to Choose? Try Our Recommendation Tool!
        </h2>
        <RecommendationTool />
      </section>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Physics AI Solver Showdown: Julius AI vs. TutorBin</h2>
        
        <p className="text-gray-700">
          Physics can be one of the most challenging subjects, with its intricate <strong>formulas</strong>, complex <strong>mathematics</strong>, and seemingly endless <strong>physics problems</strong> to solve. Whether you're tackling <strong>quantum physics</strong>, mastering <strong>AP Physics</strong>, or just trying to keep up with <strong>kinematic equations</strong>, having the right tool at your fingertips can make all the difference. Enter Julius AI and TutorBin—two of the most powerful <strong>physics AI solvers</strong> available today.
        </p>

        <p className="text-gray-700">
          But how do these platforms compare, and which is the best fit for your <strong>physics assignments</strong>? Let's dive into this head-to-head comparison to help you make an informed decision.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-indigo-600" />
              <h3 className="text-2xl font-bold ml-2">Julius AI</h3>
            </div>
            <p className="mb-4">
              Julius AI is an <strong>AI-powered physics problem solver</strong> designed for students and professionals who need <strong>instant solutions</strong> to even the most <strong>complex physics problems</strong>.
            </p>
            <h4 className="font-semibold mb-2">What Makes Julius AI Stand Out?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span><strong>AI-Powered Solutions</strong>: Real-time results for physics equations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span><strong>Scan-and-Solve Physics</strong>: Step-by-step solutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span><strong>Specialized Focus</strong>: Excels in mechanics and calculations</span>
              </li>
            </ul>
            <a 
              href="https://julius.ai/?via=kwan"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              Try Julius AI Now
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Calculator className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold ml-2">TutorBin</h3>
            </div>
            <p className="mb-4">
              TutorBin combines the power of <strong>AI-enabled physics problem-solving</strong> with human expertise for comprehensive learning.
            </p>
            <h4 className="font-semibold mb-2">What Sets TutorBin Apart?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span><strong>24/7 Live Tutoring</strong>: Real-time expert assistance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span><strong>Comprehensive Solutions</strong>: Detailed explanations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2" />
                <span><strong>Interactive Learning</strong>: Personalized guidance</span>
              </li>
            </ul>
            <a 
              href="https://student.tutorbin.com/auth/register/?ref=Sage3238"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Get Help from TutorBin
            </a>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">Feature Comparison</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">Feature</th>
                <th className="text-left">Julius AI</th>
                <th className="text-left">TutorBin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Physics AI Solver</td>
                <td>✅ Yes</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>AI-Driven Insights</td>
                <td>✅ Real-Time Solutions</td>
                <td>✅ Hybrid AI and Tutor Mode</td>
              </tr>
              <tr>
                <td>Step-Wise Solutions</td>
                <td>✅ Yes</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>Live Tutoring Support</td>
                <td>❌ No</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>Pricing Model</td>
                <td>Subscription-Based</td>
                <td>Pay-Per-Use</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4">Which Physics AI Solver Should You Choose?</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Choose Julius AI if:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>You need fast, reliable AI-powered solutions</li>
              <li>You're focusing on specific physics branches</li>
              <li>You prefer a subscription-based model</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Choose TutorBin if:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>You prefer interactive learning with human assistance</li>
              <li>You're tackling complex physics concepts</li>
              <li>You want personalized guidance</li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4">Final Thoughts</h3>
        <p className="mb-6">
          Whether you're preparing for an exam, completing <strong>physics assignments</strong>, or exploring <strong>mathematical applications</strong> in <strong>physics concepts</strong>, both Julius AI and TutorBin offer exceptional tools to <strong>solve complex problems</strong>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a 
            href="https://julius.ai/?via=kwan"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 text-center"
          >
            Try Julius AI Now
          </a>
          <a 
            href="https://student.tutorbin.com/auth/register/?ref=Sage3238"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-center"
          >
            Get Help from TutorBin Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;