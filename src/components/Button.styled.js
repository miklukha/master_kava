import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

export const Button = styled.button`
  font-weight: 500;
  text-align: center;

  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: ${utils.borderRadiusOfBtn};

  background-color: ${colors.accent};
  color: ${colors.whiteText};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  transition: background-color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    background-color: ${colors.accentHover};
  }
`;
