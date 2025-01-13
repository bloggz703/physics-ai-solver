import React from 'react';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-xl text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>Introduction</h2>
        <p>
          At Physics AI Solver, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2>Information We Collect</h2>
        <p>We collect information that you provide directly to us when you:</p>
        <ul>
          <li>Use our recommendation tool</li>
          <li>Contact us through our contact form</li>
          <li>Subscribe to our newsletter</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Respond to your inquiries and requests</li>
          <li>Improve our website and services</li>
          <li>Send you updates and marketing communications (with your consent)</li>
        </ul>

        <h2>Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this Privacy Policy.
        </p>

        <h2>Security</h2>
        <p>
          We implement appropriate technical and organizational measures to maintain the security of your personal information.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our contact form.
        </p>
      </div>
    </div>
  );
};

export default Privacy;