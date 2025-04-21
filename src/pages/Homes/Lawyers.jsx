import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import lawyers from '../../data/lawyer.json';



const Lawyers = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleLawyers = showAll ? lawyers : lawyers.slice(0, 6);

    return (
        <div className=" mx-auto px- py-12">
            <h2 className="text-4xl font-bold text-center mb-4">Our Best Lawyers</h2>
            <p className="text-center max-w-6xl mx-auto text-gray-600 mb-10">
                Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                Whether it’s a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>

            <div className="grid grid-cols-2 gap-18">
                {visibleLawyers.map((lawyer, index) => (
                    <div key={index} className="border flex items-center gap-10 border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-2xl transition bg-white">

                        <div>
                            <img
                                src={lawyer.image}
                                alt={lawyer.name}
                                className="w-60 h-60 rounded-md bg-gray-300 object-cover"
                            />
                        </div>

                        <div>
                            <div className="flex items-center space-x-4">

                                <div>
                                    <span className="inline-block text-md bg-green-100 text-green-700  font-semibold px-4 py-2 rounded-full mr-2">
                                        Available
                                    </span>
                                    <span className="inline-block bg-blue-100 text-blue-700 text-md font-semibold px-4 py-2 rounded-full">
                                        {lawyer.experience}
                                    </span>
                                </div>
                            </div>

                            <div className="my-8">
                                <h3 className="text-2xl font-semibold">{lawyer.name}</h3>
                                <p className=" text-gray-600 py-1">{lawyer.speciality}</p>
                                <p className=" text-gray-500">
                                    <span className="inline-block align-middle " >Ⓡ License No: {lawyer.license_number}</span>
                                </p>
                            </div>

                            <div className="mt-4">
                                <Link to={`/lawyer/${lawyer.id}`}>
                                    <button className="font-semibold btn btn-outline btn-primary w-sm rounded-full">
                                        View Details
                                    </button>
                                </Link>


                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium"
                >
                    {showAll ? 'Show Less' : 'Show All Lawyer'}
                </button>
            </div>
        </div>
    );
};

export default Lawyers;

