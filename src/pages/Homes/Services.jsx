// Completed Service Bar
import React from 'react';
import CountUp from 'react-countup';
import '../../index.css';

const Services = () => {
    return (
        <div className="pt-22 pb-44 px-4 mulish">
            <div className='w-[75vw] mx-auto'>

                <div className="text-center mb-18">
                    <h2 className="text-[40px] font-bold">
                        We Provide Best Law Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-700">
                        Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                    </p>
                </div>

                <div className="mt-10 grid gap-12 grid-cols-4">

                    <ServiceCard
                        img="https://i.ibb.co.com/8LkzDC4W/success-doctor.png"
                        count={199}
                        label="Total Lawyers"
                    />

                    <ServiceCard
                        img="https://i.ibb.co.com/Kc6khRRF/success-review.png"
                        count={467}
                        label="Total Reviews"
                    />

                    <ServiceCard
                        img="https://i.ibb.co.com/TxzTLZMH/success-patients.png"
                        count={1900}
                        label="Cases Initiated"
                    />

                    <ServiceCard
                        img="https://i.ibb.co.com/xq6b71rD/success-staffs.png"
                        count={300}
                        label="Total Staff"
                    />

                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({ img, count, label }) => (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg ">
        <img src={img} alt={label} className="w-22" />
        <div className="text-4xl font-bold py-3">
            <CountUp end={count} duration={3} />+
        </div>
        <div className="text-xl font-medium text-gray-700">
            {label}
        </div>
    </div>
);

export default Services;
