import { useParams } from 'react-router-dom';
import lawyers from '../../data/lawyer.json';
const LawyerProfile = () => {
  const { id } = useParams();
  const lawyer = lawyers.find((item) => item.id === parseInt(id));

  if (!lawyer) {
    return <div className="text-center py-20 text-red-500">Lawyer not found!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img
          src={lawyer.image}
          alt={lawyer.name}
          className="w-64 h-64 rounded-xl object-cover shadow-md"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{lawyer.name}</h2>
          <p className="text-xl text-gray-600">{lawyer.speciality}</p>
          <p className="mt-3 text-gray-700"><strong>Experience:</strong> {lawyer.experience}</p>
          <p className="text-gray-700"><strong>License No:</strong> {lawyer.license_number}</p>
          <p className="text-gray-700"><strong>Available Days:</strong> {lawyer.availability.join(', ')}</p>
          <p className="text-gray-700"><strong>Consultation Fee:</strong> ৳{lawyer.consultation_fee}</p>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;
