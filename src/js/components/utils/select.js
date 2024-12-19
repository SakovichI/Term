const changeAbonementPrice = (card, typeEl, countEl, periodEl) => {
  const abonements = [
    {
      type: "основной",
      period: "1 месяц",
      price: 9850,
    },
    {
      type: "основной",
      period: "3 месяца",
      price: 25100,
    },
    {
      type: "основной",
      period: "6 месяцев",
      price: 48300,
    },
    {
      type: "основной",
      period: "12 месяцев",
      price: 85000,
    },
    {
      type: "дневной",
      period: "1 месяц",
      price: 6600,
    },
    {
      type: "дневной",
      period: "3 месяца",
      price: 17800,
    },
    {
      type: "дневной",
      period: "6 месяцев",
      price: 33800,
    },
    {
      type: "дневной",
      period: "12 месяцев",
      price: 58650,
    },
    {
      type: "семейный для троих",
      period: "1 месяц",
      price: 18480,
    },
    {
      type: "семейный для троих",
      period: "3 месяца",
      price: 48400,
    },
    {
      type: "семейный для троих",
      period: "6 месяцев",
      price: 85000,
    },
    {
      type: "семейный для троих",
      period: "12 месяцев",
      price: 150650,
    },
    {
      type: "семейный для четверых",
      period: "1 месяц",
      price: 18480,
    },
    {
      type: "семейный для четверых",
      period: "3 месяца",
      price: 61380,
    },
    {
      type: "семейный для четверых",
      period: "6 месяцев",
      price: 112060,
    },
    {
      type: "семейный для четверых",
      period: "12 месяцев",
      price: 200930,
    },
    {
      type: "правильный родитель",
      period: "1 месяц",
      price: 9850,
    },
    {
      type: "правильный родитель",
      period: "3 месяца",
      price: 29120,
    },
    {
      type: "правильный родитель",
      period: "6 месяцев",
      price: 53480,
    },
    {
      type: "правильный родитель",
      period: "12 месяцев",
      price: 100500,
    },
    {
      type: "большая семья",
      period: "1 месяц",
      price: 18500,
    },
    {
      type: "большая семья",
      period: "3 месяца",
      price: 46420,
    },
    {
      type: "большая семья",
      period: "6 месяцев",
      price: 85000,
    },
    {
      type: "большая семья",
      period: "12 месяцев",
      price: 150650,
    },
    {
      type: "близнецы",
      period: "1 месяц",
      price: 18500,
    },
    {
      type: "близнецы",
      period: "3 месяца",
      price: 46420,
    },
    {
      type: "близнецы",
      period: "6 месяцев",
      price: 85000,
    },
    {
      type: "близнецы",
      period: "12 месяцев",
      price: 150650,
    },
  ];
  const price = card.querySelector(".abonement-slide__price");
  const type = typeEl.innerText.toLowerCase();
  const period = periodEl.innerText;
  const count = countEl.innerText;

  const toActualAbonement = (el) => {
    return type === el.type && period === el.period;
  };

  price.innerText = abonements.find(toActualAbonement).price * count;
};

let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
    const card = select.closest(".abonement-slide");
    if (card) {
      const type = card.querySelector(".abonement-slide__title");
      const count = card.querySelector(".counter__count");
      const period = card.querySelector(".select__current");
      changeAbonementPrice(card, type, count, period);
    }
  }
};

select();
