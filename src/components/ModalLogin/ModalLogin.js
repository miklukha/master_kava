import { ThemeProvider, createTheme } from '@mui/material';
import { Button, CloseDeleteBtn, ModalTitle, ModalWrapper } from 'components';
import { InputForm, Label } from 'components';
import { useForm } from 'react-hook-form';
import { colors } from 'styles/utils/variables';
import { Form } from 'components/ModalRegistration/ModalRegistration.styled';

const theme = createTheme({
  palette: {
    auxillary: {
      main: colors.auxiliaryText,
    },
  },
});

export function ModalLogin({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    closeModal();
  };

  return (
    <ModalWrapper closeModal={closeModal}>
      <ThemeProvider theme={theme}>
        <ModalTitle>Логін</ModalTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CloseDeleteBtn handleClick={closeModal} />
          <Label htmlFor="email">Пошта*</Label>
          <InputForm
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
          <InputForm
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

          <Button type="submit">Зареєструватися</Button>
        </Form>
      </ThemeProvider>
    </ModalWrapper>
  );
}
