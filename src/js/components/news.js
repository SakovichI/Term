import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
const newsSwiper = new Swiper(".news-slider", {
  wrapperClass: "news-slider__wrap",
  slideClass: "news-slider__slide",
  slidesPerView: 3,
  speed: 800,
  spaceBetween: "20",
  navigation: {
    nextEl: ".news-slider__btn--next",
    prevEl: ".news-slider__btn--prev",
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
