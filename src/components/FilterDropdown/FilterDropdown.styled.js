import styled from '@emotion/styled';
import { colors, fontSizes, mq, utils } from 'styles/utils/variables';
import { UilAngleRightB } from '@iconscout/react-unicons';

export const DropdownWrapper = styled.div`
  position: relative;
  /* width: 214px; */

  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  font-size: ${fontSizes.s};

  padding: 8px 10px;
  border: 1px solid ${colors.auxiliary};
  border-radius: ${utils.borderRadius};
  /* box-shadow: ${utils.shadow}; */

  background-color: ${colors.mainBg};

  ${mq.tablet} {
    padding: 8px 15px;
  }
`;

export const Icon = styled(UilAngleRightB)`
  width: 14px;
  height: 14px;
  transform: rotate(90deg);
`;

export const List = styled.ul`
  position: absolute;
  top: 34px;
  left: auto;
  right: 0;
  /* width: 214px; */
  border-radius: ${utils.borderRadius};
  box-shadow: ${utils.shadowOfSelect};
`;

export const Item = styled.li`
  padding: 8px 15px;
  border-bottom: 1px solid ${colors.auxiliary};
  background-color: ${colors.mainBg};

  transition: background-color ${utils.transitDur} ${utils.transitFunc};

  &:first-of-type {
    border-radius: 4px 4px 0 0;
  }

  &:last-of-type {
    border-bottom: none;
    border-radius: 0 0 4px 4px;
  }

  &:hover,
  &:focus {
    background-color: ${colors.auxiliary};
  }
`;
