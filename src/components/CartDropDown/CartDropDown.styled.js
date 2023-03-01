import styled from '@emotion/styled';
import { colors, utils, fontSizes } from 'styles/utils/variables';
import { CloseBtn } from 'layouts/Header/Header.styled';

export const CartDropWrapper = styled.div`
  position: absolute;
  top: auto;
  right: -1px;

  padding: 10px;

  font-size: ${fontSizes.s};

  /* text-align: left; */

  width: 300px;
  /* height: 300px; */
  border: 1px solid ${colors.auxiliary};
  border-top: none;
  border-radius: ${utils.borderRadius};

  background-color: ${colors.mainBg};
  color: ${colors.mainText};
`;

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

export const ProductWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  padding-bottom: 20px;
  margin-bottom: 20px;

  border-bottom: 1px solid ${colors.auxiliary};
`;

export const CartDeleteBtn = styled(CloseBtn)`
  top: 0;
  right: 0;
`;

export const ProductImg = styled.img`
  width: 50px;
`;

export const ProductDesc = styled.div`
  /* display: flex; */
`;

export const ProductTitle = styled.h3`
  /* width: 50px; */
  /* font-size: 14px; */
  font-weight: 600;

  margin-bottom: 15px;
`;

export const ProductPrice = styled.span`
  /* font-size: 14px; */
`;

export const ProductDetails = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

export const OrderDesc = styled.div`
  margin-bottom: 20px;
`;

export const OrderData = styled.p`
  & + & {
    margin-top: 5px;
  }
`;

export const OrderDynamicData = styled.span`
  font-weight: 600;
`;

export const Button = styled.button`
  font-weight: 600;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
  background-color: ${colors.accent};
  color: ${colors.whiteText};
  border-radius: ${utils.borderRadiusOfBtn};
  text-align: center;
`;

// export const CounterWrapper = styled.div`
//   display: flex;
//   align-items: center;

//   font-size: 12px;

//   width: 48px;
//   height: 40px;
//   border: 1px solid ${colors.auxiliary};
//   border-radius: 4px;

//   color: ${colors.auxiliaryText};
// `;

// export const BtnWrapper = styled.div`
//   display: flex;
//   flex-direction: column;

//   border-right: 1px solid ${colors.auxiliary};
// `;

// export const CounterBtns = styled.button`
//   width: 20px;
//   height: 20px;

//   line-height: normal;

//   & + & {
//     border-top: 1px solid ${colors.auxiliary};
//   }

//   &:hover,
//   &:focus {
//     color: ${colors.accent};
//   }
// `;

// export const CounterNumber = styled.span`
//   padding-left: 10px;
// `;
