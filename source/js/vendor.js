import Swiper from './vendor/swiper';

const coachesSwiper = document.querySelector('.coaches__swiper');
const commentsSwiper = document.querySelector('.comments__swiper');
const buttons = document.querySelectorAll('[data-swiper-button]');

const focusOnActiveCard = () => {
  if (buttons.length) {
    buttons.forEach((button) => {
      button.addEventListener('focusout', () => {
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
          activeSlide.focus();
        }
      });
    });
  }

};

window.addEventListener('load', () => {
  if (coachesSwiper) {
    const swiperCoaches = new Swiper('.coaches__swiper', {
      direction: 'horizontal',
      loop: true,
      grabCursor: true,
      slidesPerGroup: 1,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
    swiperCoaches.lazy.load();
  }

  if (commentsSwiper) {
    const swiperComments = new Swiper('.comments__swiper', {
      direction: 'horizontal',
      loop: false,

      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    swiperComments.lazy.load();
  }

  focusOnActiveCard();

});
