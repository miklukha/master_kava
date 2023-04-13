import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';

export const Description = styled.p`
  margin-bottom: 20px;
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;

  margin-bottom: 5px;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${mq.desktop} {
    margin-bottom: 10px;
  }
`;

export const Text = styled.span`
  flex: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  &:first-of-type::after {
    content: '';
    flex: 1;
    border-bottom: 1px dotted ${colors.auxiliary};
    margin: 0 3px;
  }

  ${mq.tablet} {
    &:last-of-type {
      flex-basis: 50%;
    }
  }

  ${mq.desktop} {
    &:last-of-type {
      flex-basis: 60%;
    }
  }
`;
