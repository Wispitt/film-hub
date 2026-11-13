import { Outlet } from 'react-router';

import { Header } from '../components/Button';

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
