import { Wrapper, TD, Table } from './AdminUserInformation.styled';

export function AdminUserInformation({ user }) {
  const { name, email, shipping } = user;
  // const { name, email, shipping, orders } = user;

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
    </Wrapper>
  );
}
