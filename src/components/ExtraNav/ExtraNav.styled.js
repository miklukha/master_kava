import styled from '@emotion/styled';
import { mq, colors, utils } from 'styles/utils/variables';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 5px;

  font-size: 20px;

  ${mq.tablet} {
    font-size: 30px;
    gap: 15px;
  }
`;

export const List = styled.ul`
  position: relative;
  display: flex;

  /* gap: 10px; */
`;

export const Item = styled.li`
  padding: 10px;
  /* height: 30px;
  width: 30px; */
  color: ${colors.iconLight};

  position: relative;
  cursor: pointer;

  & + &::before {
    content: '';
    display: block;
    background-color: ${colors.iconLight};
    width: 1px;
    height: 20px;

    position: absolute;
    top: inherit;
    left: -1px;

    ${mq.tablet} {
      height: 30px;
    }
  }

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const BurgerBtn = styled.button`
  padding: 5px;

  color: ${colors.iconLight};

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;
