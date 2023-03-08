import styled from '@emotion/styled';
import { colors, utils, fontSizes } from 'styles/utils/variables';

export const CartDropWrapper = styled.div`
  position: absolute;
  top: auto;
  right: -1px;

  padding: 10px;

  font-size: ${fontSizes.s};

  width: 300px;
  min-height: 200px;
  border: 1px solid ${colors.auxiliary};
  border-top: none;
  border-radius: ${utils.borderRadius};

  background-color: ${colors.mainBg};
  color: ${colors.mainText};
`;

export const Notification = styled.p`
  text-align: center;
`;
