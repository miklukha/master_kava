import styled from '@emotion/styled';
import { Button, Input } from 'components';
import { colors, fontSizes, mq, utils } from 'styles/utils/variables';
import { Controller } from 'react-hook-form';

export const OrderDetailsWrapper = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: ${utils.borderRadius};
  background-color: ${colors.placingOrderBg};

  & label {
    gap: 5px;
  }

  ${mq.tablet} {
    width: 380px;
  }

  ${mq.desktop} {
    width: 466px;
  }
`;

export const OrderDetailsTogether = styled.p`
  font-size: ${fontSizes.l};
  font-weight: 500;
  margin-bottom: 20px;
`;

export const OrderDetailsList = styled.ul`
  /* margin-bottom: 20px; */
`;

export const OrderDetailsItem = styled.li`
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

export const OrderDetailsCondition = styled.button`
  font-size: ${fontSizes.s};
  text-decoration: underline;
  margin-left: 5px;
  margin-bottom: 0;

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const OrderDetailsLabel = styled.span`
  flex-basis: 50%;
`;

export const OrderDetailsValue = styled.span`
  flex-basis: 50%;
  text-align: end;
`;

export const OrderDetailsBtn = styled(Button)`
  margin-bottom: 20px;
`;

export const OrderDetailsTip = styled.p`
  font-size: ${fontSizes.xs};
`;

export const DeliveryDetails = styled.form``;

export const DeliveryDetailsTitle = styled.h2`
  font-size: ${fontSizes.m};
  margin-bottom: 10px;
`;

export const DeliveryDetailsList = styled.ul`
  font-size: ${fontSizes.s};
  margin-bottom: 20px;
`;

export const DeliveryDetailsItem = styled.li`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const DeliveryDetailsLabel = styled.label`
  font-size: ${fontSizes.xs};
  margin-bottom: 5px;

  color: ${colors.auxiliaryText};
`;

export const DeliveryDetailsInput = styled(Input)`
  width: 100%;
  padding: 10px;
`;

export const CustomController = styled(Controller)`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const DeliveryItem = styled.li`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${colors.auxiliary};
  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;
