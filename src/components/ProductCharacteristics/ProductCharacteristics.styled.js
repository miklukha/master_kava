import styled from '@emotion/styled';
import { colors, fontSizes, mq } from 'styles/utils/variables';

export const List = styled.ul`
  width: 100%;

  /* ${mq.desktop} {
    display: flex;
    flex-wrap: wrap;
  } */
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${fontSizes.s};

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

export const Characteristic = styled.span`
  margin-left: auto;

  /* ${mq.desktop} {
    margin-left: 0;
    /* flex-basis: 50%; */
  //} */
`;
// export const Estimate = styled.span`
//   font-weight: 500;
//   /* color: ${colors.accent}; */
// `;

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
