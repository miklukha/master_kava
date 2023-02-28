import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

export const CartDropWrapper = styled.div`
  position: absolute;
  top: auto;
  right: -1px;

  padding: 10px;

  /* text-align: left; */

  width: 300px;
  height: 300px;
  border: 1px solid ${colors.auxiliary};
  border-top: none;
  border-radius: ${utils.borderRadius};

  background-color: ${colors.mainBg};
  color: ${colors.mainText};
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 24px;

  margin-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: auto;
    left: 0;

    display: block;

    width: 100%;
    height: 1px;
    background-color: ${colors.auxiliary};
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;

  /* &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    display: block;

    width: 100%;
    height: 1px;
    background-color: ${colors.auxiliary};
  } */
`;

export const ProductImg = styled.img`
  width: 50px;
`;

export const ProductTitle = styled.h3`
  /* width: 50px; */
  font-size: 14px;
  font-weight: 600;
`;
