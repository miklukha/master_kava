import { ContactsWrapper, ContactsItem } from './Contacts.styled';

export function Contacts() {
  return (
    <ContactsWrapper>
      <ContactsItem>
        <a href="tel:+380671429022">+380671429022</a>
      </ContactsItem>
      <ContactsItem>
        <a href="mailto:master_kava@gmail.com">master_kava@gmail.com</a>
      </ContactsItem>
    </ContactsWrapper>
  );
}
