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
import toast from 'react-hot-toast';

export function AdminProductEdit({ product = {}, onCancel, action }) {
  const {
    name,
    code,
    availability,
    characteristics = {},
    countries,
    description,
    price,
    roastLevel,
    category,
  } = product;

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category?.label);
  const [selectedAvailability, setSelectedAvailability] =
    useState(availability);

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm();

  const onSubmit = data => {
    // if (action === 'edit') {
    // }
    // if (action === 'create') {
    // }
    // setValue('category', selectedCategory);

    console.log(data);
    //! availability, characteristics save like STRING
  };

  useEffect(() => {
    (async function getCategories() {
      try {
        const categories = await API.getCategories();
        setCategories(categories);
      } catch (error) {
        toast.error('Категорії не знайдені, спробуйте пізніше');
        // navigate('/', { replace: true });
        console.log(error);
      }
    })();
  }, []);

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
        <select
          {...register('availability')}
          value={selectedAvailability}
          onChange={e => setSelectedAvailability(e.target.value)}
        >
          <option value={true}>Так</option>
          <option value={false}>Ні</option>
        </select>
      </ItemWrapper>
      <ItemWrapper>
        <label htmlFor="category">Категорія</label>
        <select
          {...register('category', { required: true })}
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(({ label, name, _id }) => {
            return (
              <option key={_id} value={label}>
                {name}
              </option>
            );
          })}
        </select>
        {errors.category && <Tip>Це поле обов'язкове</Tip>}
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
      {/* <ItemWrapper>
        <label htmlFor="image">Зоображення</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          {...register('image', { required: true })}
        />
        {errors.image && <Tip>Це поле обов'язкове </Tip>}
      </ItemWrapper> */}
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
