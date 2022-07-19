import { SwiperOptions } from 'swiper';
export class ConstantsClass {
  static webHeight = '90vh';
  static imgWidth = '100%';
  static imgHeight = '100%';
  static config: SwiperOptions = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
  };

  static newArrivalsconfig: SwiperOptions = {
    spaceBetween: 50,
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    // pagination : true,
    navigation: true,
  };
}
