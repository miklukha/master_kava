import styled from '@emotion/styled';
import { colors, fontSizes, mq, utils } from 'styles/utils/variables';
import { UilTimes } from '@iconscout/react-unicons';
import { UilCheck } from '@iconscout/react-unicons';

export const Wrapper = styled.div`
  margin-bottom: 30px;

  ${mq.tablet} {
    display: flex;
    gap: 30px;
    /* flex-direction: row; */
  }

  ${mq.desktop} {
    font-size: 16px;
    gap: 60px;
  }
`;

export const ImgWrapper = styled.div`
  flex-shrink: 0;
  margin-bottom: 10px;
  border-radius: ${utils.borderRadius};

  ${mq.tablet} {
    margin-bottom: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 346px;

  ${mq.tablet} {
    width: 304px;
    height: 313px;
  }

  ${mq.desktop} {
    width: 415px;
    height: 387px;
  }
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${mq.desktop} {
    gap: 20px;
  }
`;

export const Name = styled.h1`
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

  ${mq.tablet} {
    justify-content: flex-start;
    gap: 20px;
  }
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
  font-size: ${fontSizes.s};
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

export const Wholesale = styled.p`
  font-size: ${fontSizes.s};
`;

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
    ${mq.tablet} {
      width: 220px;
    }

    ${mq.desktop} {
      width: 250px;
    }
  }
`;

// export const DescBtnsWrapper = styled.div`
//   display: flex;
//   border-bottom: 1px solid ${colors.auxiliary};
//   margin-bottom: 20px;

//   ${mq.tablet} {
//     gap: 20px;
//   }

//   ${mq.desktop} {
//     gap: 30px;
//     /* margin-bottom: 20px; */
//   }
// `;

// export const DescBtn = styled.button`
//   font-weight: 500;
//   text-transform: uppercase;
//   text-align: left;
//   padding: 5px 0;

//   color: ${({ selected }) => (selected ? colors.accent : colors.mainText)};

//   transition: color ${utils.transitDur} ${utils.transitFunc};

//   &:hover,
//   &:focus {
//     color: ${colors.accent};
//   }
// `;

// export const DescText = styled.p`
//   margin-bottom: 20px;

//   /* ${mq.desktop} {
//     margin-bottom: 20px;
//   } */
// `;

// export const CharactList = styled.ul``;

// export const CharactItem = styled.li`
//   display: flex;
//   align-items: center;

//   margin-bottom: 5px;

//   &:last-of-type {
//     margin-bottom: 0;
//   }

//   ${mq.desktop} {
//     margin-bottom: 10px;
//   }
// `;

// export const CharactText = styled.span`
//   flex: 1;
//   display: flex;
//   align-items: baseline;
//   justify-content: space-between;

//   &:first-of-type::after {
//     content: '';
//     flex: 1;
//     border-bottom: 1px dotted ${colors.auxiliary};
//     margin: 0 3px;
//   }

//   ${mq.tablet} {
//     &:last-of-type {
//       flex-basis: 50%;
//     }
//   }

//   ${mq.desktop} {
//     &:last-of-type {
//       flex-basis: 60%;
//     }
//   }
// `;

// export const CookingMethodsTitle = styled.p`
//   margin-bottom: 10px;
// `;

// export const CookingMethodsList = styled.ul``;

// export const CookingMethodsItem = styled.li`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   min-height: 39px;
//   /* padding-top: 5px; */

//   margin-bottom: 10px;

//   &:last-of-type {
//     margin-bottom: 0;
//   }
// `;

// export const CookingMethod = styled.span``;

// export const CookingMethodImg = styled.img`
//   width: 30px;
// `;
