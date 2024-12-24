import GraphTabs from "graph-tabs";
const tabsBlog = new GraphTabs("blog");
import GraphModal from "graph-modal";
const modal = new GraphModal();

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
const blogsSliders = document.querySelectorAll(".blog-slider");

blogsSliders.forEach((el, index) => {
  const blogSwiper = new Swiper(el, {
    wrapperClass: "blog-slider__wrap",
    slideClass: "blog-slider__slide",
    slidesPerView: "1",
    loop: true,
    spaceBetween: 24,
    speed: 800,
    init: false,
    navigation: {
      nextEl: ".blog-slider__btn--next",
      prevEl: ".blog-slider__btn--prev",
    },
    breakpoints: {
      900: {
        slidesPerView: "auto",
      },
    },
    on: {
      init: function () {
        if (window.innerWidth > 900) {
          blogSwiper.slides[0].classList.add("active");
          blogSwiper.slides.forEach((slide, i) => [
            slide.addEventListener("click", () => {
              blogSwiper.slides.forEach((slider) => {
                slider.classList.remove("active");
              });
              slide.classList.add("active");
            }),
          ]);
        } else {
          blogSwiper.slides.forEach((slide) => [slide.classList.add("active")]);
        }
      },
    },
  });

  blogSwiper.init();
});

const mobileTabs = document.querySelector("[data-select-blog]");
if (mobileTabs) {
  const selectItems = mobileTabs.querySelectorAll(".select__item");
  selectItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      tabsBlog.tabsBtns[index].click();
    });
  });
}

const modalSliders = document.querySelectorAll(".modal-content__slider");

if (modalSliders.length) {
  modalSliders.forEach((slider) => {
    const modalSlider = new Swiper(slider, {
      wrapperClass: "modal-content__slider-wrap",
      slideClass: "modal-content__slider-slide",
      slidesPerView: "1",
      loop: true,
      spaceBetween: 24,
      speed: 800,
      navigation: {
        nextEl: ".modal-content__btn--next",
        prevEl: ".modal-content__btn--prev",
      },
    });
  });
}
