import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".reviews-slider", {
  wrapperClass: "reviews-slider__wrap",
  slideClass: "reviews-slider__slide",
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 800,
  navigation: {
    nextEl: ".reviews-slider__btn--next",
    prevEl: ".reviews-slider__btn--prev",
  },
  on: {
    init: function () {
      const btnElse = document.querySelectorAll(".review__btn");
      const reviewText = document.querySelectorAll(".review__text");
      reviewText.forEach((text) => {
        if (text.scrollHeight > text.clientHeight) {
          const textWrap = text.closest(".review");
          const btn = textWrap.querySelector(".review__btn");
          btn.classList.add("active");
        }
      });
      btnElse.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          const targetWrap = e.currentTarget.closest(".review");
          const text = targetWrap.querySelector(".review__text");
          text.classList.toggle("active");
        });
      });
    },
  },
});
