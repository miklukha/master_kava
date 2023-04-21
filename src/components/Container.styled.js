import styled from '@emotion/styled';
import { mq } from 'styles/utils/variables';

export const Container = styled.div`
  flex: 1;
  margin: 0 auto;
  padding: 0 15px;

  ${mq.mobile} {
    width: 390px;
  }

  ${mq.tablet} {
    width: 768px;
  }

  ${mq.desktop} {
    width: 1200px;
  }
`;
