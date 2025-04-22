// Completed ProfileHead
import React from 'react';

function ProfileHead({ lawyer }) {
  return (
    <div className="text-center bg-gray-100 rounded-xl py-12">
      <h1 className="text-4xl font-bold pb-4">Lawyer's Profile Details</h1>
      <p className="text-gray-700 max-w-4xl mx-auto">
        Expert legal consultation with {lawyer.name}, specializing in {lawyer.speciality} with {lawyer.experience} Years Experience.
      </p>
    </div>
  );
}
export default ProfileHead;