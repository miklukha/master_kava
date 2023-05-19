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
        <Link href="tel:+380671429022">
          <UilPhoneAlt />
        </Link>
      </Item>
      <Item>
        <Link href="mailto:master_kava@gmail.com">
          <UilEnvelopeAlt />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://t.me/masterkava"
          target="_blank"
          rel="noreferrer noopener"
        >
          <UilTelegramAlt />
        </Link>
      </Item>
      <Item>
        <Link
          href="https://instagram.com/master_kava?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer noopener"
        >
          <UilInstagram />
        </Link>
      </Item>
    </List>
  );
}
