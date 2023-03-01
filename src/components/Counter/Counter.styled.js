import styled from '@emotion/styled';
import { colors } from 'styles/utils/variables';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;

  font-size: 8px;

  width: 28px; //48
  height: 20px; //40
  border: 1px solid ${colors.auxiliary};
  border-radius: 2px; //4

  color: ${colors.auxiliaryText};
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border-right: 1px solid ${colors.auxiliary};
`;

export const CounterBtn = styled.button`
  width: 10px; //20
  height: 10px; //20

  line-height: 0; //normal

  & + & {
    border-top: 1px solid ${colors.auxiliary};
  }

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const CounterNumber = styled.span`
  padding: 5px; //10
`;
