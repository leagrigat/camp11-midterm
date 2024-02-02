import { useContext, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { checkAuthContext } from '../context/CheckAuthProvider';

function LayoutWithoutNav() {
  const { userIsLoggedIn, isAuthLoading } = useContext(checkAuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthLoading) {
      if (
        !userIsLoggedIn &&
        location.pathname !== '/' &&
        !userIsLoggedIn &&
        location.pathname !== '/register'
      ) {
        navigate('/');
      }
    }
  }, [isAuthLoading, userIsLoggedIn]);
  return (
    <main className="h-full">
      <Outlet />
    </main>
  );
}

export default LayoutWithoutNav;
