import styled from '@emotion/styled';
import { colors } from 'styles/utils/variables';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;

  border-bottom: 1px solid ${colors.auxiliary};
`;

export const Img = styled.img`
  width: 50px;
`;

export const Title = styled.h3`
  font-weight: 600;

  margin-bottom: 15px;
`;

export const Details = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;
