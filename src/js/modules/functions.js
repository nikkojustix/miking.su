export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    let className = support == true ? 'webp' : 'no-webp';
    document.querySelector('html').classList.add(className);
  });
}

export function tabs(tabSelector, contentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabSelector);
  const contents = document.querySelectorAll(contentSelector);

  function showContent(i = 0) {
    tabs[i].classList.add(activeClass);
    contents[i].style.display = 'block';
  }
  function hideContent() {
    contents.forEach((content) => {
      content.style.display = 'none';
    });
    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  }

  hideContent();
  showContent();

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      hideContent();
      showContent(i);
    });
  });
}

export function filter(selector, swiper) {
  const list = document.querySelectorAll(selector + ' .filter__btn');
  const items = document.querySelectorAll(selector + '~* .card');
  list.forEach((item) => {
    item.addEventListener('click', (e) => {
      const target = e.target.dataset.id;
      list.forEach((item) => {
        item.classList.remove('filter__btn--active');
      });
      item.classList.add('filter__btn--active');
      if (target === 'all') {
        items.forEach((item) => {
          item.parentNode.style.display = 'block';
        });
      } else {
        items.forEach((item) => {
          if (item.dataset.id === target) {
            item.parentNode.style.display = 'block';
          } else {
            item.parentNode.style.display = 'none';
          }
        });
      }
      swiper.updateSlides();
    });
  });
}
