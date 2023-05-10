import { Wrapper, List, Item } from './AdminUserInformation.styled';

export function AdminUserInformation({ user }) {
  const { name, email, shipping } = user;
  // const { name, email, shipping, orders } = user;

  return (
    <Wrapper>
      <List>
        <Item>Нікнейм: {name}</Item>
        <Item>Email: {email}</Item>
        <Item>Ім'я: {shipping?.firstName}</Item>
        <Item>Прізвище: {shipping?.lastName}</Item>
        <Item>Телефон: {shipping?.phone}</Item>
        {/* <Item>Orders: {orders}</Item> */}
      </List>
    </Wrapper>
  );
}
