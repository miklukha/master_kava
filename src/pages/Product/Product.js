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
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function Product() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(weights[0].value);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const navigate = useNavigate();

  const onQuantityChange = newQuantity => {
    setQuantity(parseInt(newQuantity));
  };

  const onBtnClick = i => {
    setSelectedWeight(weights[i].value);
  };

  useEffect(() => {
    (async function getProductById() {
      try {
        const product = await API.getProductById(productId);
        setProduct(product[0]);
      } catch (error) {
        toast.error('Продукт не знайдений, спробуйте, будь ласка, пізніше');
        navigate('/shop', { replace: true });
        console.log(error);
      }
    })();
  }, [navigate, productId]);

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
              <Price>
                Ціна: {(product.price * (selectedWeight / 100) + 10) * quantity}
                грн
              </Price>
              <AmountBtnWrapper>
                <Counter handleQuantityChange={onQuantityChange} />
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
