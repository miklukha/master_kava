import { ThemeProvider, createTheme } from '@mui/material';
import { Button, CloseDeleteBtn, ModalTitle, ModalWrapper } from 'components';
import { InputForm, Label } from 'components';
import { useForm } from 'react-hook-form';
import { colors } from 'styles/utils/variables';
import { Form } from './ModalRegistration.styled';
import * as API from 'services/authApi';
import { toast } from 'react-hot-toast';

const theme = createTheme({
  palette: {
    auxillary: {
      main: colors.auxiliaryText,
    },
  },
});

export function ModalRegistration({ closeModal, onLoginOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors = {} },
    watch,
  } = useForm();

  const onSubmit = async data => {
    try {
      await API.register(data);
      toast.success('Реєстрація пройшла успішно');
      closeModal();
      onLoginOpen();
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
    <>
      <ModalWrapper closeModal={closeModal}>
        <ThemeProvider theme={theme}>
          <ModalTitle>Реєстрація</ModalTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <CloseDeleteBtn handleClick={closeModal} />
            <Label htmlFor="name">Ім'я*</Label>
            <InputForm
              {...register('name', {
                required: "Це поле обов'язкове",
              })}
              id="name"
              error={!!errors?.name}
              helperText={errors?.name?.message}
              color="auxillary"
            />
            <Label htmlFor="email">Пошта*</Label>
            <InputForm
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
            <Label htmlFor="password">Пароль*</Label>
            <InputForm
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
            <Label htmlFor="repeatPassword">Підтвердження паролю*</Label>
            <InputForm
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
            <Button type="submit">Зареєструватися</Button>
          </Form>
        </ThemeProvider>
      </ModalWrapper>
    </>
  );
}
