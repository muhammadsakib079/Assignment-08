import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.jsx';
import './index.css';



import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Booking from './pages/Booking.jsx';
import NotFound from './pages/NotFound.jsx';
import LawyerProfile from './pages/LawyerProfile/LawyerProfile.jsx';

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
    path: '*', 
    element: <NotFound />, 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
