import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Profilefooter({ lawyer }) {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const isAvailable = lawyer.availability.includes(today);

  const handleBooking = () => {
    try {
      const stored = JSON.parse(localStorage.getItem("bookings")) || [];
      
      // Check for duplicate booking
      if (stored.includes(lawyer.id)) {
        toast.error(
          <span className="flex items-center gap-2">
            You already have an appointment with {lawyer.name}
          </span>
        );
        return;
      }
      
      // Add new booking
      const updated = [...stored, lawyer.id];
      localStorage.setItem("bookings", JSON.stringify(updated));
      
      toast.success(
        <span className="flex items-center gap-2">
          Appointment booked with {lawyer.name}
        </span>
      );

      navigate('/bookings');
    } catch (error) {
      toast.error("Failed to book appointment");
      console.error("Booking error:", error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl text-center font-bold mb-4">Book an Appointment</h3>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 mb-6 border-t border-dashed ">
        <h4 className="font-bold text-xl mb-2 md:mb-0">Availability</h4>
        <div className={`text-center text-md font-semibold px-4 py-2 rounded-full ${
          isAvailable 
            ? 'bg-green-100 border border-green-700 text-green-700' 
            : 'bg-red-100 border border-red-700 text-red-700'
        }`}>
          {isAvailable ? 'Available Today' : `Not Available on ${today}`}
        </div>
      </div>
      <div className='border-t relative bottom-6 '> 
        <p className="mb-6 text-yellow-600 mt-6 bg-yellow-100 border border-yellow-400 text-md font-semibold px-4 py-2 rounded-full">
          Due to high demand, we recommend booking appointments in advance.
        </p>
      </div>
      <button
        onClick={handleBooking}
        disabled={!isAvailable}
        className={`w-full text-lg py-4 font-medium rounded-full ${
          isAvailable
            ? 'bg-[var(--button-background)] hover:bg-green-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isAvailable ? 'Book Appointment Now' : 'Not Available Today'}
      </button>
    </div>
  );
}

export default Profilefooter;
