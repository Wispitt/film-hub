import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Card } from '../Card';
import { Container } from './styles';

export const Slider = ({ info, title }) => {
  return (
    <Container>
      <h2> {title} </h2>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="my-swiper"
        grabCursor
      >
        {info.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
