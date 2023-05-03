import { useForm } from 'react-hook-form';
import {
  Btn,
  BtnsWrapper,
  CancelBtn,
  Form,
  // ImgPreview,
  ItemWrapper,
  LoadBtn,
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
  const [selectedCategory, setSelectedCategory] = useState(category?._id);
  const [selectedAvailability, setSelectedAvailability] =
    useState(availability);
  const [file, setFile] = useState(null);

  // const imagePath = `http://127.0.0.1:1880/images/${product._id}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const onFileChange = e => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = async data => {
    if (action === 'edit') {
      try {
        await API.updateProduct(product._id, data);
        toast.success('Товар успішно оновлено');

        console.log(data);
      } catch (error) {
        console.error(error);
        toast.error('Щось пішло не так, спробуйте пізніше');
      }
    }

    if (action === 'create') {
      if (data.image === '' || typeof data.image === 'object') {
        toast.error('Завантажте фото');
      } else {
        try {
          await API.createProduct(data);
          toast.success('Товар успішно додано');
          reset();
        } catch (error) {
          console.error(error);
          toast.error('Щось пішло не так, спробуйте пізніше');
        }
      }
    }
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append('image', file, file.name);
      formData.append('name', file.name);
      setValue('image', file.name);
      formData.append('size', file.size);

      await API.uploadImage(formData, file);
      toast.success('Фотографія успішно завантажилася');
      setFile(null);
    } catch (error) {
      console.error(error);
      toast.error('Оберіть фотографію');
    }
  };

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
    <Form
      onSubmit={handleSubmit(onSubmit)}
      action={action}
      encType="multipart/form-data"
    >
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
          {categories.map(({ name, _id }) => {
            return (
              <option key={_id} value={_id}>
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
        <label htmlFor="price">Ціна (за 100г)</label>
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
        {errors.roastLevel && <Tip>Це поле поле обов'язкове </Tip>}
      </ItemWrapper>
      {action === 'create' && (
        <ItemWrapper>
          <label htmlFor="image">Зображення</label>

          <input
            type="file"
            name="image"
            accept="image/*"
            {...register('image')}
            onChange={onFileChange}
          />

          {errors.image && <Tip>Це поле обов'язкове </Tip>}
          <LoadBtn type="button" onClick={uploadImage}>
            Завантажити
          </LoadBtn>
        </ItemWrapper>
      )}

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
