import GraphTabs from "graph-tabs";
const tabs = new GraphTabs("tabs");

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".tariffs-slider", {
  wrapperClass: "tariffs-slider__wrap",
  slideClass: "tariffs-slider__slide",
  slidesPerView: "auto",
  spaceBetween: 24,
  speed: 800,
  navigation: {
    nextEl: ".tariffs-slider__btn--next",
    prevEl: ".tariffs-slider__btn--prev",
  },
});

const abonementSwiper = new Swiper(".abonement-slider", {
  wrapperClass: "abonement-slider__wrap",
  slideClass: "abonement-slider__slide",
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 800,
  navigation: {
    nextEl: ".abonement-slider__btn--next",
    prevEl: ".abonement-slider__btn--prev",
  },
});

const certificatSwiper = new Swiper(".certeficat-slider", {
  wrapperClass: "certeficat-slider__wrap",
  slideClass: "certeficat-slider__slide",
  slidesPerView: 3,
  spaceBetween: 24,
  speed: 800,
  navigation: {
    nextEl: ".certeficat-slider__btn--next",
    prevEl: ".certeficat-slider__btn--prev",
  },
});

const discountSwiper = new Swiper(".discount-slider", {
  wrapperClass: "discount-slider__wrap",
  slideClass: "discount-slider__slide",
  slidesPerView: 2,
  spaceBetween: 24,
  speed: 800,
  navigation: {
    nextEl: ".discount-slider__btn--next",
    prevEl: ".discount-slider__btn--prev",
  },
});

window.addEventListener("load", () => {
  abonementSwiper.disable();
  certificatSwiper.disable();
  discountSwiper.disable();
});
