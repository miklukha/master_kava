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
