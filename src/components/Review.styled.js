import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';

export const Review = styled.li`
  flex-basis: calc((100% - 1 * 20px) / 2);
  height: 200px;

  border: 1px solid ${colors.auxiliary};
  background-color: ${colors.auxiliary};

  ${mq.tablet} {
    flex-basis: calc((100% - 3 * 20px) / 4);
  }

  ${mq.desktop} {
    flex-basis: calc((100% - 5 * 20px) / 6);
  }
`;
