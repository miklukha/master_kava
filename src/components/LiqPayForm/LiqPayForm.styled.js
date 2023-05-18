import styled from '@emotion/styled';
import { colors, utils, fontSizes } from 'styles/utils/variables';

export const Btn = styled.button`
  font-size: ${fontSizes.m};

  margin-bottom: 15px;

  padding: 20px;
  border: 1px solid ${colors.accent};
  border-radius: ${utils.borderRadiusOfBtn};

  background-color: ${colors.accent};
  color: ${colors.whiteText};

  transition: background-color ${utils.transitDur} ${utils.transitFunc},
    color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    background-color: ${colors.accentHover};
  }
`;
