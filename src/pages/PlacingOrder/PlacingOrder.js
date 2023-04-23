import { useForm } from 'react-hook-form';
import { OrderAside, Title } from 'components';
import {
  DetailsInput,
  DetailsItem,
  DetailsLabel,
  DetailsList,
  DetailsTitle,
  OrderDetailsBtn,
  OrderDetailsCondition,
  DeliveryItem,
  Wrapper,
  // Notification,
  // Tip,
  // SelectOption,
  // Option,
  // AddressInput,
} from './PlacingOrder.styled';
// import { CheckboxLabel } from 'components/ShopFilter/ShopFilter.styled';
// import { visuallyHidden } from 'styles/utils/visuallyHidden';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  createTheme,
  ThemeProvider,
  Box,
  Select,
  // MenuItem,
  Typography,
  // InputLabel,
  Checkbox,
  // FormGroup,
  // TextField,
} from '@mui/material';
import { colors } from 'styles/utils/variables';
// import liqpay from 'assets/images/liqpay.png';
import { useState, useEffect } from 'react';
// import * as API from 'services/deliveryApi';
// import { FilterDropdown } from 'components';
// import { typesOptions } from 'helpers';

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
  // const [cartData, setCartData] = useState(
  //   JSON.parse(localStorage.getItem('cartData')) || []
  // );
  const [deliveryType, setDeliveryType] = useState('novaPoshta');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  // const [cities, setCities] = useState([]);
  // const [addresses, setAddresses] = useState([]);
  // const [options, setOptions] = useState([
  //   { label: 'Kyiv', value: 'Kyiv' },
  //   { label: 'Odesa', value: 'Odesa' },
  //   { label: 'Option 3', value: 'option3' },
  // ]);

  // const isCartData = cartData.length !== 0 ? true : false;

  const {
    register,
    handleSubmit,
    formState: { errors },
    // control,
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const phoneValidation = {
    pattern: {
      value: /^(\+38)?(0\d{9})$/,
      message: 'Невірний формат номера (+380961234567)',
    },
  };

  useEffect(() => {
    (async function getProducts() {
      try {
        // const cities = await API.getCities();
        // setCities(cities.data);
        // console.log(cities.data);
        // const address = await API.getAddress(selectedCity);
        // console.log(selectedCity);
        // console.log(address);
        // setAddresses(address);
      } catch (error) {
        //  toast.error('Щось пішло не так :(( Спробуйте, будь ласка, пізніше!');
        //  navigate('/', { replace: true });
        console.log(error);
      }
    })();
    // const products = getProducts();
    // setProducts(products);
  }, []);

  // const city = watch('city');

  return (
    <ThemeProvider theme={theme}>
      <Title>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</Title>
      {/* {isCartData ? ( */}
      <Wrapper>
        {/* <OrderAside cartData={cartData} />
         */}
        <OrderAside />

        <form onSubmit={handleSubmit(onSubmit)}>
          <DetailsTitle>Контактні дані</DetailsTitle>
          <DetailsList>
            <DetailsItem>
              <DetailsLabel htmlFor="lastName">Прізвище*</DetailsLabel>
              <DetailsInput
                id="lastName"
                {...register('lastName', { required: "Це поле обов'язкове" })}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                color="accent"
              />
            </DetailsItem>
            <DetailsItem>
              <DetailsLabel htmlFor="firstName">Ім’я*</DetailsLabel>
              <DetailsInput
                id="firstName"
                {...register('firstName', {
                  required: "Це поле обов'язкове",
                })}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </DetailsItem>
            <DetailsItem>
              <DetailsLabel htmlFor="phone">Мобільний телефон*</DetailsLabel>
              <DetailsInput
                {...register('phone', {
                  required: "Це поле обов'язкове",
                  pattern: phoneValidation.pattern,
                })}
                id="phone"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                color="accent"
                defaultValue="+380"
              />
            </DetailsItem>
          </DetailsList>
          <DetailsTitle>Доставка</DetailsTitle>
          {/* <Controller
              name="delivery"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Box marginBottom={2.5}>
                  <RadioGroup
                    value={field.value}
                    onChange={e => field.onChange(e.target.value)}
                    sx={{ rowGap: 1 }}
                  >
                    <ul>
                      <DeliveryItem>
                        <FormControlLabel
                          value="NovaPoshta"
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
                        {field.value === 'NovaPoshta' && (
                          <>
                            <Box marginBottom={1}>
                              <Controller
                                name="city"
                                control={control}
                                defaultValue=""
                                rules={{ required: true }}
                                render={({ field }) => (
                                  <>
                                    <InputLabel
                                      id="city-label"
                                      sx={{
                                        fontSize: 12,
                                        color: colors.auxiliaryText,
                                      }}
                                    >
                                      Місто
                                    </InputLabel>
                                    <Select
                                      sx={{
                                        height: 40,
                                        fontSize: 14,
                                        color: 'inherit',
                                      }}
                                      labelId="city-label"
                                      {...field}
                                      // label="Місто"
                                      fullWidth
                                      // margin="normal"
                                      // variant="outlined"
                                    >
                                      <MenuItem value="option1">
                                        Option 1
                                      </MenuItem>
                                      <MenuItem value="option2">
                                        Option 2
                                      </MenuItem>
                                      <MenuItem value="option3">
                                        Option 3
                                      </MenuItem>
                                    </Select>
                                  </>
                                )}
                              />
                            </Box>
                            <Controller
                              name="department"
                              control={control}
                              defaultValue=""
                              rules={{ required: true }}
                              render={({ field }) => (
                                <div>
                                  <InputLabel
                                    id="department-label"
                                    sx={{
                                      fontSize: 12,
                                      color: colors.auxiliaryText,
                                    }}
                                  >
                                    Відділення
                                  </InputLabel>
                                  <Select
                                    sx={{
                                      height: 40,
                                      fontSize: 14,
                                      color: 'inherit',
                                      // '&:hover fieldset': {
                                      //   borderColor: 'green',
                                      // },
                                    }}
                                    labelId="department-label"
                                    {...field}
                                    // label="Відділення"

                                    fullWidth
                                    // variant="outlined"
                                  >
                                    <MenuItem value="option1">
                                      Option 1
                                    </MenuItem>
                                    <MenuItem value="option2">
                                      Option 2
                                    </MenuItem>
                                    <MenuItem value="option3">
                                      Option 3
                                    </MenuItem>
                                  </Select>
                                </div>
                              )}
                            />
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
                          // label="Кур'єром (лише по Києву)"
                        />
                        {field.value === 'courier' && (
                          <Controller
                            name="address"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                              <div>
                                <InputLabel
                                  sx={{
                                    fontSize: 12,
                                    color: colors.auxiliaryText,
                                  }}
                                  id="address-label"
                                >
                                  Адреса
                                </InputLabel>

                                <Select
                                  sx={{
                                    height: 40,
                                    fontSize: 14,
                                    color: 'inherit',
                                    // '&:hover fieldset': {
                                    //   borderColor: 'green',
                                    // },
                                  }}
                                  {...field}
                                  labelId="address-label"
                                  fullWidth
                                  // variant="outlined"
                                >
                                  <MenuItem value="option1">Option 1</MenuItem>
                                  <MenuItem value="option2">Option 2</MenuItem>
                                  <MenuItem value="option3">Option 3</MenuItem>
                                </Select>
                              </div>
                            )}
                          />
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

                          // label="Самовивіз (м. Київ, вул. Сім’ї Сосняних 11)"
                        />
                      </DeliveryItem>
                    </ul>
                  </RadioGroup>
                </Box>
              )}
            /> */}
          <Box marginBottom={2.5}>
            <RadioGroup
              id="delivery"
              value={deliveryType}
              onChange={e => setDeliveryType(e.target.value)}
              sx={{ rowGap: 1 }}
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
                        <Select
                          {...register('city', { required: true })}
                          value={selectedCity}
                          onChange={e => setSelectedCity(e.target.value)}
                          fullWidth
                          color="auxillary"
                          sx={{ fontSize: 14 }}
                          // getOptionLabel={option => option.label}
                          // renderInput={params => (
                          //   <TextField
                          //     {...params}
                          //     fullWidth
                          //     color="auxillary"
                          //   />
                          // )}
                        >
                          {/* {cities.map(city => (
                            <Option key={city.CityID} value={city.Description}>
                              {city.Description}
                            </Option>
                          ))} */}
                        </Select>
                      </Box>
                      <div>
                        <DetailsLabel id="department">Відділення*</DetailsLabel>
                        <Select
                          labelId="department"
                          {...register('department', { required: true })}
                          value={selectedDepartment}
                          onChange={e => setSelectedDepartment(e.target.value)}
                          fullWidth
                          color="auxillary"
                        >
                          {/* {addresses.map(address => (
                              <Option
                                key={city.CityID}
                                value={city.Description}
                              >
                                {city.Description}
                              </Option>
                            ))} */}
                          {/* <Option value="option1">Option 1</Option>
                            <Option value="option2">Option 2</Option>
                            <Option value="option3">Option 3</Option> */}
                        </Select>
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
                      {/* <AddressInput
                          id="address"
                          {...register('address', { required: true })}
                          onChange={e => setAddress(e.target.value)}
                          fullWidth
                          color="auxillary"
                        ></AddressInput> */}
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
          {/* <DetailsTitle>Оплата</DetailsTitle>
            <Controller
              name="payment"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <Box marginBottom={1.25}>
                  <RadioGroup
                    value={field.value}
                    onChange={e => field.onChange(e.target.value)}
                    sx={{ rowGap: 1 }}
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
              )}
            /> */}
          <FormControlLabel
            sx={{ marginBottom: '10px' }}
            control={
              <Checkbox
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
                    console.log('open modal');
                  }}
                >
                  публічного договору
                </OrderDetailsCondition>
              </>
            }
          />

          {/* <input
                className={visuallyHidden}
                type="checkbox"
                id="conditions"
              />
              <CheckboxLabel htmlFor="conditions">
                Я приймаю умови
                <OrderDetailsCondition
                  type="button"
                  aria-label="відкрити публічний договір"
                  onClick={() => {
                    console.log('open modal');
                  }}
                >
                  публічного договору
                </OrderDetailsCondition>
              </CheckboxLabel> */}
          <OrderDetailsBtn type="submit">
            Підтвердити замовлення
          </OrderDetailsBtn>
        </form>
      </Wrapper>
      {/* ) : (
      <Notification>
        Для оформлення замовлення додаєте товари в кошик...
      </Notification>
      )} */}
    </ThemeProvider>
  );
}

