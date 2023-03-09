import styled from '@emotion/styled';
import { colors } from 'styles/utils/variables';

export const Navbar = styled.nav`
  position: absolute;
  top: 0;
  right: 0;

  z-index: 100;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 14px;
  line-height: calc(16 / 14);

  width: 260px;
  height: 100vh;

  padding: 30px 20px;
  background-color: ${colors.mainBg};
`;

// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
