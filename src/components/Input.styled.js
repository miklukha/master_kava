import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

export const Input = styled.input`
  width: 63px;
  padding: 8px 15px;
  border: 1px solid ${colors.auxiliary};
  border-radius: ${utils.borderRadius};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
