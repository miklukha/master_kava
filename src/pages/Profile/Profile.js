import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { createTheme, ThemeProvider } from '@mui/material';
import { ProductOrder, Title, Button } from 'components';
import {
  Input,
  OrderDate,
  OrderItem,
  OrderList,
  OrderTitle,
  OrderWrapper,
  ProductOrderList,
  ProductSummary,
  ProfileBtn,
  ProfileEmail,
  ProfileInformation,
  ProfileItem,
  ProfileList,
  ProfileMenu,
  ProfileName,
  SectionTitle,
  SectionWrapper,
  Wrapper,
  Label,
} from './Profile.styled';
import { UilUser } from '@iconscout/react-unicons';
import { colors } from 'styles/utils/variables';
import * as API from 'services/api';
import toast from 'react-hot-toast';
import { Loader } from 'components';

const theme = createTheme({
  palette: {
    myColor: {
      main: colors.auxiliaryText,
    },
  },
});

export function Profile() {
  const [selectedItem, setSelectedItem] = useState('contacts');
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onContactSubmit = async data => {
    try {
      await API.updateContactsUser(user._id, data);
      toast.success('інформація успішно оновлена');
    } catch (error) {
      console.log(error);
      toast.error('Щось пішло не так, спробуйте пізніше');
    }
  };

  const onPasswordSubmit = data => {
    console.log(data);
  };

  const phoneValidation = {
    pattern: {
      value: /^(\+38)?(0\d{9})$/,
      message: 'Невірний формат номера (+380961234567)',
    },
  };

  const handleClick = e => {
    setSelectedItem(e.target.value);
  };

  useEffect(() => {
    (async () => {
      try {
        const user = await API.getCurrentUser();
        setUser(user);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.log('User is not authorized');
        } else {
          console.log(error);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Title>ПРОФІЛЬ</Title>
      {user && (
        <Wrapper>
          <ProfileMenu>
            <ProfileInformation>
              <UilUser width="30px" height="30px" />
              <div>
                <ProfileName>{user.name}</ProfileName>
                <ProfileEmail>{user.email}</ProfileEmail>
              </div>
            </ProfileInformation>
            <ProfileList>
              <ProfileItem>
                <ProfileBtn
                  selected={selectedItem === 'contacts'}
                  type="button"
                  value="contacts"
                  aria-label="перейти на сторінку контактна інформація"
                  onClick={e => handleClick(e)}
                >
                  Контактна інформація
                </ProfileBtn>
              </ProfileItem>
              <ProfileItem>
                <ProfileBtn
                  selected={selectedItem === 'password'}
                  type="button"
                  value="password"
                  aria-label="перейти на сторінку зміни паролю"
                  onClick={e => handleClick(e)}
                >
                  Зміна паролю
                </ProfileBtn>
              </ProfileItem>
              <ProfileItem>
                <ProfileBtn
                  selected={selectedItem === 'history'}
                  type="button"
                  value="history"
                  aria-label="перейти на сторінку історія замовлень"
                  onClick={e => handleClick(e)}
                >
                  Історія замовлень
                </ProfileBtn>
              </ProfileItem>
            </ProfileList>
          </ProfileMenu>
          {selectedItem === 'contacts' && (
            <SectionWrapper>
              <SectionTitle>Контактна інформація</SectionTitle>
              <form onSubmit={handleSubmit(onContactSubmit)}>
                <Label htmlFor="lastName">Прізвище</Label>
                <Input
                  {...register('lastName')}
                  id="lastName"
                  error={!!errors?.lastName}
                  helperText={errors?.lastName?.message}
                  color="myColor"
                  defaultValue={user?.shipping?.lastName || ''}
                />
                <Label htmlFor="firstName">Ім'я</Label>
                <Input
                  {...register('firstName')}
                  id="firstName"
                  error={!!errors?.firstName}
                  helperText={errors?.firstName?.message}
                  color="myColor"
                  defaultValue={user?.shipping?.firstName || ''}
                />
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  {...register('phone', phoneValidation)}
                  id="phone"
                  error={!!errors?.phone}
                  helperText={errors?.phone?.message}
                  color="myColor"
                  defaultValue={user?.shipping?.phone || '+380'}
                />
                <Button type="submit">Відправити</Button>
              </form>
            </SectionWrapper>
          )}
          {selectedItem === 'history' && (
            <SectionWrapper>
              <SectionTitle>Ваші замовлення</SectionTitle>
              <OrderList>
                <OrderItem>
                  <OrderWrapper>
                    <OrderTitle>Замовлення № 342452-21</OrderTitle>
                    <OrderDate>06.05.2023</OrderDate>
                  </OrderWrapper>
                  <ProductOrderList>
                    <ProductOrder placing />
                    <ProductOrder placing />
                  </ProductOrderList>
                  <ProductSummary>Разом: 1310</ProductSummary>
                </OrderItem>
                <OrderItem>
                  <OrderWrapper>
                    <OrderTitle>Замовлення № 342452-21</OrderTitle>
                    <OrderDate>06.05.2023</OrderDate>
                  </OrderWrapper>
                  <ProductOrderList>
                    <ProductOrder placing />
                    <ProductOrder placing />
                  </ProductOrderList>
                  <ProductSummary>Разом: 1310</ProductSummary>
                </OrderItem>
              </OrderList>
            </SectionWrapper>
          )}
          {selectedItem === 'password' && (
            <SectionWrapper>
              <SectionTitle>Зміна паролю</SectionTitle>
              <form onSubmit={handleSubmit(onPasswordSubmit)}>
                <Label htmlFor="oldPassword">Старий пароль</Label>
                <Input
                  {...register('oldPassword')}
                  id="oldPassword"
                  error={!!errors?.oldPassword}
                  helperText={errors?.oldPassword?.message}
                  color="myColor"
                />
                <Label htmlFor="newPassword">Новий пароль</Label>
                <Input
                  {...register('newPassword')}
                  id="newPassword"
                  error={!!errors?.newPassword}
                  helperText={errors?.newPassword?.message}
                  color="myColor"
                />
                <Label htmlFor="passwordConfirmation">
                  Підтвердження нового паролю
                </Label>
                <Input
                  {...register('passwordConfirmation')}
                  id="passwordConfirmation"
                  error={!!errors?.passwordConfirmation}
                  helperText={errors?.passwordConfirmation?.message}
                  color="myColor"
                />
                <Button type="submit">Відправити</Button>
              </form>
            </SectionWrapper>
          )}
        </Wrapper>
      )}
    </ThemeProvider>
  );
}