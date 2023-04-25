import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';

export const HeaderStyled = styled.header`
  height: 80px; //60px
  width: 100%;
  border-bottom: 1px solid ${colors.auxiliary};
  background-color: ${colors.mainBg};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 80px; //60px
    background-color: ${colors.headerBg};

    /* ${mq.tablet} {
      height: 80px;
    } */
  }

  ${mq.tablet} {
    height: 140px;
  }
`;

export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 80px; //60px
  width: 100%;

  /* ${mq.tablet} {
    height: 80px;
  } */
`;

export const HeaderNav = styled.nav`
  height: 60px;
  /* background-color: ${colors.mainBg}; */
`;
