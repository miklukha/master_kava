import styled from '@emotion/styled';
import { colors, fontSizes, mq, utils } from 'styles/utils/variables';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: ${utils.borderRadius};
  background-color: ${colors.placingOrderBg};

  & label {
    gap: 5px;
  }

  ${mq.tablet} {
    flex-grow: 0;
    width: 380px;
    height: 240px;
    margin-bottom: 0;
  }
`;

export const TogetherText = styled.p`
  font-size: ${fontSizes.l};
  font-weight: 500;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin-bottom: 20px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;

  &:last-of-type {
    /* padding: 20px 0; */
    padding-top: 20px;
    border-top: 1px solid ${colors.iconDark};
    /* border-bottom: 1px solid ${colors.iconDark}; */
    margin-bottom: 0;
  }

  &:last-of-type span {
    font-size: ${fontSizes.l};
    font-weight: 500;
  }
`;

export const Label = styled.span`
  flex-basis: 50%;
`;

export const Value = styled.span`
  flex-basis: 50%;
  text-align: end;
`;

export const Tip = styled.p`
  font-size: ${fontSizes.xs};
`;
