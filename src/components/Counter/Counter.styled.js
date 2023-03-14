import styled from '@emotion/styled';
import { colors, fontSizes, mq, utils } from 'styles/utils/variables';

// export const CounterWrapper = styled.div`
//   display: flex;
//   align-items: center;

//   font-size: 8px;

//   width: 68px; //48
//   height: 40px; //40
//   border: 1px solid ${colors.auxiliary};
//   border-radius: 2px; //4

//   color: ${colors.auxiliaryText};
// `;

export const Input = styled.input`
  font-size: ${fontSizes.xs};
  text-align: center;

  padding: 5px;
  width: 30px;
  height: 20px; //40
  border: 1px solid ${colors.auxiliary};
  border-radius: 2px; //4

  color: ${colors.mainText};

  /* transition: border-color ${utils.transitDur} ${utils.transitFunc};

  &:hover,
  &:focus {
    border-color: ${colors.accent};
  } */

  ${mq.tablet} {
    width: 40px; //48
  }
`;

// export const BtnsWrapper = styled.div`
//   display: flex;
//   flex-direction: column;

//   border-right: 1px solid ${colors.auxiliary};
// `;

// export const CounterBtn = styled.button`
//   position: relative;
//   width: 10px; //20
//   height: 10px; //20

//   &:first-of-type {
//     border-bottom: 1px solid ${colors.auxiliary};
//   }

//   transition: color ${utils.transitDur} ${utils.transitFunc};

//   &:hover,
//   &:focus {
//     color: ${colors.accent};
//   }
// `;

// export const CounterNumber = styled.span`
//   padding: 5px; //10
// `;
