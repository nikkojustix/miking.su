import * as flsFunctions from './modules/functions.js';
import Swiper from 'swiper/bundle';
import IMask from 'imask';

flsFunctions.isWebp();

document.addEventListener('DOMContentLoaded', () => {
  const agreement = document.querySelector('#agreement');
  agreement.style.display = 'flex';
  document.body.classList.add('locked');
  const btnYes = document.querySelector('.modal__btn--yes');
  const btnNo = document.querySelector('.modal__btn--no');
  btnYes.addEventListener('click', (e) => {
    e.preventDefault();
    agreement.style.display = 'none';
    document.body.classList.remove('locked');
  });
  btnNo.addEventListener('click', (e) => {
    e.preventDefault();
    agreement.style.display = 'none';
    document.body.classList.remove('locked');
    window.location.replace('http://ya.ru');
  });
});

// get current year
document.querySelector('.current-year').innerHTML = new Date().getFullYear();

// mobile menu
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const menu = document.querySelector('.menu');
  const menuList = document.querySelector('.menu__list');
  menuBtn.classList.toggle('menu-btn--opened');
  menu.classList.toggle('menu--opened');
  document.body.classList.toggle('locked');
  menuList.classList.toggle('menu__list--opened');
  menu.addEventListener('click', (e) => {
    if (e.target === menu || (e.target.href && e.target.href != 'javascript:void(0);')) {
      menuBtn.classList.remove('menu-btn--opened');
      menuList.classList.remove('menu__list--opened');
      menu.classList.remove('menu--opened');
      document.body.classList.remove('locked');
    }
  });
});

const logoSwiper = new Swiper('.header__logo', {
  speed: 500,
  loop: true,
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
  slidesPerView: 1,
  slidesPerGroup: 1,

  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1000: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
};

const cardsSwiperOneoff = new Swiper('.swiper-cards--one-off', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--one-off',
    prevEl: '.swiper-button-prev--one-off',
  },
  pagination: {
    el: '.swiper-pagination--one-off',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
  },
});

const brandsBtns = document.querySelectorAll('.catalog__brands-btn');
const brandsTrigger = document.querySelector('.catalog__brands-trigger');
const brandsTriggerText = document.querySelector('.catalog__brands-trigger-text');
const brandsList = document.querySelector('.catalog__brands-list');
let filterBtns = document.querySelectorAll('.catalog__filter-btn');
const filterTrigger = document.querySelector('.catalog__filter-trigger');
const filterTriggerText = document.querySelector('.catalog__filter-trigger-text');
const filterList = document.querySelector('.catalog__filter-list');

brandsBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    brandsBtns.forEach((btn) => {
      btn.classList.remove('btn--active');
    });
    btn.classList.add('btn--active');

    brandsTriggerText.innerHTML = btn.innerHTML;
    brandsTrigger.classList.remove('catalog__brands-trigger--active');
    brandsList.classList.remove('catalog__brands-list--opened');

    const brandName = btn.dataset.name;
    const puffs = btn.dataset.puffs.split(',');

    filterBtns.forEach((btn) => {
      btn.remove();
    });
    let noActiveFilterBtn = true;
    puffs.forEach((puff) => {
      const filterBtn = document.createElement('button');
      filterBtn.classList.add('btn', 'catalog__filter-btn');
      filterBtn.dataset.puff = puff;
      filterBtn.innerHTML = puff + ' затяжек';
      filterList.appendChild(filterBtn);
    });
    filterList.firstElementChild.classList.add('btn--active');
    filterTriggerText.innerHTML = filterList.firstElementChild.innerHTML;
    filterBtns = document.querySelectorAll('.catalog__filter-btn');
    cardsSwiperOneoff.removeAllSlides();
    document.dispatchEvent(
      new CustomEvent('trigger-changed', { detail: { name: brandName, puff: filterList.firstElementChild.dataset.puff } })
    );
    filter(brandName);
    cardsSwiperOneoff.update();
  });
});

brandsTrigger.addEventListener('click', () => {
  brandsTrigger.classList.toggle('catalog__brands-trigger--active');
  brandsList.classList.toggle('catalog__brands-list--opened');
});

function filter(brandName) {
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((btn) => {
        btn.classList.remove('btn--active');
      });
      btn.classList.add('btn--active');

      filterTriggerText.innerHTML = btn.innerHTML;
      filterTrigger.classList.remove('catalog__filter-trigger--active');
      filterList.classList.remove('catalog__filter-list--opened');
      cardsSwiperOneoff.removeAllSlides();
      document.dispatchEvent(new CustomEvent('trigger-changed', { detail: { name: brandName, puff: btn.dataset.puff } }));
    });
  });
}
filter(brandsList.firstElementChild.dataset.name);

filterTrigger.addEventListener('click', () => {
  filterTrigger.classList.toggle('catalog__filter-trigger--active');
  filterList.classList.toggle('catalog__filter-list--opened');
});

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

const cardsSwiperLiquids = new Swiper('.swiper-cards--liquids', {
  ...sliderConfig,
  navigation: {
    nextEl: '.swiper-button-next--liquids',
    prevEl: '.swiper-button-prev--liquids',
  },
  pagination: {
    el: '.swiper-pagination--liquids',
    clickable: true,
  },
});

// scroll to top
const scrollBtn = document.querySelector('.scroll-to-top');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    scrollBtn.style.visibility = 'visible';
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.visibility = 'hidden';
    scrollBtn.style.opacity = '0';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

flsFunctions.bindModal('.btn--download', '.modal--order', '.modal__close');

// phone mask
const elements = document.querySelectorAll('.order__input--phone');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
};
elements.forEach((element) => {
  const mask = IMask(element, maskOptions);
});
