import styled from '@emotion/styled';
import { colors, fontSizes, mq, utils } from 'styles/utils/variables';
import { UilTimes } from '@iconscout/react-unicons';
import { UilCheck } from '@iconscout/react-unicons';

export const Wrapper = styled.div`
  ${mq.desktop} {
    font-size: 16px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 346px;

  ${mq.tablet} {
    width: 304px;
    height: 326px;
  }

  ${mq.desktop} {
    width: 415px;
    height: 456px;
  }
`;

export const Name = styled.h2`
  font-size: 24px;
  font-weight: 500;

  ${mq.tablet} {
    font-size: 26px;
  }

  ${mq.desktop} {
    font-size: 36px;
  }
`;

export const StockWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StockInIcon = styled(UilCheck)`
  color: ${colors.success};
`;

export const StockOutIcon = styled(UilTimes)`
  color: ${colors.error};
`;

export const StockText = styled.span``;

export const Ingredients = styled.p``;

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnsList = styled.ul`
  display: flex;
  gap: 5px;

  ${mq.tablet} {
    gap: 10px;
  }
`;

export const BtnsItem = styled.li``;

export const WeightBtn = styled.button`
  padding: 8px 7px;

  border: 1px solid ${colors.accent};
  border-radius: ${utils.borderRadius};

  background-color: ${({ selected }) =>
    selected ? colors.accent : colors.mainBg};
  color: ${({ selected }) => (selected ? colors.iconLight : colors.mainText)};

  transition: color ${utils.transitDur} ${utils.transitFunc},
    background-color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    background-color: ${colors.accent};
    color: ${colors.iconLight};
  }

  ${mq.tablet} {
    padding: 8px 10px;
  }
`;

export const Wholesale = styled.p``;

export const Phone = styled.a`
  text-decoration: underline;

  transition: color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    color: ${colors.accent};
  }
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: ${fontSizes.l};

  ${mq.desktop} {
    font-size: 24px;
  }
`;

export const AmountBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & input {
    height: 32px;
    width: 40px;
  }

  & button {
    width: 220px;

    ${mq.desktop} {
      width: 250px;
    }
  }
`;
