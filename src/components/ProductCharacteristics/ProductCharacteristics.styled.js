import styled from '@emotion/styled';
import { colors, fontSizes, mq, utils } from 'styles/utils/variables';

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;

  /* ${mq.desktop} {
    display: flex;
    flex-wrap: wrap;
  } */
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${fontSizes.s};
  cursor: pointer;

  ${mq.tablet} {
    font-size: ${fontSizes.m};

    /* &:nth-of-type(2n + 1) {
      padding-right: 5px;
    }

    &:nth-of-type(2n) {
      padding-left: 5px;
    }  */
  }

  /* ${mq.desktop} {
    flex-basis: 50%;
    justify-content: space-between;

    /* &:nth-of-type(2n + 1) {
      padding-right: 5px;
    }

    &:nth-of-type(2n) {
      padding-left: 5px;
    } */
  /* } */
`;

export const Tip = styled.div`
  position: absolute;
  top: -27px;
  left: 50%;
  z-index: 10;

  padding: 5px;
  min-width: 110px;
  min-height: 20px;

  background-color: ${colors.mainBg};
  border: 1px solid ${colors.auxiliary};
  border-radius: ${utils.borderRadius};
  transform: translateX(-50%);

  opacity: 0;
  transition: opacity ${utils.transitDur} ${utils.transitFunc};

  ${mq.tablet} {
    min-width: 130px;
    min-height: 26px;
  }

  ${mq.desktop} {
    top: -30px;
  }

  li:hover > &,
  li:focus > & {
    opacity: 1;
  }
`;

export const TipText = styled.p`
  font-size: ${fontSizes.xs};
  text-align: center;
  line-height: normal;

  ${mq.desktop} {
    font-size: ${fontSizes.s};
  }
`;
/**
 * .works__overlay {
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
 */

export const Characteristic = styled.span`
  margin-left: auto;

  /* ${mq.desktop} {
    margin-left: 0;
    /* flex-basis: 50%; */
  //} */
`;
export const Estimate = styled.span`
  font-weight: 500;
`;

export const CircleList = styled.ul`
  margin-left: auto;

  ${mq.tablet} {
    /* margin-left: 10px; */
    /* flex-basis: 50%; */
    margin-right: 30px;
  }

  /* ${mq.desktop} {
    margin-left: 0;
    margin-right: 0;
    /* flex-basis: 50%; */
  //} */

  /* ${mq.desktop} {
    margin-right: 40px;
  } */
  /* j-self: flex-end; */
`;

export const CircleItem = styled.li`
  display: flex;
  gap: 2px;

  /* ${mq.tablet} {
    gap: 4px;
  } */
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ gray }) => (gray ? colors.auxiliary : colors.accent)};

  /* ${mq.tablet} {
    width: 10px;
    height: 10px;
  } */
`;

export const Icon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;

  border: 1px solid ${colors.auxiliaryText};
  background-image: linear-gradient(
    to top,
    ${colors.auxiliary} 0%,
    ${colors.auxiliary} ${({ estimate }) => estimate * 20}%,
    transparent ${({ estimate }) => estimate * 20}%,
    transparent 100%
  );

  ${mq.tablet} {
    width: 36px;
    height: 36px;
  }
`;

export const Img = styled.img`
  border-radius: 50%;
`;
