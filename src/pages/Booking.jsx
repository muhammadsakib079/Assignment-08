import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import lawyersData from '../data/lawyer.json';
import { Link } from 'react-router';
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

      toast.error(
        <span className="text-red-600">
          Appointment with <strong>{name}</strong> cancelled.
        </span>,
        {
          icon: false,
          autoClose: 3000,
          closeButton: false,
          hideProgressBar: false,
        }
      );
    } catch (error) {
      toast.error("Failed to cancel appointment");
      console.error("Cancellation error:", error);
    }
  };

  const chartData = bookings.map(lawyer => ({
    name: lawyer.name,
    fees: lawyer.consultation_fee,
  }));

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
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorFees" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Bar
                  dataKey="fees"
                  fill="url(#colorFees)"
                  radius={[4, 4, 0, 0]} // Rounded top corners
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      <div className='mt-20'>
        <h2 className="text-3xl font-bold text-center mb-6">My Appointments</h2>
        <p className="text-center text-gray-500 mb-8">
          Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
        </p>
      </div>



      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No Appointments Booked</h3>
          <p className="text-gray-600 mb-4">You haven't booked any appointments yet.</p>
          <p>
            <Link
              to="/"
              className="inline-block text-xl px-6 py-2 bg-[var(--button-background)] text-white rounded-lg hover:bg-green-700"
            >
              Find a Lawyer
            </Link>
          </p>
        </div>
      ) : (
        <div className="space-y-4 my-30">
          {bookings.map(lawyer => (
            <div key={lawyer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md my-8">
              <div>
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
                      <p className="text-sm text-gray-600">{lawyer.experience} Years Experience</p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end">
                    <span className="font-medium text-gray-800">
                      Appointment Fee : {lawyer.consultation_fee} Taka
                    </span>

                  </div>
                </div>
                <div className='border-t border-dashed border-gray-400 mt-4 pt-2'>
                <button
                      onClick={() => handleCancel(lawyer.id, lawyer.name)}
                      className="mt-2 w-full px-4 py-2 text-sm border border-red-400 text-red-600 font-semibold rounded-full hover:bg-red-50 "
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
  );
}

export default Booking;


