import styled from '@emotion/styled';
import { colors, mq, utils } from 'styles/utils/variables';
import { Button } from 'components';

export const Modal = styled.div`
  position: relative;
  width: 100%;
  padding: 20px;
  border-radius: ${utils.borderRadius};
  background-color: ${colors.mainBg};

  ${mq.tablet} {
    width: 574px;
    padding: 30px;
  }

  ${mq.desktop} {
    font-size: 16px;
  }
`;

export const BtnsWrapper = styled.div`
  ${mq.tablet} {
    display: flex;
    align-items: center;
    gap: 104px;
  }
`;

export const OrderBtn = styled(Button)`
  margin-bottom: 10px;

  ${mq.tablet} {
    /* width: 160px; */
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 0;
  }

  ${mq.desktop} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const ContinueBtn = styled(Button)`
  background-color: ${colors.mainBg};
  color: ${colors.accent};
  border: 1px solid ${colors.accent};

  ${mq.tablet} {
    /* width: 226px; */
    padding-left: 30px;
    padding-right: 30px;

    margin-bottom: 0;
  }

  ${mq.desktop} {
    padding-left: 20px;
    padding-right: 20px;
  }

  &:hover,
  &:focus {
    background-color: ${colors.accent};
    color: ${colors.whiteText};
  }

  transition: background-color ${utils.transitDur} ${utils.transitFunc};
`;
