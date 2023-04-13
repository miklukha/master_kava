import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';

export const Wrapper = styled.div`
  & input {
    padding-top: 12px;
    padding-bottom: 12px;
    width: 360px;

    ${mq.tablet} {
      width: 300px;
    }
    /* margin-right: 10px; */
  }

  ${mq.tablet} {
    padding-left: 20px;
    border-left: 1px solid ${colors.auxiliary};
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 20px;
`;

// export const Btn = styled.button`
//   padding: 6px;
//   border-radius: 10px;
//   border: 1px solid ${colors.auxiliary};

//   & svg {
//     width: 16px;
//     height: 16px;
//   }

//   &:hover,
//   &:focus svg {
//     color: ${colors.accent};
//   }
// `;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  border-bottom: 1px solid ${colors.auxiliary};
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
