import { Container, Nav, SocialMedias, Feedback } from 'components';
import logoText from 'assets/images/logoText.png';
import {
  Img,
  FooterStyled,
  FooterMain,
  FooterCopyright,
  Copyright,
  Address,
  Wrapper,
} from './Footer.styled';
import { useState } from 'react';

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onBtnClick = () => {
    console.log('open feedback form ');
    setIsModalOpen(!isModalOpen);
  };

  return (
    <FooterStyled>
      <Container>
        <FooterMain>
          <Wrapper>
            <Img src={logoText} alt="logo" />
            <Address href="/">м. Київ, вул. Сім'ї Сосняних 11</Address>
          </Wrapper>
          <Nav layout="footer" />
          <div>
            <SocialMedias />
            <Feedback type="button" onClick={onBtnClick}>
              Зворотній зв'язок
            </Feedback>
          </div>
        </FooterMain>
        <FooterCopyright>
          <Copyright>© 2023 Master Kava - Всі права захищені</Copyright>
        </FooterCopyright>
      </Container>
    </FooterStyled>
  );
}
