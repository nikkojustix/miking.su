import * as flsFunctions from './modules/functions.js';
import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper';

flsFunctions.isWebp();

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

const menuDropdown = document.querySelector('.menu__link--dropdown');
const menuSubmenu = document.querySelector('.menu__submenu');

document.addEventListener('click', (e) => {
  if (e.target !== menuDropdown) {
    menuSubmenu.classList.remove('menu__submenu--opened');
  } else {
    e.preventDefault();
    menuSubmenu.classList.toggle('menu__submenu--opened');
  }
});
document.addEventListener('keyup', (e) => {
  if (e.keyCode === 27) {
    menuSubmenu.classList.remove('menu__submenu--opened');
  }
});

const headerSwiper = new Swiper('.swiper-header', {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    waitForTransition: false,
  },
  navigation: {
    nextEl: '.swiper-button-next--header',
    prevEl: '.swiper-button-prev--header',
  },
});

const cardsSwiper800 = new Swiper('.swiper-cards--800', {
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next--800',
    prevEl: '.swiper-button-prev--800',
  },
  pagination: {
    el: '.swiper-pagination--800',
    clickable: true,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});

const cardsSwiper1000 = new Swiper('.swiper-cards--1000', {
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next--1000',
    prevEl: '.swiper-button-prev--1000',
  },
  pagination: {
    el: '.swiper-pagination--1000',
    clickable: true,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
});
const cardsSwiper1500 = new Swiper('.swiper-cards--1500', {
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next--1500',
    prevEl: '.swiper-button-prev--1500',
  },
  pagination: {
    el: '.swiper-pagination--1500',
    clickable: true,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
});
const cardsSwiper3000 = new Swiper('.swiper-cards--3000', {
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next--3000',
    prevEl: '.swiper-button-prev--3000',
  },
  pagination: {
    el: '.swiper-pagination--3000',
    clickable: true,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
});
const cardsSwiper4000 = new Swiper('.swiper-cards--4000', {
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next--4000',
    prevEl: '.swiper-button-prev--4000',
  },
  pagination: {
    el: '.swiper-pagination--4000',
    clickable: true,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
});
const cardsSwiperReusable = new Swiper('.swiper-cards--reusable', {
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next--reusable',
    prevEl: '.swiper-button-prev--reusable',
  },
  pagination: {
    el: '.swiper-pagination--reusable',
    clickable: true,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
});
const cardsSwiperCartriges = new Swiper('.swiper-cards--cartiges', {
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next--cartiges',
    prevEl: '.swiper-button-prev--cartiges',
  },
  pagination: {
    el: '.swiper-pagination--cartiges',
    clickable: true,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
});
const cardsSwiper12salt = new Swiper('.swiper-cards--12salt', {
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next--12salt',
    prevEl: '.swiper-button-prev--12salt',
  },
  pagination: {
    el: '.swiper-pagination--12salt',
    clickable: true,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
});
const cardsSwiper20salt = new Swiper('.swiper-cards--20salt', {
  loop: true,
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next--20salt',
    prevEl: '.swiper-button-prev--20salt',
  },
  pagination: {
    el: '.swiper-pagination--20salt',
    clickable: true,
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
});

flsFunctions.tabs('.tabs__nav-btn--one-off', '.tabs__content-item', 'tabs__nav-btn--active');
flsFunctions.tabs('.tabs__nav-btn--liquids', '.tabs__content-item', 'tabs__nav-btn--active');

// cardsSwiper800.updateSlides();
flsFunctions.filter(cardsSwiper800);
