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
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 40,
      },
    },
  };

  static bestSellersConfig: SwiperOptions = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  };
}
