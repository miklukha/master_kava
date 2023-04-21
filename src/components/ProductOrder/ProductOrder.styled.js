import styled from '@emotion/styled';
import { colors, fontSizes } from 'styles/utils/variables';

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  gap: 20px;

  padding-top: ${({ placing }) => !placing && '20px'};
  padding-bottom: 20px;

  /* border-bottom: ${({ placing }) =>
    placing
      ? `1px solid ${colors.iconDark}`
      : `1px solid ${colors.auxiliary}`}; */
  border-bottom: ${({ placing }) =>
    !placing && `1px solid ${colors.auxiliary}`};

  &:last-of-type {
    padding-bottom: ${({ placing }) => placing && 0};
    padding-top: ${({ placing }) => placing && 0};
    /* padding-bottom: 0; */
  }
`;

export const Img = styled.img`
  width: 50px;
`;

export const Title = styled.h3`
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Details = styled.ul`
  display: flex;
  /* justify-content: space-between; */
  gap: 8px;
  /* align-items: flex-end; */
`;

export const DetailsPrice = styled.span`
  font-weight: 500;
`;

export const DetailsItem = styled.li`
  /* font-size: ${fontSizes.xs}; */
  /* color: ${colors.auxiliaryText}; */
`;

export const DescWrapper = styled.div`
  display: ${({ placing }) => placing && 'flex'};
  justify-content: ${({ placing }) => placing && 'space-between'};
  align-items: ${({ placing }) => placing && 'flex-start'};

  width: ${({ placing }) => placing && '100%'};
`;

export const DetailsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
