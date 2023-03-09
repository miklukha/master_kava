import styled from '@emotion/styled';
import { colors, utils, fontSizes, mq } from 'styles/utils/variables';

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

  ${mq.tablet} {
    width: 360px;
  }
`;

export const Notification = styled.p`
  text-align: center;
`;
