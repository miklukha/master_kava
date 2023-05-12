import { useForm } from 'react-hook-form';
import {
  Btn,
  BtnsWrapper,
  Form,
  Tip,
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
            color="auxillary"
          />
          {errors.name && <Tip>Це поле обов'язкове</Tip>}
        </ItemWrapper>
        <ItemWrapper>
          <label htmlFor="email">Пошта*</label>
          <input
            {...register('email', {
              required: "Це поле обов'язкове",
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            id="email"
            color="auxillary"
          />
          {errors.email && (
            <Tip>
              Некоректний формат електронної пошти або це поле обов'язкове{' '}
            </Tip>
          )}
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
            color="auxillary"
          />
          {errors.password && (
            <Tip>
              Пароль має бути мінімум 8 символів або це поле обов'язкове
            </Tip>
          )}
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
            color="auxillary"
          />
          {errors?.repeatPassword ? (
            errors?.repeatPassword?.type === 'required' ? (
              <Tip>Це поле обов'язкове</Tip>
            ) : (
              <Tip>Паролі не співпадають</Tip>
            )
          ) : (
            ''
          )}
        </ItemWrapper>
        <BtnsWrapper>
          <Btn type="submit">Підтвердити</Btn>
        </BtnsWrapper>
      </Form>
    </Wrapper>
  );
}
