import { useState, useEffect, Fragment } from 'react';
import {
  BtnsWrapper,
  IconBtn,
  Item,
  List,
  ModalBtn,
  SearchWrapper,
  Wrapper,
} from './AdminProducts.styled';
import { AdminProductEdit, Input } from 'components';
import { UilTrashAlt, UilEditAlt } from '@iconscout/react-unicons';
import * as API from 'services/api';
import { DebounceInput } from 'react-debounce-input';
import toast from 'react-hot-toast';

export function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [editingProductId, setEditingProductId] = useState(null);

  const onSearchChange = e => {
    setSearch(e.target.value);
  };

  const onCancelEdit = () => {
    setEditingProductId(null);
  };

  const onEditProduct = id => {
    setEditingProductId(id);
  };

  const onDeleteProduct = async id => {
    try {
      await API.deleteProduct(id);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      toast.error('Щось пішло не так, спробуйте пізніше');
      console.log(error);
    }
  };

  const onDelete = id => {
    toast(
      t => (
        <div>
          Ви впевнені, що хочете видалити товар?
          <BtnsWrapper>
            <ModalBtn
              onClick={() => {
                onDeleteProduct(id);
                toast.dismiss(t.id);
              }}
            >
              Так
            </ModalBtn>
            <ModalBtn onClick={() => toast.dismiss(t.id)}>Скасувати</ModalBtn>
          </BtnsWrapper>
        </div>
      ),
      {
        duration: 30000,
      }
    );
  };

  useEffect(() => {
    (async function getProducts() {
      try {
        const products = await API.getProducts();
        setProducts(products);
      } catch (error) {
        toast.error('Щось пішло не так, спробуйте пізніше');
        // navigate('/', { replace: true });
        console.log(error);
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
        {filteredProducts.map(product => {
          const { _id, name } = product;
          const isEditing = _id === editingProductId;

          return (
            <Fragment key={_id}>
              <Item>
                {name}
                <div>
                  <IconBtn type="button" onClick={() => onEditProduct(_id)}>
                    <UilEditAlt />
                  </IconBtn>
                  <IconBtn type="button" onClick={() => onDelete(_id)}>
                    <UilTrashAlt />
                  </IconBtn>
                </div>
              </Item>
              {isEditing && (
                <AdminProductEdit
                  product={product}
                  onCancel={onCancelEdit}
                  action="edit"
                />
              )}
            </Fragment>
          );
        })}
      </List>
    </Wrapper>
  );
}
