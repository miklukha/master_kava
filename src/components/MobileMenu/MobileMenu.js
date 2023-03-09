import { Navbar } from './MobileMenu.styled';
import { Backdrop } from 'components/Backdrop.styled';
import { CloseDeleteBtn, Nav, Contacts } from 'components';

export function MobileMenu({ handleClick, isOpen }) {
  return (
    <>
      <Backdrop open={isOpen}>
        <Navbar>
          <CloseDeleteBtn handleClick={handleClick} />
          <Nav />
          <Contacts />
        </Navbar>
      </Backdrop>
    </>
  );
}
