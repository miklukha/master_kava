import styled from '@emotion/styled';
import { colors, mq, utils } from 'styles/utils/variables';

export const Wrapper = styled.div`
  ${mq.tablet} {
    display: flex;
    gap: 20px;
  }
`;

export const CategoryList = styled.ul`
  ${mq.onlyMobile} {
    display: flex;
    /* gap: 10px; */
    margin-bottom: 20px;
    border-bottom: 1px solid ${colors.auxiliary};
    width: 100%;
  }
`;

export const CategoryItem = styled.li`
  font-weight: 500;
  border-right: 1px solid ${colors.auxiliary};
  padding: 20px 11px;

  &:last-of-type {
    border-right: none;
  }

  ${mq.tablet} {
    padding: 20px 20px 20px 0;
    border-right: none;
    border-bottom: 1px solid ${colors.auxiliary};
  }

  ${mq.desktop} {
    font-size: 16px;
    /* padding-right: 20px; */
  }
`;

export const CategoryBtn = styled.button`
  /* padding: 10px 10px 10px 0; */

  transition: color ${utils.transitDur} ${utils.transitFunc};

  color: ${({ selected }) => (selected ? colors.accent : colors.mainText)};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }

  /* ${mq.desktop} {
    font-size: 16px;
    padding-right: 20px;
  } */
`;
