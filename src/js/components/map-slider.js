import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".map-slider", {
  wrapperClass: "map-slider__wrap",
  slideClass: "map-slider__slide",
  slidesPerView: "auto",
  speed: 800,
  navigation: {
    nextEl: ".map-slider__btn--next",
    prevEl: ".map-slider__btn--prev",
  },
});

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {});
