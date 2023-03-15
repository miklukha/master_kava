import { useState } from 'react';
import {
  Label,
  Form,
  InputsWrapper,
  CheckboxLabel,
  OptionItem,
  OptionList,
} from './ShopFilter.styled';
import { Button, Input, CloseDeleteBtn } from 'components';
import { visuallyHidden } from 'styles/utils/visuallyHidden';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'styles/utils/variables';

export function ShopFilter({ handleClick }) {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('1000');

  //! the same for maxPrice
  //! the checking if entered value is number
  const onInputChange = e => {
    const value = e.target.value;

    if (value === '') {
      setMinPrice('0');
      return;
    }

    if (minPrice === '0') {
      setMinPrice(value.slice(1, value.length));
      return;
    }

    setMinPrice(value);
  };

  const onSubmitClick = e => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Form>
      <MediaQuery maxWidth={parseInt(breakpoints.preTablet)}>
        <CloseDeleteBtn handleClick={handleClick} />
      </MediaQuery>
      <Label htmlFor="price">Ціна</Label>
      <InputsWrapper>
        <Input
          type="number"
          id="price"
          value={minPrice}
          onChange={e => onInputChange(e)}
        />
        -
        <Input
          type="number"
          // id="maxPrice"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
        />
      </InputsWrapper>
      <Label htmlFor="ingredients">Склад</Label>
      <OptionList>
        <OptionItem>
          <input className={visuallyHidden} type="checkbox" id="arabica" />
          <CheckboxLabel htmlFor="arabica">100% Арабіка</CheckboxLabel>
        </OptionItem>
        <OptionItem>
          <input
            className={visuallyHidden}
            type="checkbox"
            id="arabica-robusta"
          />
          <CheckboxLabel htmlFor="arabica-robusta">
            Арабіка 80% / Робуста 20%
          </CheckboxLabel>
        </OptionItem>
      </OptionList>
      <Label htmlFor="country">Країна походження</Label>
      <OptionList>
        <OptionItem>
          <input className={visuallyHidden} type="checkbox" id="brasilia" />
          <CheckboxLabel htmlFor="brasilia">Бразилія</CheckboxLabel>
        </OptionItem>
        <OptionItem>
          <input className={visuallyHidden} type="checkbox" id="kenya" />
          <CheckboxLabel htmlFor="kenya">Кенія</CheckboxLabel>
        </OptionItem>
        <OptionItem>
          <input className={visuallyHidden} type="checkbox" id="mexico" />
          <CheckboxLabel htmlFor="mexico">Мексика</CheckboxLabel>
        </OptionItem>
      </OptionList>
      <Button
        type="submit"
        aria-label="застосувати фільтр"
        onClick={e => {
          onSubmitClick(e);
        }}
      >
        Застосувати
      </Button>
    </Form>
  );
}
