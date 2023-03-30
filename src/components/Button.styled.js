import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

export const Button = styled.button`
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
