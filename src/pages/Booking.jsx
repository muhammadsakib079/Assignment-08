import React, { useEffect, useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
import lawyersData from '../data/lawyer.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Booking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = () => {
      try {
        const storedIds = JSON.parse(localStorage.getItem("bookings")) || [];
        const enriched = storedIds
          .map(id => lawyersData.find(l => l.id === id))
          .filter(Boolean);
        setBookings(enriched);
      } catch (error) {
        toast.error("Failed to load bookings");
        console.error("Booking error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = (id, name) => {
    try {
      const updated = bookings.filter(lawyer => lawyer.id !== id);
      setBookings(updated);

      const stored = JSON.parse(localStorage.getItem("bookings")) || [];
      const updatedStored = stored.filter(storedId => storedId !== id);
      localStorage.setItem("bookings", JSON.stringify(updatedStored));
      
      toast.success(`Appointment with ${name} cancelled`);
    } catch (error) {
      toast.error("Failed to cancel appointment");
      console.error("Cancellation error:", error);
    }
  };

  const chartData = Object.values(
    bookings.reduce((acc, cur) => {
      acc[cur.speciality] = acc[cur.speciality] || { 
        name: cur.speciality, 
        fees: 0,
        count: 0 
      };
      acc[cur.speciality].fees += cur.consultation_fee;
      acc[cur.speciality].count += 1;
      return acc;
    }, {})
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      {bookings.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-center my-6">Appointments Overview</h2>
          <div className="bg-white p-4 rounded-lg shadow mb-8">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => 
                    name === 'fees' ? [`${value} Taka`, 'Total Fees'] : [value, 'Appointments']
                  }
                />
                <Area 
                  type="monotone" 
                  dataKey="fees" 
                  name="Total Fees"
                  stroke="#0ea5e9" 
                  fill="#38bdf8" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      <div className="bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center mb-6">My Appointments</h2>
        <p className="text-center text-gray-500 mb-8">
          Our platform connects you with verified, experienced lawyers across various specialties.
        </p>

        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No Appointments Booked</h3>
            <p className="text-gray-600 mb-4">You haven't booked any appointments yet.</p>
            <a 
              href="/" 
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Find a Lawyer
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map(lawyer => (
              <div key={lawyer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={lawyer.image} 
                      alt={lawyer.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{lawyer.name}</h3>
                      <p className="text-sm text-gray-500">{lawyer.speciality}</p>
                      <p className="text-sm text-gray-600">{lawyer.experience}</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="font-medium text-gray-800">
                      {lawyer.consultation_fee} Taka
                    </span>
                    <button
                      onClick={() => handleCancel(lawyer.id, lawyer.name)}
                      className="mt-2 px-4 py-2 text-sm border border-red-400 text-red-600 font-semibold rounded-full hover:bg-red-50 transition"
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Booking;