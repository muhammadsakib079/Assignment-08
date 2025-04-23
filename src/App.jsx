import { useLocation } from 'react-router-dom'; // Import useLocation hook
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { ToastContainer } from 'react-toastify';



export default function App() {
  const location = useLocation();

  // Check if the current route is the 404 page by checking for wildcard matching
  

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
