import styled from '@emotion/styled';
import { colors, mq, utils } from 'styles/utils/variables';
import { Button } from 'components/Button.styled';

export const Form = styled.form`
  margin-top: ${({ action }) => (action === 'edit' ? '10px' : 0)};
`;

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 20px;
`;

export const Btn = styled(Button)`
  flex-basis: 40%;
`;

export const CancelBtn = styled(Btn)`
  padding: 7px;
  border: 1px solid ${colors.accent};

  background-color: transparent;
  color: ${colors.accent};

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.whiteText};
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  width: 360px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-bottom: 1px solid ${colors.auxiliaryText};

  &:last-of-type {
    margin-bottom: 20px;
  }

  & input,
  & select,
  & option,
  & textarea {
    padding: 7px 5px;
    flex-basis: 67%;
  }

  & input[type='file'] {
    padding: 0;
  }

  ${mq.tablet} {
    width: 500px;
  }
`;

export const Tip = styled.p`
  align-self: flex-end;
  margin-top: 10px;
  color: ${colors.error};
`;

export const LoadBtn = styled.button`
  padding: 5px;
  border: 1px solid ${colors.auxiliaryText};
  border-radius: 4px;
  background-color: ${colors.auxiliary};

  &:hover,
  &:focus {
    background-color: ${colors.auxiliaryBg};
  }
`;

export const ImgPreview = styled.img`
  width: 50px;
  height: 50px;
`;