//! реалізувати модалку публічного договору
/**
 * <input
                        {...register("sun")}
                        type="radio"
                        name="weather"
                        value="sun"
                        id="field-sun"
                    />

 * <OrderDetailsTip>
              *вартість доставки окремо оплачується при отриманні посилки у
              відділенні
            </OrderDetailsTip>
 */

/**
             * <DetailsList>
              <DetailsItem>
                <DetailsLabel htmlFor="lastName">Прізвище*</DetailsLabel>
                <DetailsInput
                  id="lastName"
                  {...register('lastName', { required: "Це поле обов'язкове" })}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  color="accent"
                />
              </DetailsItem>
              <DetailsItem>
                <DetailsLabel htmlFor="firstName">Ім’я*</DetailsLabel>
                <DetailsInput
                  id="firstName"
                  {...register('firstName', {
                    required: "Це поле обов'язкове",
                  })}
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                />
              </DetailsItem>
              <DetailsItem>
                <DetailsLabel htmlFor="phone">Мобільний телефон*</DetailsLabel>
                <DetailsInput
                  {...register('phone', {
                    required: "Це поле обов'язкове",
                    pattern: phoneValidation.pattern,
                  })}
                  id="phone"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  color="accent"
                  defaultValue="+380"
                />
              </DetailsItem>
            </DetailsList>
             */
