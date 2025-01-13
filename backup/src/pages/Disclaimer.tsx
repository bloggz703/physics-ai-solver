import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <AlertTriangle className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
        <p className="text-xl text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>Website Disclaimer</h2>
        <p>
          The information provided on Physics AI Solver is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          Physics AI Solver is a participant in affiliate programs. We may earn a commission when you click on or make purchases via links on our website. This does not affect your purchase price or our editorial independence.
        </p>

        <h2>External Links Disclaimer</h2>
        <p>
          Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        </p>

        <h2>Professional Disclaimer</h2>
        <p>
          The information provided by Physics AI Solver is for educational purposes only. We are not a substitute for professional advice or guidance. Always consult with appropriate professionals for specific advice.
        </p>

        <h2>Errors and Omissions Disclaimer</h2>
        <p>
          While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Physics AI Solver is not responsible for any errors or omissions, or for the results obtained from the use of this information.
        </p>

        <h2>Fair Use Disclaimer</h2>
        <p>
          This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of physics and AI technology. We believe this constitutes a 'fair use' of any such copyrighted material.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Disclaimer, please contact us through our contact form.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;