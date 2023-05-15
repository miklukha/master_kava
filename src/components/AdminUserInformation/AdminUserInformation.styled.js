import styled from '@emotion/styled';
import { colors } from 'styles/utils/variables';

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const TD = styled.td`
  padding: 5px 0 5px 5px;
  border: 1px solid ${colors.auxiliary};
`;

export const Table = styled.table`
  width: 100%;

  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const THead = styled.thead`
  font-weight: 500;
`;

export const TH = styled.th`
  text-align: left;
`;
