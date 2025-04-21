import React, { useState } from 'react';
import blogs from '../data/blogs.json'; // Adjust path as needed

const Blogs = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleAnswer = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-10">
        React Interview Questions
      </h1>
      
      <div className="space-y-6">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
          >
            <button
              className="w-full text-left p-6 focus:outline-none"
              onClick={() => toggleAnswer(blog.id)}
              aria-expanded={expandedId === blog.id}
              aria-controls={`answer-${blog.id}`}
            >
              <h2 className="text-xl font-semibold text-gray-800 flex justify-between items-center">
                {blog.question}
                <span className="text-green-600 ml-4">
                  {expandedId === blog.id ? '−' : '+'}
                </span>
              </h2>
            </button>
            
            <div
              id={`answer-${blog.id}`}
              className={`px-6 pb-6 pt-0 transition-all duration-300 ease-in-out ${
                expandedId === blog.id ? 'block' : 'hidden'
              }`}
            >
              <p className="text-gray-600 leading-relaxed">
                {blog.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;