// Completed Service Bar
import React, { useState, useEffect } from 'react';

const Services = () => {

    const [counts, setCounts] = useState({
        lawyers: 0,
        reviews: 0,
        cases: 0,
        staff: 0
    });

    useEffect(() => {

        const finalNumbers = {
            lawyers: 199,
            reviews: 467,
            cases: 1900,
            staff: 300
        };

        const animationDuration = 5000;
        const startTime = Date.now();

        const updateCounts = () => {
            const now = Date.now();
            const timePassed = now - startTime;

            const progress = Math.min(timePassed / animationDuration, 1);

            setCounts({
                lawyers: Math.floor(progress * finalNumbers.lawyers),
                reviews: Math.floor(progress * finalNumbers.reviews),
                cases: Math.floor(progress * finalNumbers.cases),
                staff: Math.floor(progress * finalNumbers.staff)
            });

            if (progress < 1) {
                requestAnimationFrame(updateCounts);
            }

        };

        updateCounts();

    }, []);

    return (
        <>
            <div className="pt-22 pb-44 px-4">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">
                        <h2 className="text-[40px] font-extrabold">
                            We Provide Best Law Services
                        </h2>
                        <p className="mt-4 text-lg text-gray-700">
                            Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                        </p>
                    </div>


                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                        <div className=" p-6 bg-gray-50 rounded-lg shadow-lg ">
                            <div>
                                <img src="https://i.ibb.co.com/8LkzDC4W/success-doctor.png" alt="Lawyer_icon" />
                            </div>
                            <div className="text-4xl font-bold py-3">
                                {counts.lawyers}+
                            </div>
                            <div className="text-lg font-medium text-gray-700">
                                Total Lawyers
                            </div>
                        </div>


                        <div className=" p-6 bg-gray-50 rounded-lg shadow-lg ">
                            <div>
                                <img src="https://i.ibb.co.com/Kc6khRRF/success-review.png" alt="review_icon" />
                            </div>
                            <div className="text-4xl font-bold py-3">
                                {counts.reviews}+
                            </div>
                            <div className="text-lg font-medium text-gray-700">
                                Total Reviews
                            </div>
                        </div>


                        <div className=" p-6 bg-gray-50 rounded-lg shadow-lg">
                            <div>
                                <img src="https://i.ibb.co.com/TxzTLZMH/success-patients.png" alt="" />
                            </div>
                            <div className="text-4xl font-bold py-3">
                                {counts.cases}+
                            </div>
                            <div className="text-lg font-medium text-gray-700">
                                Cases Initiated
                            </div>
                        </div>


                        <div className=" p-6 bg-gray-50 rounded-lg shadow-lg">
                            <div>
                                <img src="https://i.ibb.co.com/xq6b71rD/success-staffs.png" alt="" />
                            </div>
                            <div className="text-4xl font-bold py-3">
                                {counts.staff}+
                            </div>
                            <div className="text-lg font-medium text-gray-700">
                                Total Staff
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </>
    );
};

export default Services;