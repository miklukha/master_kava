import styled from '@emotion/styled';
import { colors } from 'styles/utils/variables';

export const Wrapper = styled.div`
  margin-top: 20px;
  /* margin-bottom: 20px; */
`;

export const List = styled.ul``;

export const Item = styled.li`
  padding: 5px 0;
  margin-bottom: 5px;
  border-bottom: 1px solid ${colors.auxiliary};

  &:last-of-type {
    margin-bottom: 0;
  }
`;
