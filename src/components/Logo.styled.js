import styled from '@emotion/styled';
import { mq } from 'styles/utils/variables';

export const Logo = styled.img`
  width: 128px;
  height: 30px;

  ${mq.tablet} {
    width: 207px;
    height: 50px;
  }
`;
