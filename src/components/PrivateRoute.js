import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = localStorage.getItem('token');

  if (!isLoggedIn) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}
