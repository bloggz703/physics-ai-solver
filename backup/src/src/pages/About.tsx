import React from 'react';
import { Users } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Users className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
        <p className="text-xl text-gray-600">
          We're math enthusiasts dedicated to making physics more accessible through AI.
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <p>
          At Physics AI Solver, we understand the challenges students and professionals face when dealing with complex physics problems. As mathematics enthusiasts ourselves, we've experienced firsthand the frustration of getting stuck on difficult problems and the joy of finally understanding complex concepts.
        </p>

        <p>
          Our mission is to bridge the gap between traditional physics education and modern technology by providing comprehensive comparisons and recommendations for the best AI-powered physics solving tools available today.
        </p>

        <h2>Our Values</h2>
        <ul>
          <li>Accuracy in every recommendation</li>
          <li>Transparency in our comparisons</li>
          <li>Commitment to student success</li>
          <li>Passion for mathematics and physics</li>
        </ul>

        <h2>Why Trust Us?</h2>
        <p>
          We spend countless hours testing and evaluating different physics AI solvers to provide you with accurate, unbiased comparisons. Our team consists of mathematics enthusiasts, educators, and technology experts who understand both the technical and practical aspects of physics problem-solving.
        </p>

        <p>
          Our goal is to help you find the perfect tool for your specific needs, whether you're a high school student tackling basic mechanics or a graduate student working on quantum physics.
        </p>
      </div>
    </div>
  );
};

export default About;