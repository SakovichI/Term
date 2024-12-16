import GraphTabs from "graph-tabs";
const tabs = new GraphTabs("blog");
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
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 24,
    speed: 800,
    init: false,
    navigation: {
      nextEl: ".blog-slider__btn--next",
      prevEl: ".blog-slider__btn--prev",
    },
    on: {
      init: function () {
        blogSwiper.slides[0].classList.add("active");
        blogSwiper.slides.forEach((slide, i) => [
          slide.addEventListener("click", () => {
            blogSwiper.slides.forEach((slider) => {
              slider.classList.remove("active");
            });
            slide.classList.add("active");
          }),
        ]);
      },
    },
  });

  blogSwiper.init();
});
