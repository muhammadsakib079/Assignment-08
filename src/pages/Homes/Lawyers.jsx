// Completed Lawyer Card
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import lawyers from '../../data/lawyer.json';

const Lawyers = () => {

    const [showAll, setShowAll] = useState(false);
    const visibleLawyers = showAll ? lawyers : lawyers.slice(0, 6);

    const isAvailableToday = (availability) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const todayName = days[today];
    return availability.includes(todayName);

    };

    return (
        <div className="mx-auto px-4 py-12 ">

            <h2 className="text-4xl font-bold text-center mb-4">Our Best Lawyers</h2>
            <p className="text-center max-w-5xl mx-auto text-gray-600 mb-20">
                Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>


            <div className="grid grid-cols-2  justify-between gap-8">

                {visibleLawyers.map((lawyer) => (

                    <div key={lawyer.id} className="border flex flex-row items-center gap-6 border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-2xl">

                        <div>
                            <img className="w-50 h-50 rounded-md object-cover"
                                src={lawyer.image}
                                alt={lawyer.name}
                            />
                        </div>

                        <div className="w-2/3">
                            <div className="flex gap-2 mb-4">
                                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                                    isAvailableToday(lawyer.availability)
                                        ? 'bg-green-100 text-green-700'
                                        : 'bg-red-100 text-red-700'                                      
                                }`}>
                                    {isAvailableToday(lawyer.availability) ? 'Available Today' : 'Not Available'}
                                </span>
                                <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                                    {lawyer.experience} Years Experience
                                </span>
                            </div>


                            <div className="mb-4">
                                <h3 className="text-[22px] font-semibold">{lawyer.name}</h3>
                                <p className="text-gray-600 py-1">{lawyer.speciality}</p>
                                <p className="text-sm text-gray-500">
                                    Ⓡ License No : BD-{lawyer.license_number}
                                </p>
                            </div>


                            <div className="mt-4">
                                <Link to={`/lawyer/${lawyer.id}`}>
                                    <button className="text-lg btn btn-outline btn-primary w-full rounded-full py-2">View Details
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>


            {lawyers.length > 6 && (

                <div className="flex justify-center mt-15">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-xl px-6 py-3 bg-[var(--button-background)] text-white rounded-full hover:bg-green-700 ">
                        {showAll ? 'Show Less' : 'Show All Lawyers'}
                    </button>
                </div>

            )}

        </div>
    );
};
export default Lawyers;