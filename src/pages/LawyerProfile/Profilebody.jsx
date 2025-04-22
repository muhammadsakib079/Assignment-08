// Completed ProfileBody
import React from 'react';

function Profilebody({ lawyer }) {
  return (
    <>
      <div className="flex gap-8 p-6 items-center bg-gray-50 rounded-xl shadow-sm">

        <div>
          <img className="w-60 h-60 rounded-md object-cover"
            src={lawyer.image}
            alt={lawyer.name} _img
          />
        </div>

        <div className="flex flex-col gap-4 w-full md:w-2/3">

          <span className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full self-start">
            {lawyer.experience} Years Experience
          </span>

          <h2 className="text-[27px] font-bold">{lawyer.name}</h2>

          <div className='flex items-center gap-4'>
            <h3 className="font-semibold text-gray-700">{lawyer.speciality}</h3>
            <p className="text-sm text-gray-500">License No : BD-{lawyer.license_number}</p>
          </div>

          <div className='flex items-center gap-2'>
            <h4 className="font-medium text-gray-700">Availability :</h4>
            <ul className="flex gap-4">
              {lawyer.availability.map((day, index) => (
                <li
                  key={index}
                  className="text-orange-600 bg-orange-100 border border-orange-300 text-sm font-semibold px-3 py-1 rounded-full"
                >
                  {day}
                </li>
              ))}
            </ul>
          </div>

          <div className='flex items-center gap-4 mt-2'>
            <h4 className="font-medium text-gray-700">Consultation Fee :</h4>
            <p className="text-lg font-bold text-green-700"> Taka : {lawyer.consultation_fee}</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default Profilebody;