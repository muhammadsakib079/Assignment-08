import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import Booking from './pages/Booking.jsx' 
import LawyerProfile from './pages/LawyerProfile/LawyerProfile.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blogs', element: <Blogs /> },
      { path: '/contact', element: <Contact /> },
      { path: '/bookings', element: <Booking /> }, 
      { path: '/lawyer/:id', element: <LawyerProfile /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

