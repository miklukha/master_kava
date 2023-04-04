import styled from '@emotion/styled';
import { mq, fontSizes } from 'styles/utils/variables';

export const TitleHome = styled.h2`
  font-weight: 700;
  font-size: ${fontSizes.mobileTitle};
  text-align: center;
  text-transform: uppercase;

  margin-bottom: 30px;

  ${mq.tablet} {
    font-size: ${fontSizes.tabletTitle};
  }

  ${mq.desktop} {
    font-size: ${fontSizes.desktopTitle};
    margin-bottom: 40px;
  }
`;
