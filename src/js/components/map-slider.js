import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
const counter = document.querySelector(".map-slider__slide-text");
const swiper = new Swiper(".map-slider", {
  wrapperClass: "map-slider__wrap",
  slideClass: "map-slider__slide",
  slidesPerView: "auto",
  initialSlide: 1,
  speed: 800,
  navigation: {
    nextEl: ".map-slider__btn--next",
    prevEl: ".map-slider__btn--prev",
  },
  on: {
    slideChange: function () {
      counter.innerHTML = `${this.activeIndex + 1} этаж`;
    },
  },
});

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {});
