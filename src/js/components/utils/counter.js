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
const changeCertificatePrice = (card, typeEl, countEl) => {
  const certificates = [
    {
      type: "500",
      price: 450,
    },
    {
      type: "1000",
      price: 900,
    },
    {
      type: "2000",
      price: 1800,
    },
    {
      type: "3000",
      price: 2550,
    },
    {
      type: "5000",
      price: 4250,
    },
    {
      type: "10000",
      price: 8500,
    },
    {
      type: "15000",
      price: 12750,
    },
    {
      type: "20000",
      price: 17000,
    },
    {
      type: "30000",
      price: 25500,
    },
  ];
  const price = card.querySelector(".certeficat-slide__price");
  const type = typeEl.innerText;
  const count = countEl.innerText;

  const toActualAbonement = (el) => {
    return type === el.type;
  };

  price.innerText = certificates.find(toActualAbonement).price * count;
};

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const minus = counter.querySelector(".counter__minus");
  const plus = counter.querySelector(".counter__plus");

  plus.addEventListener("click", (e) => {
    const abonementCard = e.currentTarget.closest(".abonement-slide");
    const certificateCard = e.currentTarget.closest(".certeficat-slide");

    if (abonementCard) {
      const type = abonementCard.querySelector(".abonement-slide__title");
      const period = abonementCard.querySelector(".select__current");
      const count = abonementCard.querySelector(".counter__count");
      let countValue = Number(count.innerText);
      countValue++;
      count.innerText = countValue;
      if (countValue === 1) {
        minus.disabled = true;
      } else {
        minus.disabled = false;
      }

      changeAbonementPrice(abonementCard, type, count, period);

      if (countValue === 1) {
        minus.disabled = true;
      } else {
        minus.disabled = false;
      }
    } else {
      const type = certificateCard.querySelector(".certeficat-slide__title");
      const period = certificateCard.querySelector(".select__current");
      const count = certificateCard.querySelector(".counter__count");
      let countValue = Number(count.innerText);
      countValue++;
      count.innerText = countValue;
      if (countValue === 1) {
        minus.disabled = true;
      } else {
        minus.disabled = false;
      }

      changeCertificatePrice(certificateCard, type, count);

      if (countValue === 1) {
        minus.disabled = true;
      } else {
        minus.disabled = false;
      }
    }
  });

  minus.addEventListener("click", (e) => {
    const abonementCard = e.currentTarget.closest(".abonement-slide");
    const certificateCard = e.currentTarget.closest(".certeficat-slide");

    if (abonementCard) {
      const type = abonementCard.querySelector(".abonement-slide__title");
      const period = abonementCard.querySelector(".select__current");
      const count = abonementCard.querySelector(".counter__count");
      let countValue = Number(count.innerText);
      countValue--;
      count.innerText = countValue;
      if (countValue === 1) {
        minus.disabled = true;
      } else {
        minus.disabled = false;
      }

      changeAbonementPrice(abonementCard, type, count, period);

      if (countValue === 1) {
        minus.disabled = true;
      } else {
        minus.disabled = false;
      }
    } else {
      const type = certificateCard.querySelector(".certeficat-slide__title");
      const period = certificateCard.querySelector(".select__current");
      const count = certificateCard.querySelector(".counter__count");
      let countValue = Number(count.innerText);
      countValue--;
      count.innerText = countValue;
      if (countValue === 1) {
        minus.disabled = true;
      } else {
        minus.disabled = false;
      }

      changeCertificatePrice(certificateCard, type, count);

      if (countValue === 1) {
        minus.disabled = true;
      } else {
        minus.disabled = false;
      }
    }
  });
});
