import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import VideoControls from './modules/video-controls';
import Accordion from './modules/accordion';
import popupControls from './modules/popup';
import mobileNav from './modules/mobile-nav';

// PopUp 
popupControls();

// Mobile nav
mobileNav();

// Promo swiper
const swiperThumb = new Swiper('.promo__swiper-thumbs', {
    spaceBetween: 35,
    slidesPerView: 3,
    watchSlidesProgress: true,
    loop: true,
});

const promoSlider = new Swiper('.promo__slider', {
    slidesPerView: 1,
    loop: true,
    speed: 900,
    parallax: true,
    navigation: {
        nextEl: '.promo__buttons-next',
        prevEl: '.promo__buttons-prew',
      },
      thumbs: {
        swiper: swiperThumb,
      },
})

// Latest slider
const latestSlider = new Swiper('.latest__slider', {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 7, // 1920 - 28px
  pagination: {
    el: '.latest__slider-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 10,
      grid: {rows: 1},
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 15,
      grid: {rows: 1},
    },
    1200: {
      spaceBetween: 28,
      slidesPerView: 4,
      grid: {rows: 1},
    }
  },
})


//---------Video-----------------------
const Video = new VideoControls('#video', '#video-btn', '.video__overlay', '.video__fullscreen');

// Rewiews slider 

const reviewsSlider = new Swiper('.reviews__slider', {
  spaceBetween: 30,
  slidesPerView: 1, 
  pagination: {
    el: '.reviews__slider-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2, 
    },
    992: {
      spaceBetween: 62,
      slidesPerView: 2,
    }
  }
})

// Accordion
new Accordion('.faq__accordion');
new Accordion('.footer__mobile-accordion');