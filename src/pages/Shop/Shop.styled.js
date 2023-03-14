import styled from '@emotion/styled';
import { colors, utils, mq } from 'styles/utils/variables';

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 30px;
  /* align-items: ; */

  ${mq.desktop} {
    margin-bottom: 40px;
  }
`;

export const FilterBtn = styled.button`
  line-height: 0;

  width: 40px;
  height: 40px;
  padding: 5px;
  border: 1px solid ${colors.auxiliary};
  border-radius: ${utils.borderRadius};

  /* color: ${colors.iconLight}; */

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 40px;

  ${mq.desktop} {
    gap: 28px;
  }
`;

export const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-self: end;

  ${mq.tablet} {
    gap: 20px;
  }
`;
