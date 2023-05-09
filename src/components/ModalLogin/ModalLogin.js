import { ThemeProvider, createTheme } from '@mui/material';
import { Button, CloseDeleteBtn, ModalTitle, ModalWrapper } from 'components';
import { InputForm, Label } from 'components';
import { useForm } from 'react-hook-form';
import { colors } from 'styles/utils/variables';
import { Form } from 'components/ModalRegistration/ModalRegistration.styled';
import * as API from 'services/api';
import toast from 'react-hot-toast';

const theme = createTheme({
  palette: {
    auxillary: {
      main: colors.auxiliaryText,
    },
  },
});

export function ModalLogin({ closeModal, onSetDropDown }) {
  const {
    register,
    handleSubmit,
    formState: { errors = {} },
  } = useForm();

  const onSubmit = async data => {
    try {
      const response = await API.login(data);
      const token = response.$set.token;
      localStorage.setItem('token', token);
      toast.success('Вхід пройшов успішно');
      closeModal();
      onSetDropDown(false);
    } catch (error) {
      const errorStatus = error.response.status;

      if (errorStatus === 401) {
        toast.error('Неправильні дані пошти або пароля');
      } else {
        toast.error('Щось пішло не так, спробуйте, будь ласка, пізніше');
        console.log(error);
      }
    }
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

          <Button type="submit">Вхід</Button>
        </Form>
      </ThemeProvider>
    </ModalWrapper>
  );
}
