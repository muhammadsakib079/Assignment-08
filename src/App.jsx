import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />
      <main className="flex-grow mx-42">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
