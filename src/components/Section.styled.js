import styled from '@emotion/styled';
import { mq } from 'styles/utils/variables';

export const Section = styled.section`
  padding-top: 30px;
  padding-bottom: 30px;
  /* width: fit-content; */

  ${mq.desktop} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
