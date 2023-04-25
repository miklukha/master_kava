import styled from '@emotion/styled';
import { colors, utils, fontSizes, mq } from 'styles/utils/variables';
import { NavLink } from 'react-router-dom';

export const CartDropWrapper = styled.div`
  position: absolute;
  top: auto;
  right: -1px;
  z-index: 10;

  font-size: ${fontSizes.s};

  padding: 10px;
  width: 300px;
  min-height: 200px;
  border: 1px solid ${colors.auxiliary};
  border-top: none;
  border-radius: ${utils.borderRadius};

  background-color: ${colors.mainBg};
  color: ${colors.mainText};

  cursor: default;

  ${mq.tablet} {
    width: 360px;
  }
`;

export const Notification = styled.p`
  margin-top: 20px;
  text-align: center;
`;

export const ProductList = styled.ul`
  margin-bottom: 20px;
  /* padding-bottom: 20px; */
`;

export const OrderDesc = styled.div`
  margin-bottom: 20px;
`;

export const OrderData = styled.p`
  &:first-of-type {
    margin-bottom: 5px;
  }
`;

export const OrderDynamicData = styled.span`
  font-weight: 600;
`;

export const OrderLink = styled(NavLink)`
  display: block;
  font-weight: 500;
  text-align: center;

  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: ${utils.borderRadiusOfBtn};

  background-color: ${colors.accent};
  color: ${colors.whiteText};

  transition: background-color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    background-color: ${colors.accentHover};
  }
`;
