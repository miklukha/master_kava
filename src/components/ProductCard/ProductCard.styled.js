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

  background-color: ${colors.mainBg};

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
    height: 240px;
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
