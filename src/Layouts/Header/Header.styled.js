import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';

export const HeaderStyled = styled.header`
  /* height: 60px; */
  width: 100vw;

  border-bottom: 1px solid ${colors.auxiliary};

  ${mq.tablet} {
    height: 140px;
  }
`;

export const HeaderMain = styled.div`
  height: 60px;
  width: 100%;

  background-color: ${colors.headerBg};

  ${mq.tablet} {
    height: 80px;
  }
`;
