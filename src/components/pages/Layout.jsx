import { Outlet, useLocation } from 'react-router-dom';
import Header from '../organisms/Header';
import Footer from '../molecules/Footer/Footer';

const Layout = () => {
  const getParamsAuth = ['sign-up', 'sign-in', 'recover-password'];
  const param = useLocation().pathname.split('/');
  const result = getParamsAuth.includes(param[1]);
  return (
    <>
      {result ? <Header authen={true} /> : <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
