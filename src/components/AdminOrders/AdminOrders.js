import {
  Wrapper,
  List,
  Item,
  IconBtn,
  TitleList,
  TitleItem,
  WrapperDesc,
  Table,
  TD,
  SearchWrapper,
  THead,
  TH,
} from './AdminOrders.styled';
import { useEffect, useState, Fragment } from 'react';
import * as API from 'services/api';
import toast from 'react-hot-toast';
import { UilEye } from '@iconscout/react-unicons';
import { DebounceInput } from 'react-debounce-input';
import { Input } from 'components';

export function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [clickedOrder, setClickedOrder] = useState(false);
  const [search, setSearch] = useState('');

  const onSearchChange = e => {
    setSearch(e.target.value);
  };

  const filteredOrders = orders.filter(order => {
    const orderCode = order.code.toString();
    return orderCode.includes(search);
  });

  const transformDate = dateString => {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    const formattedTime = `${date.getHours()}:${
      date.getMinutes() < 10 ? '0' : ''
    }${date.getMinutes()}`;

    return `${formattedDate} ${formattedTime}`;
  };

  useEffect(() => {
    (async () => {
      try {
        const orders = await API.getOrders('/orders');
        setOrders(orders);
      } catch (error) {
        console.log(error);
        toast.error('Щось пішло не так, спробуйте пізніше');
      }
    })();
  }, []);

  return (
    <Wrapper>
      <SearchWrapper>
        <DebounceInput
          element={Input}
          debounceTimeout={300}
          onChange={onSearchChange}
          placeholder="Введіть назву"
        />
      </SearchWrapper>
      <List>
        {orders &&
          filteredOrders.map(
            ({
              _id,
              code,
              date,
              totalPrice,
              contacts: { firstName, lastName, phone },
              products,
              orderDesc: { address, city, deliveryType, department, payment },
            }) => {
              const dateTransformed = transformDate(date);

              return (
                <Fragment key={_id}>
                  <Item>
                    <TitleList>
                      <TitleItem>{code}</TitleItem>
                      <TitleItem>{totalPrice}грн</TitleItem>
                      <TitleItem>{dateTransformed}</TitleItem>
                    </TitleList>
                    <div>
                      <IconBtn
                        type="button"
                        onClick={() => setClickedOrder(_id)}
                      >
                        <UilEye />
                      </IconBtn>
                    </div>
                  </Item>
                  {clickedOrder === _id && (
                    <WrapperDesc>
                      <Table>
                        <THead>
                          <tr>
                            <TH>Контакти</TH>
                          </tr>
                        </THead>
                        <tbody>
                          <tr>
                            <TD>Ім'я: </TD>
                            <TD>{firstName}</TD>
                          </tr>
                          <tr>
                            <TD>Прізвище: </TD>
                            <TD>{lastName}</TD>
                          </tr>
                          <tr>
                            <TD>Телефон: </TD>
                            <TD>{phone}</TD>
                          </tr>
                        </tbody>
                      </Table>
                      <Table>
                        <THead>
                          <tr>
                            <TH>Опис</TH>
                          </tr>
                        </THead>
                        {/* <THead>Опис</THead> */}
                        <tbody>
                          <tr>
                            <TD>Оплата: </TD>
                            <TD>
                              {payment === 'receiving'
                                ? 'При отриманні'
                                : 'Оплачено '}
                            </TD>
                          </tr>
                          <tr>
                            <TD>Тип доставки: </TD>
                            <TD>
                              {(() => {
                                switch (deliveryType) {
                                  case 'novaPoshta':
                                    return 'Нова Пошта';
                                  case 'selfPickup':
                                    return 'Самовивіз';
                                  case 'courier':
                                    return "Кур'єром";
                                  default:
                                    return 'Помилка';
                                }
                              })()}
                            </TD>
                          </tr>
                          <tr>
                            <TD>Місто: </TD>
                            <TD>{city}</TD>
                          </tr>
                          <tr>
                            <TD>Відділення: </TD>
                            <TD>{department}</TD>
                          </tr>
                          <tr>
                            <TD>Адреса: </TD>
                            <TD>{address}</TD>
                          </tr>
                        </tbody>
                      </Table>
                      {products &&
                        products.map(
                          (
                            { name, grind, quantity, weight, price, _id },
                            i
                          ) => (
                            <Table key={_id}>
                              <THead>
                                <tr>
                                  <TH>Товар {i + 1}</TH>
                                </tr>
                              </THead>

                              <tbody>
                                <tr>
                                  <TD>Назва: </TD>
                                  <TD>{name}</TD>
                                </tr>
                                <tr>
                                  <TD>Кількість: </TD>
                                  <TD>{quantity}</TD>
                                </tr>
                                <tr>
                                  <TD>Помел: </TD>
                                  <TD>{grind}</TD>
                                </tr>
                                <tr>
                                  <TD>Вага: </TD>
                                  <TD>{weight}</TD>
                                </tr>
                                <tr>
                                  <TD>Ціна: </TD>
                                  <TD>{price}</TD>
                                </tr>
                              </tbody>
                            </Table>
                          )
                        )}
                    </WrapperDesc>
                  )}
                </Fragment>
              );
            }
          )}
      </List>
    </Wrapper>
  );
}
