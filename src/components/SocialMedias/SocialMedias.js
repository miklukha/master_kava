import { List, Item, Link } from './SocialMedias.styled';
import {
  UilTelegramAlt,
  UilPhoneAlt,
  UilEnvelopeAlt,
  UilInstagram,
} from '@iconscout/react-unicons';

export function SocialMedias() {
  return (
    <List>
      <Item>
        <Link href="/">
          <UilPhoneAlt />
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <UilEnvelopeAlt />
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <UilTelegramAlt />
        </Link>
      </Item>
      <Item>
        <Link href="/">
          <UilInstagram />
        </Link>
      </Item>
    </List>
  );
}
