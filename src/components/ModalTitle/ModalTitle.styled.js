import styled from '@emotion/styled';
import { colors } from 'styles/utils/variables';

export const TitleWrapper = styled.div`
  border-bottom: 1px solid ${colors.auxiliary};
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: calc(24 / 18);
`;
