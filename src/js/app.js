import * as flsFunctions from './modules/functions.js';
import Swiper from 'swiper/bundle';

flsFunctions.isWebp();

console.log('1');
const logoSwiper = new Swiper('.header__logo', {
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
