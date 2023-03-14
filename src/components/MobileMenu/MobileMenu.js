import { useEffect } from 'react';
import { Navbar } from './MobileMenu.styled';
import { CloseDeleteBtn, Nav, Contacts, Backdrop } from 'components';

export function MobileMenu({ handleClick, isOpen }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <>
      <Backdrop open={isOpen}>
        <Navbar>
          <CloseDeleteBtn handleClick={handleClick} />
          <Nav layout="header" />
          <Contacts />
        </Navbar>
      </Backdrop>
    </>
  );
}
