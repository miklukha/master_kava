import { useState, useEffect } from 'react';
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
import * as API from 'services/api';
import toast from 'react-hot-toast';

export function ShopFilter({ handleClick, onSetProducts }) {
  const [minPrice, setMinPrice] = useState('0');
  const [maxPrice, setMaxPrice] = useState('500');
  const [categories, setCategories] = useState([]);
  const [labels, setLabels] = useState([]);

  const onInputChangeMin = e => {
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

  const onInputChangeMax = e => {
    const value = e.target.value;

    if (value === '') {
      setMaxPrice('0');
      return;
    }

    if (maxPrice === '0') {
      setMaxPrice(value.slice(1, value.length));
      return;
    }

    setMaxPrice(value);
  };

  const onClick = async e => {
    e.preventDefault();

    try {
      const products = await API.getProductsByPrice(
        parseInt(minPrice),
        parseInt(maxPrice)
      );

      onSetProducts(products);
    } catch (error) {
      console.log(error);
    }
  };

  const onCheckboxChange = e => {
    const isChecked = e.target.checked;
    const categoryLabel = e.target.id;

    // console.log(isChecked);
    // console.log(labels);

    if (isChecked) {
      setLabels(labels => [...labels, categoryLabel]);
    } else {
      setLabels(labels.filter(label => label !== categoryLabel));
    }
  };

  useEffect(() => {
    //!! fix
    if (labels.length !== 0) {
      (async function getProductsByCategory() {
        try {
          const products = await API.getProductsByCategory(labels.join(','));
          onSetProducts(products);
        } catch (error) {
          toast.error('Щось пішло не так, спробуйте, будь ласка, пізніше');
          console.log(error);
        }
      })();
    } // else {
    //   (async function getAllProducts() {
    //     try {
    //       const products = await API.getProducts();
    //       onSetProducts(products);
    //     } catch (error) {
    //       toast.error('Щось пішло не так, спробуйте, будь ласка, пізніше');
    //       console.log(error);
    //     }
    //   })();
    // }
  }, [labels, onSetProducts]);

  useEffect(() => {
    (async function getCategories() {
      try {
        const categories = await API.getCategories();
        setCategories(categories);
      } catch (error) {
        toast.error('Категорії не знайдені, спробуйте пізніше');
        console.log(error);
      }
    })();
  }, []);

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
          name="minPrice"
          value={minPrice}
          onChange={e => onInputChangeMin(e)}
        />
        -
        <Input
          type="number"
          name="maxPrice"
          // id="maxPrice"
          value={maxPrice}
          onChange={e => onInputChangeMax(e)}
        />
        <Button type="click" aria-label="застосувати фільтр" onClick={onClick}>
          Ок
        </Button>
      </InputsWrapper>
      <Label htmlFor="ingredients">Склад</Label>
      <OptionList>
        {categories &&
          categories.map(({ _id, label, name }) => (
            <OptionItem key={_id}>
              <input
                className={visuallyHidden}
                type="checkbox"
                id={label}
                onChange={e => onCheckboxChange(e)}
              />
              <CheckboxLabel htmlFor={label}>{name}</CheckboxLabel>
            </OptionItem>
          ))}
      </OptionList>
      {/* <Label htmlFor="country">Країна походження</Label>
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
      </OptionList> */}
    </Form>
  );
}
