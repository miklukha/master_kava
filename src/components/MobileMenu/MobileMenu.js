import { useEffect } from 'react';
import { Navbar } from './MobileMenu.styled';
import { CloseDeleteBtn, Nav, Contacts, Backdrop } from 'components';

export function MobileMenu({ handleClick, isOpen }) {
  useEffect(() => {
    const bodyStyle = document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    bodyStyle.overflow = 'hidden';
    bodyStyle.paddingRight = `${scrollbarWidth}px`;

    return () => {
      bodyStyle.overflow = 'visible';
      bodyStyle.paddingRight = 0;
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
