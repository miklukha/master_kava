import styled from '@emotion/styled';
import { mq, utils, colors } from 'styles/utils/variables';

export const List = styled.ul`
  ${mq.tablet} {
    display: flex;
  }
`;

export const Item = styled.li`
  line-height: calc(24 / 14);

  width: 100%;
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${mq.mobile} {
    width: 360px;
  }

  ${mq.tablet} {
    margin-bottom: 0;
    margin-right: 20px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  ${mq.onlyTablet} {
    width: 232px;
  }

  ${mq.desktop} {
    margin-right: 45px;
  }
`;

export const BgIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 60px;

  height: 120px;
  width: 100%;

  margin-bottom: 20px;
  border-radius: ${utils.borderRadius};

  background-color: ${colors.auxiliary};
`;

export const Img = styled.img`
  width: 70px;
`;

export const Title = styled.h3`
  font-weight: 700;
  text-transform: uppercase;

  margin-bottom: 5px;
`;

export const Desc = styled.p`
  letter-spacing: 0.03em;
`;
