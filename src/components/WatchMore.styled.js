import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

// in future - Link

export const WatchMore = styled.a`
  display: block;

  font-weight: 700;
  text-align: center;

  color: ${colors.accent};

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accentHover};
  }
`;
