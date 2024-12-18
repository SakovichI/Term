import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
const newsSwiper = new Swiper(".news-slider", {
  wrapperClass: "news-slider__wrap",
  slideClass: "news-slider__slide",
  slidesPerView: 1,
  speed: 800,
  spaceBetween: "24",
  navigation: {
    nextEl: ".news-slider__btn--next",
    prevEl: ".news-slider__btn--prev",
  },
  breakpoints: {
    700: {
      slidesPerView: 3,
    },
  },
  init: false,
  on: {
    init: function () {
      const sliderInner = document.querySelector(".news__slider-inner");
      const controls = document.querySelector(".news-slider__controls");
      if (newsSwiper.slides.length > 3) {
        sliderInner.classList.add("active");
        controls.classList.add("active");
      }
    },
  },
});

newsSwiper.init();
