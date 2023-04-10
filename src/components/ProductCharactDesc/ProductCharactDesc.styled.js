import styled from '@emotion/styled';
import { mq, colors } from 'styles/utils/variables';

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;

  margin-bottom: 5px;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${mq.desktop} {
    width: 192px;
  }
`;

export const Characteristic = styled.span``;

export const CircleList = styled.ul`
  display: flex;
  gap: 3px;

  ${mq.desktop} {
    gap: 4px;
  }
`;

export const CircleItem = styled.li``;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${colors.accent};

  ${mq.desktop} {
    width: 12px;
    height: 12px;
  }
`;

export const CircleGray = styled(Circle)`
  background-color: ${colors.auxiliary};
`;
