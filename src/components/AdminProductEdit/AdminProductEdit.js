import { useForm } from 'react-hook-form';
import {
  Btn,
  BtnsWrapper,
  CancelBtn,
  Form,
  ItemWrapper,
  Tip,
} from './AdminProductEdit.styled';
import { useEffect, useState } from 'react';
import * as API from 'services/api';
import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'http://127.0.0.1:1880';

export function AdminProductEdit({ product = {}, onCancel, action }) {
  const [categories, setCategories] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm();

  const onSubmit = async data => {
    if (action === 'edit') {
    }

    if (action === 'create') {
    }
    // setValue('image', data.image[0]);
    // console.log(data);

    //! availability, characteristics save like STRING
    // setValue('availability', Boolean(data.availability));

    // fetch('http://127.0.0.1:1880/upload-image', {
    //   method: 'POST',
    //   body: data,
    // })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    const formData = new FormData();
    formData.append('image', data.image[0]);

    // const res = await fetch('http://localhost:5000/upload-file', {
    //   method: 'POST',
    //   body: formData,
    // }).then(res => res.json());
    // alert(JSON.stringify(`${res.message}, status: ${res.status}`));

    axios.post('/upload-image', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  useEffect(() => {
    (async function getCategories() {
      try {
        const categories = await API.getCategories();
        setCategories(categories);
      } catch (error) {
        toast.error('Категорії не знайденію спробуйте пізніше');
        // navigate('/', { replace: true });
        console.log(error);
      }
    })();
  }, []);

  // console.log(product);

  const {
    name,
    code,
    availability,
    characteristics = {},
    countries,
    description,
    price,
    roastLevel,
  } = product;
  return (
    <Form onSubmit={handleSubmit(onSubmit)} action={action}>
      <ItemWrapper>
        <label htmlFor="name">Назва</label>
        <input
          type="text"
          id="name"
          defaultValue={name}
          {...register('name', { required: true })}
        />
        {errors.name && <Tip>Це поле обов'язкове</Tip>}
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="code">Код товару</label>
        <input
          type="text"
          id="code"
          defaultValue={code}
          {...register('code', { required: true, maxLength: 20 })}
        />
        {errors.name && (
          <Tip>Максимальна довжина 4 та це поле обов'язкове </Tip>
        )}
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="availability">В наявності</label>
        <select {...register('availability')} value={availability}>
          <option value={true}>Так</option>
          <option value={false}>Ні</option>
        </select>
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="category">Категорія</label>
        <select {...register('category')}>
          {categories.map(({ label, name, _id }) => (
            <option key={_id} value={label}>
              {name}
            </option>
          ))}
        </select>
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="sourness">Кислинка</label>
        <input
          type="number"
          id="sourness"
          defaultValue={characteristics.sourness}
          {...register('sourness', { required: true, min: 1, max: 5 })}
        />
        {errors.sourness && <Tip>Значення повинно бути від 1 до 5</Tip>}
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="bitterness">Гірчинка</label>
        <input
          type="number"
          id="bitterness"
          defaultValue={characteristics.bitterness}
          {...register('bitterness', { required: true, min: 1, max: 5 })}
        />
        {errors.bitterness && <Tip>Значення повинно бути від 1 до 5</Tip>}
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="sturdiness">Міцність</label>
        <input
          type="number"
          id="sturdiness"
          defaultValue={characteristics.sturdiness}
          {...register('sturdiness', { required: true, min: 1, max: 5 })}
        />
        {errors.sturdiness && <Tip>Значення повинно бути від 1 до 5</Tip>}
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="saturation">Насиченість</label>
        <input
          type="number"
          id="saturation"
          defaultValue={characteristics.saturation}
          {...register('saturation', { required: true, min: 1, max: 5 })}
        />
        {errors.saturation && <Tip>Значення повинно бути від 1 до 5</Tip>}
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="countries">Країни (через кому)</label>
        <input
          type="text"
          id="countries"
          defaultValue={countries}
          {...register('countries', { required: true })}
        />
        {errors.countries && <Tip>Це поле обов'язкове</Tip>}
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="description">Опис товару</label>
        <textarea
          style={{ resize: 'none' }}
          type="text"
          id="description"
          defaultValue={description}
          {...register('description', { required: true })}
        />
        {errors.description && <Tip>Це поле обов'язкове</Tip>}
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="price">Ціна</label>
        <input
          type="number"
          id="price"
          defaultValue={price}
          {...register('price', { required: true, min: 0 })}
        />
        {errors.price && (
          <Tip>Це поле обов'язкове і ціна має бути додатною</Tip>
        )}
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="roastLevel">Ступінь обсмаження</label>
        <input
          type="text"
          id="roastLevel"
          defaultValue={roastLevel}
          {...register('roastLevel', { required: true })}
        />
        {errors.roastLevel && <Tip>Це поле обов'язкове </Tip>}
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="image">Зоображення</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          {...register('image', { required: true })}
        />
        {errors.image && <Tip>Це поле обов'язкове </Tip>}
      </ItemWrapper>
      <BtnsWrapper>
        <Btn type="submit">Підтвердити</Btn>
        {action === 'edit' && (
          <CancelBtn type="button" onClick={onCancel}>
            Скасувати
          </CancelBtn>
        )}
      </BtnsWrapper>
    </Form>
  );
}
