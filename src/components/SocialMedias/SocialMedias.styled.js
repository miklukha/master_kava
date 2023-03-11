import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

export const List = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Item = styled.li`
  width: 40px;
  height: 40px;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  border-radius: 50%;

  color: ${colors.iconLight};
  background-color: ${colors.accent};

  transition: background-color ${utils.transitDur} ${utils.transitFunc};

  & svg {
    width: 20px;
    height: 20px;
  }

  &:hover,
  &:focus {
    background-color: ${colors.accentHover};
  }
`;
