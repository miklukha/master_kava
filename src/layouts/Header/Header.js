import logo from 'assets/images/logo.png';
import { Container, Logo, Nav, ExtraNav, MobileMenu } from 'components';
import { useState } from 'react';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'styles/utils/variables';
import { HeaderMain, HeaderNav, HeaderStyled } from './Header.styled';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuClick = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <HeaderStyled>
        <Container>
          <HeaderMain>
            <a href="/">
              <Logo src={logo} alt="logo" />
            </a>
            <ExtraNav handleClick={onMenuClick} />
          </HeaderMain>
          <MediaQuery maxWidth={parseInt(breakpoints.preTablet)}>
            <MobileMenu handleClick={onMenuClick} isOpen={isMenuOpen} />
          </MediaQuery>
          <MediaQuery minWidth={parseInt(breakpoints.tablet)}>
            <HeaderNav>
              <Nav layout="header" />
            </HeaderNav>
          </MediaQuery>
        </Container>
      </HeaderStyled>
    </>
  );
}
