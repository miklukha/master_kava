import styled from '@emotion/styled';
import { colors, mq, utils } from 'styles/utils/variables';

export const NavList = styled.ul`
  font-weight: 600;
  text-transform: uppercase;

  ${mq.tablet} {
    display: flex;
    gap: 30px;
  }

  ${mq.desktop} {
    gap: 40px;
  }
`;

export const NavListFooter = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;

  text-transform: uppercase;

  width: 280px;
  margin-bottom: 20px;

  ${mq.tablet} {
    gap: 20px;
  }

  ${mq.onlyTablet} {
    width: 176px;
  }
`;

export const NavItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;

  border-bottom: 1px solid ${colors.auxiliary};

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }

  ${mq.tablet} {
    border: none;
    padding-top: 22px;
    padding-bottom: 22px;
  }
`;

export const NavItemFooter = styled.li`
  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;
