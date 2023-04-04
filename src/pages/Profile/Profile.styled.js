import styled from '@emotion/styled';
import { colors, fontSizes, mq, utils } from 'styles/utils/variables';
import { TextField, InputLabel } from '@mui/material';

export const Wrapper = styled.div`
  ${mq.tablet} {
    display: flex;
    gap: 20px;
  }

  ${mq.desktop} {
    gap: 30px;
  }
`;

export const ProfileMenu = styled.div`
  width: 100%;
  padding: 20px 15px;
  border-radius: ${utils.borderRadius};

  background-color: ${colors.auxiliaryBg};

  ${mq.onlyMobile} {
    margin-bottom: 30px;
  }

  ${mq.tablet} {
    width: 240px;
    height: 196px;
  }

  ${mq.desktop} {
    width: 270px;
  }
`;

export const ProfileInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${colors.mainText};
`;

export const ProfileName = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const ProfileEmail = styled.span`
  color: ${colors.auxiliaryText};
`;

export const ProfileList = styled.ul``;

export const ProfileItem = styled.li`
  margin-bottom: 10px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const ProfileBtn = styled.button`
  color: ${({ selected }) => selected && colors.accent};

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${fontSizes.l};
  font-weight: 500;
  margin-bottom: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${colors.auxiliary};
`;

export const OrderList = styled.ul``;

export const OrderItem = styled.li`
  /* padding: 10px 0; */
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.auxiliary};

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
  }
`;

export const OrderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const OrderTitle = styled.span`
  font-weight: 500;
`;

export const OrderDate = styled.span``;

export const ProductOrderList = styled.ul`
  margin-bottom: 10px;
`;

export const ProductSummary = styled.span`
  font-weight: 500;
  display: block;
  text-align: right;
`;

export const SectionWrapper = styled.div`
  width: 100%;

  & button {
    display: block;

    ${mq.tablet} {
      width: 400px;
    }
  }
`;

export const Input = styled(TextField)`
  margin-bottom: 10px;
  width: 100%;
  background-color: ${colors.mainBg};

  & input {
    font-size: ${fontSizes.s};
    padding-top: 10px;
    padding-bottom: 10px;
  }

  &:last-of-type {
    margin-bottom: 20px;
  }

  ${mq.tablet} {
    width: 400px;
  }
`;

export const Label = styled(InputLabel)`
  font-size: ${fontSizes.xs};
  color: ${colors.auxiliaryText};
`;
