import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';

export const Wrapper = styled.div`
  padding-top: 20px;
  border-top: 1px solid ${colors.auxiliary};

  & input {
    padding-top: 12px;
    padding-bottom: 12px;
    width: 360px;

    ${mq.tablet} {
      width: 500px;
    }
    /* margin-right: 10px; */
  }

  ${mq.tablet} {
    padding-left: 20px;
    border-top: none;
    border-left: 1px solid ${colors.auxiliary};
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 20px;
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 500;

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

export const BtnsWrapper = styled.div`
  margin-top: 10px;
`;

export const ModalBtn = styled.button`
  padding: 5px;
  border: 1px solid ${colors.auxiliary};
  border-radius: 4px;

  &:first-of-type {
    margin-right: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${colors.auxiliaryBg};
  }
`;
