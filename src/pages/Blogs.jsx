// Completed Blogs
import React, { useState, useEffect } from 'react';
import faqData from '../data/blogs.json';

const Blogs = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    setFaqs(faqData);
  }, []);

  return (
    <div className="space-y-5 my-15">

      {faqs.map((item, index) => (

        <div key={item.id} className="collapse collapse-plus p-3 bg-white border shadow-sm border-gray-200 rounded-lg">

          <input type="checkbox" name="faq-accordion" className="peer" />

          <div className="collapse-title font-medium text-xl peer-checked:text-blue-900">
            {item.question}
          </div>

          <div className="collapse-content text-gray-800 t leading-relaxed">
            {item.answer}
          </div>

        </div>

      ))}

    </div>
  );
};

export default Blogs;
