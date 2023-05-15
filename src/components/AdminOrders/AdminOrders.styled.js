import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';

export const Wrapper = styled.div`
  padding-top: 20px;
  border-top: 1px solid ${colors.auxiliary};

  ${mq.tablet} {
    padding-left: 20px;
    border-top: none;
    border-left: 1px solid ${colors.auxiliary};
  }
`;

export const List = styled.ul`
  /* width: 100%; */
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  font-weight: 500;

  padding: 10px 0;
  border-bottom: 1px solid ${colors.auxiliary};
`;

export const TitleList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const TitleItem = styled.li`
  /* display: flex;
  gap: 10px; */
`;

export const IconBtn = styled.button`
  &:first-of-type {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const WrapperDesc = styled.div`
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

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  margin-bottom: 20px;

  & input {
    padding-top: 12px;
    padding-bottom: 12px;
    width: 360px;

    ${mq.tablet} {
      width: 500px;
    }
    /* margin-right: 10px; */
  }
`;
