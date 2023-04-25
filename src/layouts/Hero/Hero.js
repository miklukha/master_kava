import {
  roasting,
  roastingMobile,
  technologies,
  technologiesMobile,
  types,
  typesMobile,
  variety,
  varietyMobile,
} from 'assets/images/hero';
import { NavigationStyles, Section } from 'components';
import MediaQuery from 'react-responsive';
import { breakpoints } from 'styles/utils/variables';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Img, Title } from './Hero.styled';

export function Hero() {
  return (
    <Section>
      <Title>MASTER KAVA - ЦЕ...</Title>
      <NavigationStyles>
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          wrapperTag="ul"
        >
          <SwiperSlide tag="li">
            <MediaQuery maxWidth={parseInt(breakpoints.preTablet)}>
              <Img src={typesMobile} alt="типи кави" />
            </MediaQuery>
            <MediaQuery minWidth={parseInt(breakpoints.tablet)}>
              <Img src={types} alt="типи кави" />
            </MediaQuery>
          </SwiperSlide>
          <SwiperSlide tag="li">
            <MediaQuery maxWidth={parseInt(breakpoints.preTablet)}>
              <Img src={technologiesMobile} alt="новітні технології кави" />
            </MediaQuery>
            <MediaQuery minWidth={parseInt(breakpoints.tablet)}>
              <Img src={technologies} alt="новітні технології кави" />
            </MediaQuery>
          </SwiperSlide>
          <SwiperSlide tag="li">
            <MediaQuery maxWidth={parseInt(breakpoints.preTablet)}>
              <Img src={roastingMobile} alt="обсмаження кави" />
            </MediaQuery>
            <MediaQuery minWidth={parseInt(breakpoints.tablet)}>
              <Img src={roasting} alt="обсмаження кави" />
            </MediaQuery>
          </SwiperSlide>
          <SwiperSlide tag="li">
            <MediaQuery maxWidth={parseInt(breakpoints.preTablet)}>
              <Img src={varietyMobile} alt="різноманітність кави" />
            </MediaQuery>
            <MediaQuery minWidth={parseInt(breakpoints.tablet)}>
              <Img src={variety} alt="різноманітність кави" />
            </MediaQuery>
          </SwiperSlide>
        </Swiper>
      </NavigationStyles>
    </Section>
  );
}
