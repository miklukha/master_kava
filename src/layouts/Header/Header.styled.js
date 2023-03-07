import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';
import { CgShoppingCart } from 'react-icons/cg';

export const HeaderStyled = styled.header`
  height: 60px;
  width: 100vw;
  border-bottom: 1px solid ${colors.auxiliary};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 60px;
    background-color: ${colors.headerBg};

    ${mq.tablet} {
      height: 80px;
    }
  }

  ${mq.tablet} {
    height: 140px;
  }
`;

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  width: 100%;

  ${mq.tablet} {
    height: 80px;
  }
`;

// export const Wrapper = styled.div`
//   /* display: flex;
//   align-items: center;
//   justify-content: space-between; */

//   height: 60px;

//   ${mq.tablet} {
//     height: 80px;
//   }
// `;

export const HeaderNav = styled.div`
  height: 60px;
  /* background-color: ${colors.mainBg}; */
  /* width: 100wv; */
`;

export const ProfileIcon = styled(VscAccount)`
  /* color: ${colors.iconLight}; */

  /* &:hover,
  &:focus {
    color: ${colors.accent};
  } */
`;

export const CartIcon = styled(CgShoppingCart)`
  /* color: ${colors.iconLight}; */
  /* ${mq.tablet} {
    display: none;
  } */
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
  /* font-size: 20px; */
  /* color: ${colors.iconLight}; */
`;

export const BurgerBtn = styled.button`
  padding: 5px;
  /* width: 30px;
  height: 30px; */

  color: ${colors.iconLight};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }

  /* ${mq.tablet} {
    display: none;
  } */
`;

// export const CartBtn = styled.button`
//   width: 20px;
//   height: 20px;

//   color: ${colors.iconLight};

//   &:hover,
//   &:focus {
//     color: ${colors.accent};
//   }
// `;

// export const ProfileBtn = styled.button`
//   height: 20px;
//   width: 20px;

//   color: ${colors.iconLight};

//   &:hover,
//   &:focus {
//     color: ${colors.accent};
//   }
// `;

export const ExtraNavWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 20px;

  ${mq.tablet} {
    font-size: 30px;
    gap: 15px;
  }
`;

export const ExtraNavList = styled.ul`
  position: relative;
  display: flex;

  /* gap: 10px; */
`;

export const ExtraNavItem = styled.li`
  padding: 10px;
  /* height: 30px;
  width: 30px; */
  color: ${colors.iconLight};

  position: relative;
  cursor: pointer;

  & + &::before {
    content: '';
    display: block;
    background-color: ${colors.iconLight};
    width: 1px;
    height: 20px;

    position: absolute;
    top: inherit;
    left: -1px;

    ${mq.tablet} {
      height: 30px;
    }
  }

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const MobileNavbar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;

  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* font-weight: 600; */
  font-size: 14px;
  line-height: calc(16 / 14);

  width: 260px;
  height: 100vh;

  padding: 30px 20px;

  background-color: ${colors.mainBg};
`;
