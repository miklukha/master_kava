import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';
import { Button } from 'components/Button.styled';

export const Wrapper = styled.div`
  padding-top: 20px;
  border-top: 1px solid ${colors.auxiliary};

  ${mq.tablet} {
    padding-left: 20px;
    border-top: none;
    border-left: 1px solid ${colors.auxiliary};
  }
`;

export const Form = styled.form`
  margin-top: 10px;
`;

export const Btn = styled(Button)`
  margin-top: 20px;
  /* flex-basis: 40%; */
`;
