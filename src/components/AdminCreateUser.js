import { useForm } from 'react-hook-form';
import {
  Btn,
  BtnsWrapper,
  Form,
  ItemWrapper,
} from 'components/AdminProductEdit/AdminProductEdit.styled';
import { Wrapper } from 'components/AdminProducts/AdminProducts.styled';
import * as API from 'services/api';
import toast from 'react-hot-toast';

export function AdminCreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = async data => {
    try {
      await API.createAdmin(data);
      reset();
      toast.success('Адмін успішно створений');
      console.log(data);
    } catch (error) {
      const errorStatus = error.response.status;

      if (errorStatus === 409) {
        toast.error('Такий користувач вже зареєстрований');
      } else {
        toast.error('Щось пішло не так, спробуйте, будь ласка, пізніше');
        console.log(error);
      }
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ItemWrapper>
          <label htmlFor="name">Ім'я*</label>
          <input
            {...register('name', {
              required: "Це поле обов'язкове",
            })}
            id="name"
            error={!!errors?.name}
            helperText={errors?.name?.message}
            color="auxillary"
          />
        </ItemWrapper>
        <ItemWrapper>
          <label htmlFor="email">Пошта*</label>
          <input
            {...register('email', {
              required: "Це поле обов'язкове",
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            id="email"
            error={!!errors?.email}
            helperText={
              errors?.email
                ? errors?.email?.type === 'required'
                  ? "Це поле обов'язкове"
                  : 'Некоректний формат електронної пошти'
                : ''
            }
            color="auxillary"
          />
        </ItemWrapper>
        <ItemWrapper>
          <label htmlFor="password">Пароль*</label>
          <input
            {...register('password', {
              required: "Це поле обов'язкове",
              minLength: 8,
            })}
            type="password"
            id="password"
            error={!!errors?.password}
            helperText={
              errors?.password
                ? errors?.email?.password === 'required'
                  ? "Це поле обов'язкове"
                  : 'Пароль має бути мінімум 8 символів'
                : ''
            }
            color="auxillary"
          />
        </ItemWrapper>
        <ItemWrapper>
          <label htmlFor="repeatPassword">Повторення паролю*</label>
          <input
            {...register('repeatPassword', {
              required: "Це поле обов'язкове",
              validate: value => value === watch('password'),
            })}
            id="repeatPassword"
            type="password"
            error={!!errors?.repeatPassword}
            helperText={
              errors?.repeatPassword
                ? errors?.repeatPassword?.type === 'required'
                  ? "Це поле обов'язкове"
                  : 'Паролі не співпадають'
                : ''
            }
            color="auxillary"
          />
        </ItemWrapper>
        <BtnsWrapper>
          <Btn type="submit">Підтвердити</Btn>
        </BtnsWrapper>
      </Form>
    </Wrapper>
  );
}
