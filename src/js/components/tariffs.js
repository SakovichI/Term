import GraphTabs from "graph-tabs";
const tabs = new GraphTabs("tabs");

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".tariffs-slider", {
  wrapperClass: "tariffs-slider__wrap",
  slideClass: "tariffs-slider__slide",
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 800,
  breakpoints: {
    600: {
      slidesPerView: "auto",
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: ".tariffs-slider__btn--next",
    prevEl: ".tariffs-slider__btn--prev",
  },
});

const abonementSwiper = new Swiper(".abonement-slider", {
  wrapperClass: "abonement-slider__wrap",
  slideClass: "abonement-slider__slide",
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 800,
  breakpoints: {
    625: {
      slidesPerView: "auto",
    },
  },
  navigation: {
    nextEl: ".abonement-slider__btn--next",
    prevEl: ".abonement-slider__btn--prev",
  },
});

const certificatSwiper = new Swiper(".certeficat-slider", {
  wrapperClass: "certeficat-slider__wrap",
  slideClass: "certeficat-slider__slide",
  slidesPerView: 1,
  spaceBetween: 24,
  speed: 800,
  breakpoints: {
    600: {
      slidesPerView: "auto",
    },
  },
  navigation: {
    nextEl: ".certeficat-slider__btn--next",
    prevEl: ".certeficat-slider__btn--prev",
  },
});

const discountSwiper = new Swiper(".discount-slider", {
  wrapperClass: "discount-slider__wrap",
  slideClass: "discount-slider__slide",
  slidesPerView: "1",
  spaceBetween: 40,
  breakpoints: {
    600: {
      slidesPerView: "auto",
      spaceBetween: 24,
    },
  },
  speed: 800,
  navigation: {
    nextEl: ".discount-slider__btn--next",
    prevEl: ".discount-slider__btn--prev",
  },
});

window.addEventListener("load", () => {
  if (window.innerWidth > 1000) {
    abonementSwiper.disable();
    certificatSwiper.disable();
    discountSwiper.disable();
  } else {
    abonementSwiper.enable();
    certificatSwiper.enable();
    discountSwiper.enable();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) {
    abonementSwiper.disable();
    certificatSwiper.disable();
    discountSwiper.disable();
  } else {
    abonementSwiper.enable();
    certificatSwiper.enable();
    discountSwiper.enable();
  }
});

const mobileTabs = document.querySelector("[data-select]");
if (mobileTabs) {
  const selectItems = mobileTabs.querySelectorAll(".select__item");
  selectItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      tabs.tabsBtns[index].click();
    });
  });
}
