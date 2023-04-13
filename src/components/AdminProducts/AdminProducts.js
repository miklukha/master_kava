import { useState, useEffect } from 'react';
import {
  IconBtn,
  Item,
  List,
  SearchWrapper,
  Wrapper,
} from './AdminProducts.styled';
import { Input } from 'components';
import { UilTrashAlt, UilEditAlt } from '@iconscout/react-unicons';
import * as API from 'services/api';
import { DebounceInput } from 'react-debounce-input';

export function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const onSearchChange = e => {
    setSearch(e.target.value);
  };

  const onChangeProduct = id => {
    console.log(id);
  };

  const onDeleteProduct = id => {
    console.log(id);
  };

  useEffect(() => {
    (async function getProducts() {
      try {
        const products = await API.getProducts();
        setProducts(products);
      } catch (error) {
        // toast.error('Film is not found');
        // navigate('/', { replace: true });
        // console.log(error);
      }
    })();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Wrapper>
      <SearchWrapper>
        <DebounceInput
          element={Input}
          debounceTimeout={300}
          onChange={onSearchChange}
          placeholder="Введіть назву"
        />
      </SearchWrapper>
      <List>
        {filteredProducts.map(({ _id, name }) => (
          <Item key={_id}>
            {name}
            <div>
              <IconBtn type="button" onClick={() => onChangeProduct(_id)}>
                <UilEditAlt />
              </IconBtn>
              <IconBtn type="button" onClick={() => onDeleteProduct(_id)}>
                <UilTrashAlt />
              </IconBtn>
            </div>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
}
