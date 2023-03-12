import styled from '@emotion/styled';
import { mq, colors, utils } from 'styles/utils/variables';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 5px;

  & svg {
    width: 26px; //20px
    height: 26px; //20px

    ${mq.tablet} {
      width: 30px;
      height: 30px;
    }
  }

  ${mq.tablet} {
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
  color: ${colors.iconLight};

  position: relative;
  cursor: pointer;

  & + &::before {
    content: '';
    display: block;
    background-color: ${colors.iconLight};
    width: 1px;
    height: 26px; //20px

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
  line-height: 0;

  padding-top: 10px;
  padding-bottom: 10px;

  color: ${colors.iconLight};

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;
