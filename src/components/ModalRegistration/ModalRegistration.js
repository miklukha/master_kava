import { ThemeProvider, createTheme } from '@mui/material';
import { Button, CloseDeleteBtn, ModalTitle, ModalWrapper } from 'components';
import { Input, Label } from 'pages/Profile/Profile.styled';
import { useForm } from 'react-hook-form';
import { colors } from 'styles/utils/variables';
import { Form } from './ModalRegistration.styled';

const theme = createTheme({
  palette: {
    auxillary: {
      main: colors.auxiliaryText,
    },
  },
});

export function ModalRegistration({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    closeModal();
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <ThemeProvider theme={theme}>
        <ModalTitle>Реєстрація</ModalTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CloseDeleteBtn handleClick={closeModal} />
          <Label htmlFor="name">Ім'я*</Label>
          <Input
            {...register('name', {
              required: "Це поле обов'язкове",
            })}
            id="name"
            error={!!errors.name}
            helperText={errors.name?.message}
            color="auxillary"
          />
          <Label htmlFor="email">Пошта*</Label>
          <Input
            {...register('email', {
              required: "Це поле обов'язкове",
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            id="email"
            error={!!errors.email}
            helperText={
              errors.email
                ? errors.email.type === 'required'
                  ? "Це поле обов'язкове"
                  : 'Некоректний формат електронної пошти'
                : ''
            }
            color="auxillary"
          />
          <Label htmlFor="password">Пароль*</Label>
          <Input
            {...register('password', {
              required: "Це поле обов'язкове",
              minLength: 8,
            })}
            id="password"
            error={!!errors.password}
            helperText={
              errors.password
                ? errors.email.password === 'required'
                  ? "Це поле обов'язкове"
                  : 'Пароль має бути мінімум 8 символів'
                : ''
            }
            color="auxillary"
          />
          <Label htmlFor="repeatPassword">Підтвердження паролю*</Label>
          <Input
            {...register('repeatPassword', {
              required: "Це поле обов'язкове",
              validate: value => value === watch('password'),
            })}
            id="repeatPassword"
            error={!!errors.repeatPassword}
            helperText={
              errors.repeatPassword
                ? errors.repeatPassword.type === 'required'
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
  );
}
