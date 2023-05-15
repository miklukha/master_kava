import { Wrapper, TD, Table, THead, TH } from './AdminUserInformation.styled';

export function AdminUserInformation({ user }) {
  const { name, email, shipping, orders } = user;
  // const {products = []}
  // console.log(user.orders.products);

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

  return (
    <Wrapper>
      <Table>
        <tbody>
          <tr>
            <TD>Нікнейм: </TD>
            <TD>{name}</TD>
          </tr>
          <tr>
            <TD>Email: </TD>
            <TD>{email}</TD>
          </tr>
          <tr>
            <TD>Ім'я: </TD>
            <TD>{shipping?.firstName}</TD>
          </tr>
          <tr>
            <TD>Прізвище: </TD>
            <TD>{shipping?.lastName}</TD>
          </tr>
          <tr>
            <TD>Телефон: </TD>
            <TD>{shipping?.phone}</TD>
          </tr>
        </tbody>
      </Table>
      {orders &&
        orders.map(({ code, totalPrice, date, _id }, i) => {
          const dateTransformed = transformDate(date);

          return (
            <Table key={_id}>
              <THead>
                <tr>
                  <TH>Товар {i + 1}</TH>
                </tr>
              </THead>

              <tbody>
                <tr>
                  <TD>Код замовлення: </TD>
                  <TD>{code}</TD>
                </tr>
                <tr>
                  <TD>Ціна: </TD>
                  <TD>{totalPrice}</TD>
                </tr>
                <tr>
                  <TD>Дата: </TD>
                  <TD>{dateTransformed}</TD>
                </tr>
              </tbody>
            </Table>
          );
        })}
    </Wrapper>
  );
}
