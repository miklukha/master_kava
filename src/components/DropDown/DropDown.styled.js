import styled from '@emotion/styled';
import { colors, utils } from 'styles/utils/variables';

export const DropDownMenu = styled.ul`
  position: absolute;
  top: auto;
  left: 0;

  text-align: left;

  width: auto;
  border: 1px solid ${colors.auxiliary};
  border-top: none;
  border-radius: ${utils.borderRadius};

  background-color: ${colors.mainBg};
`;

export const DropDownItem = styled.li`
  /* position: relative; */
  padding: 10px;
  font-size: 14px;
  color: ${colors.mainText};

  & + &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    background-color: ${colors.auxiliary};
    width: 100%;
    height: 1px;
  }

  &:hover,
  &:after {
    color: ${colors.accent};
  }
`;