import { Img, Title } from './Hero.styled';
import { Container, Section } from 'components';
import hero from 'assets/images/hero.jpg';

export function Hero() {
  return (
    <Section>
      <Container>
        <Title>MASTER KAVA - ЦЕ...</Title>
        <Img src={hero} alt="hero" />
      </Container>
    </Section>
  );
}
