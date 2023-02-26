import { useState } from 'react';
import { HeaderStyled, HeaderMain } from './Header.styled';
import { Container, Logo } from 'components';
import logo from 'assets/images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { BsCart4 } from 'react-icons/bs';
import { colors } from 'styles/utils/variables';

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
            <a href="/">
              <Logo src={logo} alt="logo" />
            </a>
            <CgProfile color={colors.iconLight} fontSize="20px" />
            <BsCart4 color={colors.iconLight} fontSize="20px" />

            <button onClick={handleMenuClick}>
              <GiHamburgerMenu color={colors.iconLight} fontSize="20px" />
            </button>
            {isMenuOpen && (
              <nav>
                <ul>
                  <li>
                    <a href="/">ГОЛОВНА</a>
                  </li>
                  <li>
                    <a href="/">МАГАЗИН</a>
                  </li>
                  <li>
                    <a href="/">ПРО НАС</a>
                  </li>
                  <li>
                    <a href="/">КОНТАКТИ</a>
                  </li>
                  <li>
                    <a href="/">ОПЛАТА ТА ДОСТАВКА</a>
                  </li>
                </ul>
              </nav>
            )}
          </Container>
        </HeaderMain>
      </HeaderStyled>
    </>
  );
}
