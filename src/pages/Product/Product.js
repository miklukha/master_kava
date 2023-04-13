import {
  Button,
  Counter,
  FilterDropdown,
  ProductCharactDesc,
  ProductDescription,
} from 'components';
import { typesOptions, weights } from 'helpers';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  AmountBtnWrapper,
  BtnsItem,
  BtnsList,
  DescWrapper,
  FiltersWrapper,
  Img,
  ImgWrapper,
  Name,
  Phone,
  Price,
  StockInIcon,
  StockOutIcon,
  StockText,
  StockWrapper,
  WeightBtn,
  Wholesale,
  Wrapper,
} from './Product.styled';
import * as API from 'services/api';

export function Product() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(weights[0].value);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const onBtnClick = i => {
    setSelectedWeight(weights[i].value);
  };

  useEffect(() => {
    (async function getProductById() {
      try {
        const product = await API.getProductById(productId);
        setProduct(product[0]);
      } catch (error) {
        // toast.error('Film is not found');
        // navigate('/', { replace: true });
        // console.log(error);
      }
    })();
  }, [productId]);

  // const product = getProductById(productId);
  // setProduct(product);

  // if (product) {

  // }
  // const {
  //   name,
  //   image,
  //   availability,
  //   price,
  //   description,
  //   category,
  //   characteristics,
  //   roastLevel,
  //   countries,
  // } = product;

  return (
    <>
      {product && (
        <>
          <Wrapper>
            <ImgWrapper>
              <Img src={product.image} alt={product.name} />
            </ImgWrapper>
            <DescWrapper>
              <Name>{product.name}</Name>
              <StockWrapper>
                {product.availability ? (
                  <>
                    <StockInIcon /> <StockText>Є в наявності</StockText>
                  </>
                ) : (
                  <>
                    <StockOutIcon /> <StockText>Немає в наявності</StockText>
                  </>
                )}
              </StockWrapper>
              <ProductCharactDesc characteristics={product.characteristics} />
              <FiltersWrapper>
                <FilterDropdown
                  desc={true}
                  filterOptions={typesOptions}
                  selectedOption={selectedOption}
                  onSetOption={option => setSelectedOption(option)}
                />
                <BtnsList>
                  {weights.map(({ id, value }, i) => {
                    return (
                      <BtnsItem key={id}>
                        <WeightBtn
                          selected={selectedWeight === value ? true : false}
                          type="button"
                          aria-label={`${value} грам кави`}
                          onClick={() => onBtnClick(i)}
                        >
                          {value}г
                        </WeightBtn>
                      </BtnsItem>
                    );
                  })}
                </BtnsList>
              </FiltersWrapper>
              <Wholesale>
                Придбання цього товару <b>оптом</b> можливе лише за попередньою
                розмовою по <Phone href="tel:+380671429022">телефону</Phone>
              </Wholesale>
              <Price>Ціна: {product.price} грн</Price>
              <AmountBtnWrapper>
                <Counter />
                <Button
                  onClick={() => {
                    console.log('add to cart');
                  }}
                  type="button"
                  aria-label="додати до кошика"
                >
                  До кошика
                </Button>
              </AmountBtnWrapper>
            </DescWrapper>
          </Wrapper>
          <ProductDescription product={product} />
        </>
      )}
    </>
  );
}
