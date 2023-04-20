import {
  Button,
  Counter,
  FilterDropdown,
  ProductCharactDesc,
  ProductDescription,
} from 'components';
import { grinds, weights } from 'helpers';
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
  // const LS_KEY = 'products';
  const [product, setProduct] = useState(null);

  const [grind, setGrind] = useState(grinds[0]);
  const [weight, setWeight] = useState(weights[0].value);
  const [quantity, setQuantity] = useState(1);

  const { productId } = useParams();
  const navigate = useNavigate();

  const onQuantityChange = newQuantity => {
    if (newQuantity) {
      setQuantity(parseInt(newQuantity));
    }

    if (!newQuantity) {
      setQuantity(0);
    }
  };

  const onBtnClick = i => {
    setWeight(weights[i].value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const cartProduct = {
      id: product._id,
      name: product.name,
      image: product.image,
      price: (product.price * (weight / 100) + 10) * quantity,
      grind,
      weight,
      quantity,
    };

    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    cartData.push(cartProduct);

    localStorage.setItem('cartData', JSON.stringify(cartData));

    toast.success('Товар успішно доданий до кошика');
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
        <form onSubmit={e => onSubmit(e)}>
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
                  filterOptions={grinds}
                  selectedOption={grind}
                  onSetOption={option => setGrind(option)}
                />
                <BtnsList>
                  {weights.map(({ id, value }, i) => {
                    return (
                      <BtnsItem key={id}>
                        <WeightBtn
                          selected={weight === value ? true : false}
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
                Ціна: {(product.price * (weight / 100) + 10) * quantity}
                грн
              </Price>
              <AmountBtnWrapper>
                <Counter handleQuantityChange={onQuantityChange} />
                <Button type="submit" aria-label="додати до кошика">
                  До кошика
                </Button>
              </AmountBtnWrapper>
            </DescWrapper>
          </Wrapper>
          <ProductDescription product={product} />
        </form>
      )}
    </>
  );
}
