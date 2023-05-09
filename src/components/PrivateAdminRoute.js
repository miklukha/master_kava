import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from 'services/api';

export function PrivateAdminRoute({ children, redirectTo = '/' }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { role } = await API.getCurrentUser();
        setIsAdmin(role === 'admin');
      } catch (error) {
        setIsAdmin(false);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <div>Йде завантаження... Почекайте, будь ласка</div>;
  }

  if (!isAdmin) {
    return <Navigate to={redirectTo} />;
  }

  return children;
}
