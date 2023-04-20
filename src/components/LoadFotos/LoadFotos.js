import { useState } from 'react';
import { toast } from 'react-hot-toast';
import * as API from 'services/api';
import { Btn, Form, Wrapper } from './LoadFotos.styled';

export function LoadFotos() {
  const [file, setFile] = useState(null);

  const onBtnSubmit = async e => {
    e.preventDefault();

    if (!file) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', file, file.name);
      formData.append('name', file.name);
      formData.append('size', file.size);

      API.upload(formData, file);
      toast.success('Фотографія успішно завантажилася');
      setFile(null);
    } catch (error) {
      console.error(error);
      toast.error('Щось пішло не так, спробуйте пізніше');
    }
  };

  const onFileChange = e => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={onBtnSubmit} encType="multipart/form-data">
        <label htmlFor="image">
          <input
            type="file"
            id="image"
            accept="image/*"
            name="image"
            onChange={onFileChange}
          />
        </label>
        <Btn type="submit">Підтвердити</Btn>
      </Form>
    </Wrapper>
  );
}
