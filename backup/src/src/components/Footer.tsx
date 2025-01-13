import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Physics AI Solver</h3>
            <p className="text-gray-600">
              Helping students and professionals solve complex physics problems with AI.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-600 hover:text-indigo-600">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-600 hover:text-indigo-600">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-600 hover:text-indigo-600">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Physics AI Solver. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;