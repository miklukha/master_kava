// import { createTheme } from '@material-ui';
import { useForm, Controller } from 'react-hook-form';
import { Container, ProductOrder, Section, Title } from 'components';
import { Footer, Header } from 'layouts';
import {
  DeliveryDetails,
  DeliveryDetailsInput,
  DeliveryDetailsItem,
  DeliveryDetailsLabel,
  DeliveryDetailsList,
  DeliveryDetailsTitle,
  OrderDetailsBtn,
  OrderDetailsCondition,
  OrderDetailsItem,
  OrderDetailsLabel,
  OrderDetailsList,
  OrderDetailsTogether,
  OrderDetailsValue,
  OrderDetailsWrapper,
  DeliveryItem,
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
  MenuItem,
  Typography,
  InputLabel,
  Checkbox,
  FormGroup,
  // TextField,
  // FormControl,
} from '@mui/material';
import { colors } from 'styles/utils/variables';
import liqpay from 'assets/images/liqpay.png';
// import { FilterDropdown } from 'components';
// import { typesOptions } from 'helpers';

const theme = createTheme({
  palette: {
    myColor: {
      main: colors.accent,
    },
  },
});

export function PlacingOrder() {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Section>
          <Container>
            <Title>ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</Title>
            <OrderDetailsWrapper>
              <ul>
                <ProductOrder placing />
              </ul>
              <OrderDetailsTogether>Разом</OrderDetailsTogether>
              <OrderDetailsList>
                <OrderDetailsItem>
                  <OrderDetailsLabel>Сума за товари:</OrderDetailsLabel>
                  <OrderDetailsValue>655 грн</OrderDetailsValue>
                </OrderDetailsItem>
                <OrderDetailsItem>
                  <OrderDetailsLabel>Вартість доставки:</OrderDetailsLabel>
                  <OrderDetailsValue>
                    за тарифами служби доставки*
                  </OrderDetailsValue>
                </OrderDetailsItem>
                <OrderDetailsItem>
                  <OrderDetailsLabel>До сплати:</OrderDetailsLabel>
                  <OrderDetailsValue>655 грн</OrderDetailsValue>
                </OrderDetailsItem>
              </OrderDetailsList>
            </OrderDetailsWrapper>
            <FormGroup>
              <DeliveryDetails onSubmit={handleSubmit(onSubmit)}>
                <DeliveryDetailsTitle>Контактні дані</DeliveryDetailsTitle>
                <DeliveryDetailsList>
                  <DeliveryDetailsItem>
                    {/* <FormControl>
                      <InputLabel htmlFor="lastName">
                        <Typography style={{ fontSize: '14px' }}>
                          Новою поштою
                        </Typography>
                      </InputLabel>
                      <TextField id="lastName" />
                    </FormControl> */}
                    <DeliveryDetailsLabel htmlFor="lastName">
                      Прізвище*
                    </DeliveryDetailsLabel>
                    <DeliveryDetailsInput
                      id="lastName"
                      {...register('lastName', { required: true })}
                    />
                  </DeliveryDetailsItem>
                  <DeliveryDetailsItem>
                    <DeliveryDetailsLabel htmlFor="firstName">
                      Ім’я*
                    </DeliveryDetailsLabel>
                    <DeliveryDetailsInput
                      id="firstName"
                      {...register('firstName', { required: true })}
                    />
                  </DeliveryDetailsItem>
                  <DeliveryDetailsItem>
                    <DeliveryDetailsLabel htmlFor="phone">
                      Мобільний телефон*
                    </DeliveryDetailsLabel>
                    <DeliveryDetailsInput
                      id="phone"
                      type="number"
                      {...register('phone', { required: true })}
                    />
                  </DeliveryDetailsItem>
                </DeliveryDetailsList>
                <DeliveryDetailsTitle>Доставка</DeliveryDetailsTitle>
                <Controller
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
                              // sx={{
                              //   border: '1px solid #E1DEE3',
                              //   margin: 0,
                              //   borderRadius: '4px',
                              // }}
                              value="NovaPoshta"
                              control={
                                <Radio
                                  color="myColor"
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
                              // label="Новою поштою"
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
                                  color="myColor"
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
                            )}
                          </DeliveryItem>
                          <DeliveryItem>
                            <FormControlLabel
                              value="selfPickup"
                              control={
                                <Radio
                                  color="myColor"
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
                />
                <DeliveryDetailsTitle>Оплата</DeliveryDetailsTitle>
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
                                  color="myColor"
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
                                  color="myColor"
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
                />
                <FormControlLabel
                  sx={{ marginBottom: '10px' }}
                  control={
                    <Checkbox
                      color="myColor"
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
              </DeliveryDetails>
            </FormGroup>
          </Container>
        </Section>
        <Footer />
      </ThemeProvider>
    </>
  );
}

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
