import React from 'react';

function Profilebody({ lawyer }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 items-center bg-gray-50 rounded-lg shadow-sm">
      <div className="">
        <img
          src={lawyer.image}
          alt={lawyer.name}
          className="w-60 h-60 max-w-xs rounded-md bg-gray-200 object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 w-full md:w-2/3">
        <span className="bg-blue-100 text-blue-700 text-sm md:text-md font-semibold px-4 py-2 rounded-full self-start">
          {lawyer.experience}
        </span>
        
        <h2 className="text-2xl font-bold">{lawyer.name}</h2>

        <div className='flex flex-col md:flex-row md:items-center gap-4'>
          <h3 className="font-semibold text-gray-700">{lawyer.speciality}</h3>
          <p className="text-sm text-gray-500">License No: {lawyer.license_number}</p>
        </div>

        <div className='flex flex-col md:flex-row md:items-center gap-2'>
          <h4 className="font-medium text-gray-700">Availability:</h4>
          <ul className="flex flex-wrap gap-2">
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
          <h4 className="font-medium text-gray-700">Consultation Fee:</h4>
          <p className="text-lg font-bold text-green-700">{lawyer.consultation_fee} Taka</p>
        </div>
      </div>
    </div>
  );
}

export default Profilebody;