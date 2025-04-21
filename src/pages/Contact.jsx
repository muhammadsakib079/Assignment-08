import React from 'react';
import { Link } from 'react-router-dom';

const ContactNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-50 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-green-700 p-4 text-white">
          <h1 className="text-2xl font-bold">404 - Contact Not Found</h1>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              Oops! Page Not Found
            </h2>
            
            <p className="text-gray-600 mb-6">
              The contact page you're looking for doesn't exist. Let's get you back on track.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Return to Home
            </Link>
            
            <Link
              to="/contact"
              className="bg-white border border-green-600 text-green-600 hover:bg-green-50 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Try Contact Again
            </Link>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-100 px-4 py-3 text-center text-gray-600 text-sm">
          <p>
            Need help? Email <a href="mailto:help@law.cf" className="text-green-600">help@law.cf</a>
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default ContactNotFound;