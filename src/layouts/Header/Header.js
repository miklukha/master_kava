import { useState } from 'react';
import {
  HeaderStyled,
  HeaderMain,
  BurgerIcon,
  CartIcon,
  ProfileIcon,
  ExtraNavWrapper,
  BurgerBtn,
  MobileNavbar,
  // CloseBtn,
  // CloseIcon,
  ExtraNavList,
  HeaderNav,
  ExtraNavItem,
} from './Header.styled';
import { Backdrop, DropDown, CartDropDown } from 'components';
import { Container, Logo, Nav, CloseDeleteIcon } from 'components';
import logo from 'assets/images/logo.png';
import { ContactsItem, ContactsWrapper } from 'components/Contacts.styled';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'styles/utils/variables';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [cartDropDown, setCartDropDown] = useState(false);

  const onMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderMain>
            <a href="/">
              <Logo src={logo} alt="logo" />
            </a>
            <ExtraNavWrapper>
              <MediaQuery minWidth={parseInt(breakpoints.tablet)}>
                <ContactsWrapper>
                  <ContactsItem>
                    <a href="tel:+380671429022">+380671429022</a>
                  </ContactsItem>
                  <ContactsItem>
                    <a href="mailto:master_kava@gmail.com">
                      master_kava@gmail.com
                    </a>
                  </ContactsItem>
                </ContactsWrapper>
              </MediaQuery>
              <ExtraNavList>
                <ExtraNavItem
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <ProfileIcon />
                  {dropdown && <DropDown />}
                </ExtraNavItem>
                <ExtraNavItem
                  onMouseEnter={() => setCartDropDown(true)}
                  onMouseLeave={() => setCartDropDown(false)}
                >
                  <CartIcon />
                  {cartDropDown && <CartDropDown />}
                </ExtraNavItem>
              </ExtraNavList>
              <MediaQuery maxWidth={parseInt(breakpoints.preTablet)}>
                <BurgerBtn
                  type="button"
                  aria-label="open mobile menu"
                  onClick={onMenuClick}
                >
                  <BurgerIcon />
                </BurgerBtn>
              </MediaQuery>
            </ExtraNavWrapper>
            {isMenuOpen && (
              <Backdrop>
                <MobileNavbar>
                  {/* <CloseBtn
                    type="button"
                    aria-label="close mobile menu"
                    onClick={onMenuClick}
                  >
                    <CloseIcon></CloseIcon>
                  </CloseBtn> */}
                  <CloseDeleteIcon handleClick={onMenuClick} />
                  <Nav />
                  <ContactsWrapper>
                    <ContactsItem>
                      <a href="tel:+380671429022">+380671429022</a>
                    </ContactsItem>
                    <ContactsItem>
                      <a href="mailto:master_kava@gmail.com">
                        master_kava@gmail.com
                      </a>
                    </ContactsItem>
                  </ContactsWrapper>
                </MobileNavbar>
              </Backdrop>
            )}
          </HeaderMain>
          <MediaQuery minWidth={parseInt(breakpoints.tablet)}>
            <HeaderNav>
              <Nav />
            </HeaderNav>
          </MediaQuery>
        </Container>
      </HeaderStyled>
    </>
  );
}

/**
 *    <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="profile">
        <i className="fas fa-user"></i>
      </div>
      <div className="cart">
        <i className="fas fa-shopping-cart"></i>
      </div>
      <div className="contact-info">
        <span className="phone">123-456-7890</span>
        <span className="email">info@example.com</span>
      </div>
      <div className="burger-menu-mobile" onClick={handleMenuClick}>
        <i className="fas fa-bars"></i>
      </div>
      <nav className="menu-desktop">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <nav className={`menu-mobile ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
 */
