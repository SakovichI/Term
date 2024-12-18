import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
const scheduleSwiper = new Swiper(".schedule-slider", {
  wrapperClass: "schedule-slider__wrap",
  slideClass: "schedule-slider__slide",
  slidesPerView: 1,
  spaceBetween: 24,
  autoHeight: true,
  speed: 800,
  init: false,
  navigation: {
    nextEl: ".schedule-controls__btn--next",
    prevEl: ".schedule-controls__btn--prev",
  },
  on: {
    init: function () {
      setSliderTitle(scheduleSwiper.slides[this.activeIndex]);
      sortTable(scheduleSwiper.slides[this.activeIndex]);
    },
    slideChange: function () {
      setSliderTitle(scheduleSwiper.slides[this.activeIndex]);
      sortTable(scheduleSwiper.slides[this.activeIndex]);
    },
  },
});

scheduleSwiper.init();

function setSliderTitle(slide) {
  const title = document.querySelector(".schedule-controls__title");
  const slideTitle = slide.querySelector(".schedule-table__title");

  title.innerHTML = slideTitle.innerHTML;
}

function sortTable(activeSlide) {
  const tagBtns = document.querySelectorAll("[data-tag]");
  const tableRow = activeSlide.querySelectorAll("[data-tag-row]");

  tagBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      removeActiveTag();
      const tag = e.currentTarget.getAttribute("data-tag").toLowerCase();
      tableRow.forEach((row) => {
        const rowTag = row.getAttribute("data-tag-row").toLowerCase();
        row.style.display = "flex";
        if (tag === "все") {
          return;
        }
        if (tag !== rowTag) {
          row.style.display = "none";
        }
      });

      btn.classList.add("active");
      scheduleSwiper.updateAutoHeight();
    });
  });
}

function removeActiveTag() {
  const tagBtns = document.querySelectorAll("[data-tag]");
  tagBtns.forEach((btn, i) => {
    btn.classList.remove("active");
  });
}
