import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children, isLoggedIn }) => {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};
