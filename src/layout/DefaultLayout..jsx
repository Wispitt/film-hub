import { Outlet } from 'react-router';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
