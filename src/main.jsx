import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Booking from './pages/Booking.jsx';
import LawyerProfile from './pages/LawyerProfile/LawyerProfile.jsx';
import NotFound from './pages/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/blogs', element: <Blogs /> },

      { path: '/bookings', element: <Booking /> },
      { path: '/lawyer/:id', element: <LawyerProfile /> },
    ],
  },
  {
    path: '*', // This will match any undefined path
    element: <NotFound />, // Show the NotFound component
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
