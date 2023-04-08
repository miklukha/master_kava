import product from 'assets/images/product.jpg';
import {
  ProductCharactDesc,
  FilterDropdown,
  Counter,
  Button,
} from 'components';
import {
  AmountBtnWrapper,
  BtnsItem,
  BtnsList,
  CharactItem,
  CharactList,
  CharactText,
  CookingMethod,
  CookingMethodImg,
  CookingMethodsItem,
  CookingMethodsList,
  CookingMethodsTitle,
  DescBtn,
  DescBtnsWrapper,
  DescText,
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
  DescWrapper,
} from './Product.styled';
import { useState, useEffect } from 'react';
import { typesOptions } from 'helpers';
import { coffeeFilter, turka, geyser, machine } from 'assets/images';
import { useParams } from 'react-router-dom';
import * as API from 'services/api';

// const weights = [250, 500, 1000];
const weights = [
  { id: 1, value: 250 },
  { id: 2, value: 500 },
  { id: 3, value: 1000 },
];

const descs = [
  { id: 1, value: 'опис та характеристика' },
  { id: 2, value: 'способи приготування' },
];

export function Product() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(weights[0].value);
  const [selectedDesc, setSelectedDesc] = useState(descs[0].value);
  const { productId } = useParams();

  const inStock = true;

  const onBtnClick = i => {
    setSelectedWeight(weights[i].value);
  };

  const onDescBtnClick = i => {
    setSelectedDesc(descs[i].value);
  };

  useEffect(() => {
    (async function getProduct() {
      try {
        const product = await API.getProductById(productId);
        console.log(product);
        // setMovie(movie);
      } catch (error) {
        // toast.error('Film is not found');
        // navigate('/', { replace: true });
        // console.log(error);
      }
    })();
  }, [productId]);

  return (
    <>
      <Wrapper>
        <ImgWrapper>
          <Img src={product} alt="the photo of product" />
        </ImgWrapper>
        <DescWrapper>
          <Name>Кава Brasil</Name>
          <StockWrapper>
            {inStock ? (
              <>
                <StockInIcon /> <StockText>Є в наявності</StockText>
              </>
            ) : (
              <>
                <StockOutIcon /> <StockText>Немає в наявності</StockText>
              </>
            )}
          </StockWrapper>
          <ProductCharactDesc />
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
          <Price>Ціна: 655 грн</Price>
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
      <DescBtnsWrapper>
        {descs.map(({ id, value }, i) => {
          return (
            <DescBtn
              key={id}
              selected={selectedDesc === value ? true : false}
              type="button"
              aria-label={`подивитися ${value}`}
              onClick={() => onDescBtnClick(i)}
            >
              {value}
            </DescBtn>
          );
        })}
      </DescBtnsWrapper>
      {selectedDesc === descs[0].value && (
        <>
          <DescText>
            Виражена кислинка і легка пікантність цього моносорту арабіки
            ідеально підходить для заварювання кави в турці. Цей сорт кави
            унікальний – він поєднав у собі найніжніший відтінок чорного
            шоколаду та чарівний аромат.
          </DescText>
          <CharactList>
            <CharactItem>
              <CharactText>Склад</CharactText>
              <CharactText>100% арабіка</CharactText>
            </CharactItem>
            <CharactItem>
              <CharactText>Ступінь обсмаження</CharactText>
              <CharactText>середній</CharactText>
            </CharactItem>
            <CharactItem>
              <CharactText>Країна походження</CharactText>
              <CharactText>Бразилія</CharactText>
            </CharactItem>
          </CharactList>
        </>
      )}
      {selectedDesc === descs[1].value && (
        <>
          <CookingMethodsTitle>
            Рекомендовані способи приготування:
          </CookingMethodsTitle>
          <CookingMethodsList>
            <CookingMethodsItem>
              <CookingMethodImg src={turka} />
              <CookingMethod>Турка</CookingMethod>
            </CookingMethodsItem>
            <CookingMethodsItem>
              <CookingMethodImg src={machine} />
              <CookingMethod>Кавомашина (еспресо)</CookingMethod>
            </CookingMethodsItem>
            <CookingMethodsItem>
              <CookingMethodImg src={geyser} />
              <CookingMethod>Гейзер</CookingMethod>
            </CookingMethodsItem>

            <CookingMethodsItem>
              <CookingMethodImg src={coffeeFilter} />
              <CookingMethod>Фільтр кавоварка</CookingMethod>
            </CookingMethodsItem>
          </CookingMethodsList>
        </>
      )}
    </>
  );
}
