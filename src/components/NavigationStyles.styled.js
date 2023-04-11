import styled from '@emotion/styled';
import { colors, mq } from 'styles/utils/variables';

export const NavigationStyles = styled.div`
  /* overflow: visible; */
  & .swiper-button-prev,
  & .swiper-button-next {
    &:after {
      font-size: 26px;
    }

    padding: 20px;
    color: ${colors.auxiliary};

    &:hover {
      color: ${colors.auxiliaryText};
    }

    ${mq.tablet} {
      &:after {
        font-size: 30px;
      }
    }
  }

  & .swiper-button-prev {
    left: 0;
  }

  & .swiper-button-next {
    right: 0;
  }
`;
