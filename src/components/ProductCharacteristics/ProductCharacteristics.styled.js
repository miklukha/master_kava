import styled from '@emotion/styled';
import { colors, fontSizes, mq } from 'styles/utils/variables';

export const List = styled.ul`
  width: 100%;

  ${mq.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: ${fontSizes.s};

  ${mq.tablet} {
    flex-basis: 50%;
    &:nth-of-type(2n + 1) {
      padding-right: 5px;
    }

    &:nth-of-type(2n) {
      padding-left: 5px;
    }
  }

  ${mq.desktop} {
    font-size: ${fontSizes.m};
  }
`;

// export const Characteristic = styled.span`
// `;
export const Estimate = styled.span`
  font-weight: 500;
  /* color: ${colors.accent}; */
`;

// export const CircleList = styled.ul``;

export const CircleItem = styled.li`
  display: flex;
  gap: 2px;

  ${mq.tablet} {
    gap: 4px;
  }
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ gray }) => (gray ? colors.auxiliary : colors.accent)};

  ${mq.tablet} {
    width: 10px;
    height: 10px;
  }
`;
