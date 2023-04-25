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

export function ModalFeedback({ closeModal }) {
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
        <ModalTitle>Форма зворотнього зв'язку</ModalTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CloseDeleteBtn handleClick={closeModal} />
          <Label htmlFor="name">Ім'я</Label>
          <InputForm
            {...register('name', {
              required: "Це поле обов'язкове",
            })}
            id="name"
            error={!!errors.name}
            helperText={errors.name?.message}
            color="auxillary"
          />
          <Label htmlFor="email">Пошта (для зв'язку)</Label>
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
          <Label htmlFor="message">Повідомлення</Label>
          <InputForm
            {...register('message', {
              required: "Це поле обов'язкове",
            })}
            multiline
            rows={4}
            id="message"
            error={!!errors.message}
            helperText={errors.message?.message}
            color="auxillary"
          />

          <Button type="submit">Відправити</Button>
        </Form>
      </ThemeProvider>
    </ModalWrapper>
  );
}
