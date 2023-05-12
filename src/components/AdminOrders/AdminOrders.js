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
  THead,
} from './AdminOrders.styled';
import { useEffect, useState, Fragment } from 'react';
import * as API from 'services/api';
import toast from 'react-hot-toast';
import { UilEye } from '@iconscout/react-unicons';

export function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [clickedOrder, setClickedOrder] = useState(false);

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
        console.log(orders);
        setOrders(orders);
      } catch (error) {
        console.log(error);
        toast.error('Щось пішло не так, спробуйте пізніше');
      }
    })();
  }, []);

  return (
    <Wrapper>
      <List>
        {orders &&
          orders.map(
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
                        <THead>Контакти</THead>
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
                        <THead>Опис</THead>
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
                      <Table>
                        {products &&
                          products.map(
                            ({ name, grind, quantity, weight, price }, i) => (
                              <Fragment>
                                <THead>Товар {i + 1}</THead>
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
                                <br />
                              </Fragment>
                            )
                          )}
                      </Table>
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
