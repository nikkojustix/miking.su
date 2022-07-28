import * as flsFunctions from './modules/functions.js';
import Swiper from 'swiper/bundle';

flsFunctions.isWebp();

// get current year
document.querySelector('.current-year').innerHTML = new Date().getFullYear();

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

const sliderConfig = {
  speed: 500,
  spaceBetween: 30,
  slidesPerView: 4,
  slidesPerGroup: 4,
};

const productSwipers = [];

const cardsSwiper800 = new Swiper('.swiper-cards--800', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--800',
    prevEl: '.swiper-button-prev--800',
  },
  pagination: {
    el: '.swiper-pagination--800',
    clickable: true,
  },
});
productSwipers.push(cardsSwiper800);

const cardsSwiper1000 = new Swiper('.swiper-cards--1000', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--1000',
    prevEl: '.swiper-button-prev--1000',
  },
  pagination: {
    el: '.swiper-pagination--1000',
    clickable: true,
  },
});
productSwipers.push(cardsSwiper1000);

const cardsSwiper1500 = new Swiper('.swiper-cards--1500', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--1500',
    prevEl: '.swiper-button-prev--1500',
  },
  pagination: {
    el: '.swiper-pagination--1500',
    clickable: true,
  },
});
productSwipers.push(cardsSwiper1500);

const cardsSwiper3000 = new Swiper('.swiper-cards--3000', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--3000',
    prevEl: '.swiper-button-prev--3000',
  },
  pagination: {
    el: '.swiper-pagination--3000',
    clickable: true,
  },
});
productSwipers.push(cardsSwiper3000);

const cardsSwiper4000 = new Swiper('.swiper-cards--4000', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--4000',
    prevEl: '.swiper-button-prev--4000',
  },
  pagination: {
    el: '.swiper-pagination--4000',
    clickable: true,
  },
});
productSwipers.push(cardsSwiper4000);

const cardsSwiperReusable = new Swiper('.swiper-cards--reusable', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--reusable',
    prevEl: '.swiper-button-prev--reusable',
  },
  pagination: {
    el: '.swiper-pagination--reusable',
    clickable: true,
  },
});
productSwipers.push(cardsSwiperReusable);

const cardsSwiperCartriges = new Swiper('.swiper-cards--cartiges', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--cartiges',
    prevEl: '.swiper-button-prev--cartiges',
  },
  pagination: {
    el: '.swiper-pagination--cartiges',
    clickable: true,
  },
});
productSwipers.push(cardsSwiperCartriges);

const cardsSwiper12salt = new Swiper('.swiper-cards--12salt', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--12salt',
    prevEl: '.swiper-button-prev--12salt',
  },
  pagination: {
    el: '.swiper-pagination--12salt',
    clickable: true,
  },
});
productSwipers.push(cardsSwiper12salt);

const cardsSwiper20salt = new Swiper('.swiper-cards--20salt', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--20salt',
    prevEl: '.swiper-button-prev--20salt',
  },
  pagination: {
    el: '.swiper-pagination--20salt',
    clickable: true,
  },
});
productSwipers.push(cardsSwiper20salt);

flsFunctions.tabs('.tabs__nav-btn--one-off', '.one-off .tabs__content-item', 'btn--active');
flsFunctions.tabs('.tabs__nav-btn--liquids', '.liquids .tabs__content-item', 'btn--active');

const sectionSlider = document.querySelectorAll('.section__slider');

sectionSlider.forEach((slider, i) => {
  const cards = slider.querySelectorAll('.card');
  let ids = [];
  cards.forEach((card) => {
    const id = card.dataset.id;
    if (id && !ids.includes(id)) {
      ids.push(id);
    }
  });
  if (ids.length > 1) {
    const filter = createFilterNode(i, ids);
    slider.parentNode.insertBefore(filter, slider);
    flsFunctions.filter('.filter' + i, productSwipers[i]);
  }
});

function createFilterNode(index, ids) {
  const ul = document.createElement('ul');
  ul.classList.add('filter', 'filter' + index);
  for (let i = 0; i < ids.length + 1; i++) {
    const li = document.createElement('li');
    li.classList.add('filter__item');
    const btn = document.createElement('button');
    btn.classList.add('filter__btn', 'btn', 'btn--outline');
    if (i == 0) {
      btn.classList.add('filter__btn--active');
      btn.dataset.id = 'all';
      btn.innerText = 'все';
    } else {
      btn.dataset.id = ids[i - 1];
      btn.innerText = ids[i - 1];
    }
    li.appendChild(btn);
    ul.appendChild(li);
  }
  return ul;
}
