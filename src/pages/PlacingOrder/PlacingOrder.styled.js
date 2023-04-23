import styled from '@emotion/styled';
import { Button } from 'components';
import { colors, fontSizes, mq, utils } from 'styles/utils/variables';
import { Controller } from 'react-hook-form';
import {
  TextField,
  InputLabel,
  // Select,
  MenuItem,
  // Autocomplete,
} from '@mui/material';

export const Wrapper = styled.div`
  & div.Mui-focused {
    border-color: red;
  }

  ${mq.tablet} {
    display: flex;
    flex-direction: row-reverse;
    gap: 30px;
  }

  ${mq.desktop} {
    gap: 40px;
    justify-content: center;
  }
`;

export const OrderDetailsCondition = styled.button`
  font-size: ${fontSizes.s};
  text-decoration: underline;
  margin-left: 5px;
  margin-bottom: 0;

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const OrderDetailsBtn = styled(Button)`
  padding: 17px 0;
`;

export const DetailsTitle = styled.h2`
  font-size: ${fontSizes.m};
  margin-bottom: 10px;
`;

export const DetailsList = styled.ul`
  font-size: ${fontSizes.s};
  margin-bottom: 20px;
`;

export const DetailsItem = styled.li`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

// export const DetailsLabel = styled.label`
//   font-size: ${fontSizes.xs};
//   margin-bottom: 5px;

//   color: ${colors.auxiliaryText};
// `;

export const DetailsLabel = styled(InputLabel)`
  font-size: ${fontSizes.xs};
  margin-bottom: 5px;
  color: ${colors.auxiliaryText};
`;

export const DetailsInput = styled(TextField)`
  width: 100%;
  background-color: ${colors.mainBg};

  & input {
    font-size: ${fontSizes.s};
    padding-top: 17px;
    padding-bottom: 17px;
  }

  ${mq.tablet} {
    width: 400px;
  }

  ${mq.desktop} {
    width: 470px;
  }
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

  background-color: ${colors.mainBg};

  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  & label {
    margin-right: 0;
    /* padding: 10px; */
  }
`;

export const Notification = styled.p`
  text-align: center;
`;

export const Tip = styled.p`
  align-self: flex-end;
  margin-top: 10px;
  color: ${colors.error};
`;

// export const SelectOption = styled(Autocomplete)`
//   font-size: 14px;

/* &:hover,
  &:focus {
    border-color: ${colors.accent};
  } */
// `;

export const AddressInput = styled(TextField)`
  font-size: 14px;
`;

export const Option = styled(MenuItem)`
  font-size: ${fontSizes.s};

  &.Mui-selected:hover,
  &.Mui-selected:focus {
    background-color: rgba(0, 0, 0, 0.04);
  }

  &.Mui-selected {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

//------------------------------------------------------//
