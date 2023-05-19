import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import liqpay from 'assets/images/liqpay.png';
import { Loader, ModalConditions, OrderAside, Title } from 'components';
import { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as API from 'services/api';
import { colors } from 'styles/utils/variables';
import {
  ContactsInput,
  DeliveryItem,
  DetailsInput,
  DetailsItem,
  DetailsLabel,
  DetailsList,
  DetailsTitle,
  Notification,
  OrderDetailsBtn,
  OrderDetailsCondition,
  Wrapper,
} from './PlacingOrder.styled';

const theme = createTheme({
  palette: {
    accent: {
      main: colors.accent,
    },
    auxillary: {
      main: colors.auxiliaryText,
    },
  },
});

export function PlacingOrder() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
  const [deliveryType, setDeliveryType] = useState('novaPoshta');
  const [selectedCity, setSelectedCity] = useState('');
  const [department, setSelectedDepartment] = useState('');
  const [cities, setCities] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('receiving');
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  console.log(address);
  console.log(department);
  const isCartData = cartData.length !== 0 ? true : false;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      payment: 'receiving',
      deliveryType: 'novaPoshta',
      phone: '+380',
      totalPrice: 0,
    },
  });

  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      console.log(data);
      const combinedData = {
        contacts: {
          ...data,
          userId: user._id || null,
        },
        products: cartData,
        totalPrice: data.totalPrice,
      };

      const res = await API.createOrder(combinedData);

      //! clear local store
      if (data.payment === 'receiving') {
        toast.success('Дякуємо! Замовлення успішно створено');
        navigate('/', { replace: true });
      }

      if (data.payment === 'now') {
        toast.success('Дякуємо! Замовлення створено');
        console.log(res.data);
        navigate(
          '/liqpay',
          {
            state: { data: res.data, signature: res.signature },
          },
          { replace: true }
        );
      }
    } catch (error) {
      console.log(error);
      toast.error('Щось пішло не так, спробуйте, будь ласка, пізніше');
    }
  };

  const phoneValidation = {
    pattern: {
      value: /^(\+38)?(0\d{9})$/,
      message: 'Невірний формат номера (+380961234567)',
    },
  };

  const searchCity = async query => {
    try {
      const data = {
        name: query,
      };

      const cities = await API.getCities(data);
      console.log(cities);
      const validCities = cities.data.map(city => ({
        label: city.Description,
      }));
      setCities(validCities);
    } catch (error) {
      console.log(error);
      toast.error('Щось пішло не так, спробуйте, будь ласка, пізніше');
    }
  };

  const searchDepartments = async (city, query = '') => {
    // if (city) {
    try {
      const data = {
        query,
        city,
      };
      const departments = await API.getDepartments(data);
      const validDepartments = departments.data.map(department => ({
        label: department.Description,
      }));
      setDepartments(validDepartments);
    } catch (error) {
      console.log(error);
    }
    // }
  };

  useEffect(() => {
    (async () => {
      try {
        const user = await API.getCurrentUser();
        setUser(user);
        setValue('firstName', user?.shipping?.firstName || '');
        setValue('lastName', user?.shipping?.lastName || '');
        setValue('phone', user?.shipping?.phone || '+380');
        setValue('email', user?.email || '');
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
  }, [setValue]);

  const handleTotalPrice = totalPrice => {
    setValue('totalPrice', totalPrice);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Title>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</Title>
      {isCartData ? (
        <Wrapper>
          <OrderAside
            cartData={cartData}
            onTotalPriceCount={handleTotalPrice}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <DetailsTitle>Контактні дані</DetailsTitle>
            <DetailsList>
              <DetailsItem>
                <DetailsLabel htmlFor="lastName">Прізвище*</DetailsLabel>
                <ContactsInput
                  id="lastName"
                  {...register('lastName', { required: "Це поле обов'язкове" })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  color="auxillary"
                />
              </DetailsItem>
              <DetailsItem>
                <DetailsLabel htmlFor="firstName">Ім’я*</DetailsLabel>
                <ContactsInput
                  id="firstName"
                  {...register('firstName', {
                    required: "Це поле обов'язкове",
                  })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  color="auxillary"
                />
              </DetailsItem>
              <DetailsItem>
                <DetailsLabel htmlFor="phone">Мобільний телефон*</DetailsLabel>
                <ContactsInput
                  {...register('phone', {
                    required: "Це поле обов'язкове",
                    pattern: phoneValidation.pattern,
                    defaultValue: user?.shipping?.phone || '+380',
                  })}
                  id="phone"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  color="auxillary"
                />
              </DetailsItem>
              <DetailsItem>
                <DetailsLabel htmlFor="email">Електронна пошта</DetailsLabel>
                <ContactsInput
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
              </DetailsItem>
            </DetailsList>
            <DetailsTitle>Доставка</DetailsTitle>
            <Box marginBottom={2.5}>
              <RadioGroup
                id="delivery"
                value={deliveryType}
                onChange={e => {
                  setValue('deliveryType', e.target.value);
                  setDeliveryType(e.target.value);
                }}
                sx={{ rowGap: 1 }}
                defaultValue="novaPoshta"
                name="deliveryType"
              >
                <ul>
                  <DeliveryItem>
                    <FormControlLabel
                      value="novaPoshta"
                      control={
                        <Radio
                          color="accent"
                          size="small"
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 16,
                            },
                          }}
                        />
                      }
                      label={
                        <Typography style={{ fontSize: '14px' }}>
                          Новою поштою
                        </Typography>
                      }
                    />
                    {deliveryType === 'novaPoshta' && (
                      <>
                        <Box marginBottom={1}>
                          <DetailsLabel id="city">Місто*</DetailsLabel>
                          <Autocomplete
                            onChange={(_, newValue) => {
                              if (newValue) {
                                setSelectedCity(newValue.label);
                                searchDepartments(newValue.label);
                                setValue('city', newValue.label);
                              }
                            }}
                            fullWidth
                            color="auxillary"
                            sx={{ fontSize: 14 }}
                            id="city"
                            options={cities}
                            renderInput={params => (
                              <DebounceInput
                                {...register('city')}
                                required
                                element={DetailsInput}
                                debounceTimeout={300}
                                onChange={e => searchCity(e.target.value)}
                                {...params}
                                placeholder="Введіть місто"
                                color="auxillary"
                              />
                            )}
                          />
                        </Box>
                        <div>
                          <DetailsLabel id="department">
                            Відділення*
                          </DetailsLabel>
                          <Autocomplete
                            onChange={(_, newValue) => {
                              if (selectedCity) {
                                setSelectedDepartment(
                                  newValue ? newValue?.label : ''
                                );
                                setValue(
                                  'department',
                                  newValue ? newValue.label : ''
                                );
                              }
                            }}
                            fullWidth
                            color="auxillary"
                            sx={{ fontSize: 14 }}
                            id="department"
                            options={departments}
                            renderInput={params => (
                              <DebounceInput
                                {...register('department')}
                                required
                                element={DetailsInput}
                                debounceTimeout={200}
                                onChange={e =>
                                  searchDepartments(
                                    selectedCity,
                                    e.target.value
                                  )
                                }
                                {...params}
                                placeholder="Введіть відділення"
                                color="auxillary"
                              />
                            )}
                          />
                        </div>
                      </>
                    )}
                  </DeliveryItem>
                  <DeliveryItem>
                    <FormControlLabel
                      value="courier"
                      control={
                        <Radio
                          color="accent"
                          size="small"
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 16,
                            },
                          }}
                        />
                      }
                      label={
                        <Typography style={{ fontSize: '14px' }}>
                          Кур'єром (лише по Києву)
                        </Typography>
                      }
                    />
                    {deliveryType === 'courier' && (
                      <div>
                        <DetailsLabel
                          sx={{
                            fontSize: 12,
                            color: 'text.secondary',
                          }}
                          htmlFor="address"
                        >
                          Адреса*
                        </DetailsLabel>
                        <DetailsInput
                          id="address"
                          {...register('address', { required: true })}
                          onChange={e => {
                            setValue('address', e.target.value);
                            setAddress(e.target.value);
                          }}
                          placeholder="Введіть адресу"
                          fullWidth
                          color="auxillary"
                        ></DetailsInput>
                      </div>
                    )}
                  </DeliveryItem>
                  <DeliveryItem>
                    <FormControlLabel
                      value="selfPickup"
                      control={
                        <Radio
                          color="accent"
                          size="small"
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 16,
                            },
                          }}
                        />
                      }
                      label={
                        <Typography style={{ fontSize: '14px' }}>
                          Самовивіз (м. Київ, вул. Сім’ї Сосняних 11)
                        </Typography>
                      }
                    />
                  </DeliveryItem>
                </ul>
              </RadioGroup>
            </Box>
            <DetailsTitle>Оплата</DetailsTitle>
            <Box marginBottom={1.25}>
              <RadioGroup
                id="payment"
                value={payment}
                onChange={e => {
                  setValue('payment', e.target.value);
                  setPayment(e.target.value);
                }}
                sx={{ rowGap: 1 }}
                defaultValue="receiving"
                name="payment"
              >
                <ul>
                  <DeliveryItem>
                    <FormControlLabel
                      value="receiving"
                      control={
                        <Radio
                          color="accent"
                          size="small"
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 16,
                            },
                          }}
                        />
                      }
                      label={
                        <Typography style={{ fontSize: '14px' }}>
                          Оплата під час отримання товару
                        </Typography>
                      }
                    />
                  </DeliveryItem>
                  <DeliveryItem>
                    <FormControlLabel
                      value="now"
                      control={
                        <Radio
                          color="accent"
                          size="small"
                          sx={{
                            '& .MuiSvgIcon-root': {
                              fontSize: 16,
                            },
                          }}
                        />
                      }
                      label={
                        <>
                          <Typography
                            style={{
                              fontSize: '14px',
                              marginBottom: 3,
                            }}
                          >
                            Оплата зараз (Visa/Mastercard)
                          </Typography>
                          <img src={liqpay} alt="liqpay icon" />
                        </>
                      }
                    />
                  </DeliveryItem>
                </ul>
              </RadioGroup>
            </Box>
            <FormControlLabel
              sx={{ marginBottom: '10px' }}
              control={
                <Checkbox
                  required
                  color="accent"
                  size="small"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 16,
                    },
                  }}
                />
              }
              label={
                <>
                  <Typography variant="span" style={{ fontSize: 14 }}>
                    Я приймаю умови
                  </Typography>
                  <OrderDetailsCondition
                    type="button"
                    aria-label="відкрити публічний договір"
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                  >
                    публічного договору
                  </OrderDetailsCondition>
                </>
              }
            />
            <OrderDetailsBtn type="submit">
              Підтвердити замовлення
            </OrderDetailsBtn>
          </form>
        </Wrapper>
      ) : (
        <Notification>
          Для оформлення замовлення додаєте товари в кошик...
        </Notification>
      )}
      {isModalOpen && (
        <ModalConditions closeModal={() => setIsModalOpen(false)} />
      )}
    </ThemeProvider>
  );
}
