import React from 'react';
import { Cookie } from 'lucide-react';

const Cookies = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Cookie className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
        <p className="text-xl text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us make your visit to our site better.
        </p>

        <h2>How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Remember your preferences</li>
          <li>Understand how you use our website</li>
          <li>Improve our services</li>
          <li>Provide personalized recommendations</li>
        </ul>

        <h2>Types of Cookies We Use</h2>
        <h3>Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
        </p>

        <h3>Analytics Cookies</h3>
        <p>
          These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
        </p>

        <h3>Preference Cookies</h3>
        <p>
          These cookies enable our website to remember information that changes the way the website behaves or looks, like your preferred language or the region you are in.
        </p>

        <h2>Managing Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect the functionality of our website.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about our Cookie Policy, please contact us through our contact form.
        </p>
      </div>
    </div>
  );
};

export default Cookies;