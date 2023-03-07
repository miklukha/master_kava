import styled from '@emotion/styled';
import { colors, utils, fontSizes } from 'styles/utils/variables';
// import { CloseBtn } from 'layouts/Header/Header.styled';

export const CartDropWrapper = styled.div`
  position: absolute;
  top: auto;
  right: -1px;

  padding: 10px;

  font-size: ${fontSizes.s};

  width: 300px;
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

// export const CartDeleteBtn = styled(CloseBtn)`
//   top: 0;
//   right: 0;
// `;

export const ProductImg = styled.img`
  width: 50px;
`;

export const ProductDesc = styled.div``;

export const ProductTitle = styled.h3`
  font-weight: 600;

  margin-bottom: 15px;
`;

export const ProductPrice = styled.span``;

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
