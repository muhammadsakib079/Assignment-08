import { useLocation } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';



export default function App() {
  const location = useLocation();

  
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mx-42">
        <Outlet />
      </main>
       <Footer />
      <ToastContainer />
    </div>
  );
}
