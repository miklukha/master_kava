import { Header } from 'layouts';
import product from 'assets/images/product.jpg';
import {
  Container,
  Section,
  ProductCharactDesc,
  FilterDropdown,
  Counter,
  Button,
} from 'components';
import {
  AmountBtnWrapper,
  BtnsItem,
  BtnsList,
  FiltersWrapper,
  Img,
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
import { useState } from 'react';
import { typesOptions } from 'helpers';

const weights = [250, 500, 1000];

export function Product() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(weights[0]);
  const inStock = true;

  const onBtnClick = i => {
    setSelectedWeight(weights[i]);
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Wrapper>
            <Img src={product} alt="the photo of product" />
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
                {weights.map((weight, i) => {
                  return (
                    <BtnsItem key={i}>
                      <WeightBtn
                        selected={selectedWeight === weights[i] ? true : false}
                        type="button"
                        aria-label={`${weight} грам кави`}
                        onClick={() => onBtnClick(i)}
                      >
                        {weight}г
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
              <Button type="button" aria-label="додати до кошика">
                До кошика
              </Button>
            </AmountBtnWrapper>
          </Wrapper>
        </Container>
      </Section>
    </>
  );
}
