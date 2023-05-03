import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';

export const ReviewsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  ${mq.tablet} {
    gap: 30px;
  }
`;

export const ReviewsItem = styled.li`
  width: 170px;
  height: 360px;

  background-color: ${colors.auxiliaryText};

  ${mq.tablet} {
    width: 202px;
    height: 294px;
  }
`;
