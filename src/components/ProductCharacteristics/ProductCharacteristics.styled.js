import styled from '@emotion/styled';
import { colors, fontSizes } from 'styles/utils/variables';

export const List = styled.ul`
  width: 100%;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const Characteristic = styled.span`
  font-size: ${fontSizes.xs};
`;

export const CircleList = styled.ul``;

export const CircleItem = styled.li`
  display: flex;
  gap: 2px;
`;

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ gray }) => (gray ? colors.auxiliary : colors.accent)};
`;
