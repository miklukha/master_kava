import styled from '@emotion/styled';
import { fontSizes, mq } from 'styles/utils/variables';

export const Title = styled.h1`
  font-size: ${fontSizes.mobileTitle};
  margin-bottom: 20px;

  ${mq.tablet} {
    font-size: ${fontSizes.tabletTitle};
    margin-bottom: 30px;
  }

  ${mq.desktop} {
    font-size: ${fontSizes.desktopTitle};
  }
`;

export const Img = styled.img`
  width: 360px;
  height: 291px;

  ${mq.tablet} {
    width: 738px;
    height: 352px;
  }

  ${mq.desktop} {
    width: 1170px;
    height: 533px;
  }
`;
