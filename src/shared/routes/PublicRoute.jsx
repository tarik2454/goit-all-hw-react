import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children, isLoggedIn }) => {
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to="/leave-request" state={{ from: location }} />;
  }

  return children;
};
