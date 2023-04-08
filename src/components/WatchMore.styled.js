import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';
import { NavLink } from 'react-router-dom';

export const WatchMore = styled(NavLink)`
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
