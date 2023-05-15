import { useEffect, useState } from 'react';
import * as API from 'services/api';
import {
  Link,
  NavItem,
  NavItemFooter,
  NavList,
  NavListFooter,
} from './Nav.styled';
import { Loader } from 'components/Loader';

export function Nav({ layout }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { role } = await API.getCurrentUser();
        setIsAdmin(role === 'admin');
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setIsAdmin(false);
          console.log('User is not authorized');
        } else {
          console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [isAdmin]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {layout === 'header' ? (
        <NavList layout={layout}>
          <NavItem>
            <Link to="/">ГОЛОВНА</Link>
          </NavItem>
          <NavItem>
            <Link to="/shop">МАГАЗИН</Link>
          </NavItem>
          <NavItem>
            <Link to="/about-us">ПРО НАС</Link>
          </NavItem>
          <NavItem>
            <Link to="/contacts">КОНТАКТИ</Link>
          </NavItem>
          <NavItem>
            <Link to="/reviews">ВІДГУКИ</Link>
          </NavItem>
          <NavItem>
            <Link to="/payment-delivery">ОПЛАТА ТА ДОСТАВКА</Link>
          </NavItem>
          {isAdmin && (
            <NavItem>
              <Link to="/admin">АДМІН</Link>
            </NavItem>
          )}
        </NavList>
      ) : (
        <NavListFooter>
          <NavItemFooter>
            <Link to="/">ГОЛОВНА</Link>
          </NavItemFooter>
          <NavItemFooter>
            <Link to="/shop">МАГАЗИН</Link>
          </NavItemFooter>
          <NavItemFooter>
            <Link to="/about-us">ПРО НАС</Link>
          </NavItemFooter>
          <NavItemFooter>
            <Link to="/contacts">КОНТАКТИ</Link>
          </NavItemFooter>
          <NavItemFooter>
            <Link to="/reviews">ВІДГУКИ</Link>
          </NavItemFooter>
          <NavItemFooter>
            <Link to="/payment-delivery">ОПЛАТА ТА ДОСТАВКА</Link>
          </NavItemFooter>
          {isAdmin && (
            <NavItemFooter>
              <Link to="/admin">АДМІН</Link>
            </NavItemFooter>
          )}
        </NavListFooter>
      )}
    </>
  );
}
