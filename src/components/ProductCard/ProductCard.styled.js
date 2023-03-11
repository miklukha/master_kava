import styled from '@emotion/styled';
import { mq, utils, colors } from 'styles/utils/variables';

export const Item = styled.li`
  width: 175px;

  ${mq.tablet} {
    width: 239px;
    font-size: 16px;
  }

  ${mq.desktop} {
    width: 277px;
    /* font-size: 16px; */
  }
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  height: 100%;
  padding: 15px;

  box-shadow: none;
  border: 1px solid ${colors.auxiliary};
  border-radius: ${utils.borderRadius};

  transition: box-shadow ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    box-shadow: ${utils.shadowHover};
  }
`;

export const Img = styled.img`
  width: 120px;

  ${mq.tablet} {
    width: 200px;
    height: 250px;
  }
`;

export const Name = styled.h3`
  flex: 1;
  font-size: 16px;
  font-weight: 700;

  ${mq.tablet} {
    font-size: 18px;
  }
`;

export const Ingredients = styled.span`
  flex: 1;
  text-align: center;
  line-height: calc(16 / 14);
`;

export const Price = styled.span`
  font-weight: 700;
`;

/**
 *  .works__item {
  width: 370px;
  margin-top: 30px;
  margin-left: 30px;
  flex-basis: calc((100% - 3 * 30px) / 3);
}

.works__link {
  color: inherit;
  display: block;
  box-shadow: none;
  transition: box-shadow var(--transit-dur) var(--transit-func);

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px var(--first-shadow-works-color),
      0px 4px 4px var(--second-shadow-works-color),
      1px 4px 6px var(--third-shadow-works-color);
  }
}

.works__thumb {
  position: relative;
  overflow: hidden;
}

.works__overlay {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: var(--works-overlay-color);
  transform: translateY(100%);
  opacity: 0;
  transition: transform var(--transit-dur) var(--transit-func),
    opacity var(--transit-dur) var(--transit-func);

  .works__link:hover &,
  .works__link:focus & {
    opacity: 1;
    transform: translateY(0);
  }
}

.works__card-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 322px;
  font-size: 18px;
  line-height: calc(28 / 18);
  letter-spacing: 0.03em;
  color: var(--second-text-color);
}

.works__desc {
  padding: 20px 24px;
  border: 1px solid var(--cards-border-color);
  border-top: none;
}

.works__title {
  font-weight: 700;
  font-size: 18px;
  line-height: 2;
  letter-spacing: 0.06em;
  color: var(--second-title-color);
  margin-bottom: 4px;
}

.works__text {
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.03em;
}
 */
