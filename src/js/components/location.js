const locations = document.querySelectorAll(".location-content__row");
const locationLink = document.querySelector(".location__link");

if (locations.length) {
  locations.forEach((elem) => {
    const radio = elem.querySelector(".radio__input");
    radio.addEventListener("input", () => {
      locationLink.setAttribute("href", radio.value);
    });
  });
}
