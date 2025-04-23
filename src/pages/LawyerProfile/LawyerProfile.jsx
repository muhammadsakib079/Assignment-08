// Completed Lawyer Profile
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import lawyers from '../../data/lawyer.json';
import ProfileHead from './ProfileHead';
import Profilebody from './Profilebody';
import Profilefooter from './Profilefooter';
import Loader from '../../components/Loader';

const LawyerProfile = () => {

  const { id } = useParams();
  const [lawyer, setLawyer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const foundLawyer = lawyers.find(l => l.id === parseInt(id));

    if (foundLawyer) {
      setLawyer(foundLawyer);
    }
    
    setLoading(false);

  }, [id]);

  if (loading) return <Loader />;
  if (!lawyer) return <div className="text-center py-12">Lawyer not found</div>;

  return (
    <div className=" mx-auto px-4 py-8">
      <ProfileHead lawyer={lawyer} />
      <div className='my-10'>
        <Profilebody lawyer={lawyer} />
      </div>
      <Profilefooter lawyer={lawyer} />
    </div>
  );
};

export default LawyerProfile;