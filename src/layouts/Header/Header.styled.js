import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscAccount } from 'react-icons/vsc';
import { CgShoppingCart } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

export const HeaderStyled = styled.header`
  /* height: 60px; */
  width: 100vw;

  border-bottom: 1px solid ${colors.auxiliary};

  /* ${mq.tablet} {
    height: 140px;
  } */
`;

export const HeaderMain = styled.div`
  height: 60px;
  width: 100%;

  background-color: ${colors.headerBg};

  /* ${mq.tablet} {
    height: 80px;
  } */
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
`;

export const ProfileIcon = styled(VscAccount)`
  /* margin-right: 10px; */
  /* color: ${colors.iconLight}; */
`;

export const CartIcon = styled(CgShoppingCart)`
  /* color: ${colors.iconLight}; */
`;

export const BurgerIcon = styled(GiHamburgerMenu)`
  /* font-size: 20px; */
  /* color: ${colors.iconLight}; */
`;

export const BurgerBtn = styled.button`
  width: 20px;
  height: 20px;

  color: ${colors.iconLight};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const CartBtn = styled.button`
  width: 20px;
  height: 20px;

  color: ${colors.iconLight};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const ProfileBtn = styled.button`
  height: 20px;
  width: 20px;

  color: ${colors.iconLight};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const WrapperOfExtraNav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: 20px;
`;

export const ListOfExtraNav = styled.ul`
  position: relative;
  display: flex;

  gap: 20px;
`;

export const ExtraNavItem = styled.li`
  height: 20px;
  width: 20px;

  & + &::before {
    content: '';
    display: block;
    background-color: ${colors.iconLight};
    width: 1px;
    height: 20px;

    position: absolute;
    top: 0;
    left: 30px;
  }
`;

export const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  right: 0;

  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-weight: 600;
  font-size: 14px;
  line-height: calc(16 / 14);

  width: 260px;
  height: 100vh;

  padding: 30px 20px;

  background-color: ${colors.mainBg};
`;

export const CloseIcon = styled(IoMdClose)`
  font-size: 20px;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 20px;
  height: 20px;

  color: ${colors.iconGray};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const MobileNavItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;

  &::after {
    content: '';
    display: block;
    background-color: ${colors.auxiliary};
    width: 100%;
    height: 1px;

    position: absolute;
    bottom: 0;
    left: 0;
  }

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const MobileContactsItem = styled.li`
  & + & {
    margin-top: 10px;
  }

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  width: 100vw;
  height: 100vh;

  background-color: rgba(47, 48, 58, 0.4);
`;

export const MobileContacts = styled.ul`
  /* padding: 20px 15px;
  background-color: ${colors.accent}; */
`;
