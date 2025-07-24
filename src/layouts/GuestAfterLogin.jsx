import { Outlet } from 'react-router-dom';
import HeaderGuestAfter from '../components/Guest/HeaderGuestAfter';
import Footer from '../components/Guest/Footer';

const GuestAfterLogin = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderGuestAfter />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default GuestAfterLogin;