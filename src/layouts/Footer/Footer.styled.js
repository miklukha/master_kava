import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';

export const FooterStyled = styled.footer`
  position: relative;
  border-top: 1px solid ${colors.auxiliary};
  background-color: ${colors.mainBg};
`;

export const FooterMain = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  /* gap: 20px; */

  padding-top: 30px;
  padding-bottom: 30px;

  ${mq.tablet} {
    display: flex;
    justify-content: space-between;
  }

  ${mq.desktop} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 130px;
  margin-bottom: 20px;
`;

export const Address = styled.a``;

export const FooterCopyright = styled.div`
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 46px;
    background-color: ${colors.headerBg};
  }
`;

export const Copyright = styled.p`
  position: relative;
  z-index: 1;
  font-weight: 500;
  padding-top: 15px;
  padding-bottom: 15px;
  text-align: center;
  color: ${colors.whiteText};
`;
