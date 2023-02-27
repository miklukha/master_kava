import { useState } from 'react';
import {
  HeaderStyled,
  HeaderMain,
  Wrapper,
  BurgerIcon,
  CartIcon,
  ProfileIcon,
  WrapperOfExtraNav,
  CartBtn,
  BurgerBtn,
  ProfileBtn,
  MobileMenu,
  CloseBtn,
  CloseIcon,
  MobileNavItem,
  MobileContactsItem,
  Backdrop,
  MobileContacts,
  ListOfExtraNav,
  ExtraNavItem,
} from './Header.styled';
import { Container, Logo } from 'components';
import logo from 'assets/images/logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  }

  return (
    <>
      <HeaderStyled>
        <HeaderMain>
          <Container>
            <Wrapper>
              <a href="/">
                <Logo src={logo} alt="logo" />
              </a>
              <WrapperOfExtraNav>
                <ListOfExtraNav>
                  <ExtraNavItem>
                    <ProfileBtn type="button">
                      <ProfileIcon />
                    </ProfileBtn>
                  </ExtraNavItem>
                  <ExtraNavItem>
                    <CartBtn type="button">
                      <CartIcon />
                    </CartBtn>
                  </ExtraNavItem>
                </ListOfExtraNav>
                <BurgerBtn
                  type="button"
                  aria-label="open mobile menu"
                  onClick={handleMenuClick}
                >
                  <BurgerIcon />
                </BurgerBtn>
              </WrapperOfExtraNav>
              {isMenuOpen && (
                <Backdrop>
                  <MobileMenu>
                    <CloseBtn type="button" onClick={handleMenuClick}>
                      <CloseIcon></CloseIcon>
                    </CloseBtn>
                    <ul>
                      <MobileNavItem>
                        <a href="/">ГОЛОВНА</a>
                      </MobileNavItem>
                      <MobileNavItem>
                        <a href="/">МАГАЗИН</a>
                      </MobileNavItem>
                      <MobileNavItem>
                        <a href="/">ПРО НАС</a>
                      </MobileNavItem>
                      <MobileNavItem>
                        <a href="/">КОНТАКТИ</a>
                      </MobileNavItem>
                      <MobileNavItem>
                        <a href="/">ОПЛАТА ТА ДОСТАВКА</a>
                      </MobileNavItem>
                    </ul>
                    <MobileContacts>
                      <MobileContactsItem>
                        <a href="tel:+380671429022">+380671429022</a>
                      </MobileContactsItem>
                      <MobileContactsItem>
                        <a href="mailto:master_kava@gmail.com">
                          master_kava@gmail.com
                        </a>
                      </MobileContactsItem>
                    </MobileContacts>
                  </MobileMenu>
                </Backdrop>
              )}
            </Wrapper>
          </Container>
        </HeaderMain>
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
