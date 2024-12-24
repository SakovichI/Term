const abonementSlides = document.querySelectorAll(".abonement-slide");
const certificateSlides = document.querySelectorAll(".certeficat-slide");

let orderData = {};

if (abonementSlides.length) {
  const abonementTypeBtns = document.querySelectorAll(
    ".abonement-slide__btn-select"
  );
  const designBtns = document.querySelectorAll(".abonement-design__btn-select");
  const sendBtn = document.querySelector(".abonement-data__btn-send");
  const links = document.querySelectorAll(".abonement-slide__link");
  const tabs = document.querySelectorAll(".form-btn");

  window.addEventListener("load", () => {
    const orderDataStor = JSON.parse(window.localStorage.getItem("abonement"));
    orderData = orderDataStor;
    if (tabs.length) {
      tabsState(orderData, tabs);
      autoChangeTab(orderData, tabs);
      setConfirmOrder(orderData);
      toChangeParams(tabs);
    }
    if (links.length) {
      setAbonementType(links);
    }

    selectedAbonementType(orderData);
    selectedDesign(orderData);
  });

  if (abonementTypeBtns) {
    setAbonementType(abonementTypeBtns, tabs);
  }

  if (designBtns) {
    designBtns.forEach((designBtn) => {
      designBtn.addEventListener("click", (e) => {
        const wrap = e.currentTarget.closest(".abonement-design__wrap");
        const img = wrap.querySelector("img");
        const designImg = img.getAttribute("src");
        orderData = { ...orderData, designImg };
        window.localStorage.setItem("abonement", JSON.stringify(orderData));
        tabsState(orderData, tabs);
        setConfirmOrder(orderData);
        autoChangeTab(orderData, tabs);
        selectedDesign(orderData);
      });
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", (e) => {
      const formData = new FormData(e.currentTarget.closest("form"));
      const sendData = {
        sendTo: formData.get("send"),
        name: formData.get("name"),
        email: formData.get("email"),
      };
      orderData = { ...orderData, ...sendData };
      window.localStorage.setItem("abonement", JSON.stringify(orderData));
      tabsState(orderData, tabs);
      setConfirmOrder(orderData);
      autoChangeTab(orderData, tabs);
    });
  }
}

if (certificateSlides.length) {
  const certificateTypeBtns = document.querySelectorAll(
    ".certeficat-slide__btn-select"
  );
  const designBtns = document.querySelectorAll(
    ".certificate-design__btn-select"
  );
  const sendBtn = document.querySelector("[data-btn-send]");
  const links = document.querySelectorAll(".certeficat-slide__link");
  const tabs = document.querySelectorAll(".form-btn-certificate");

  window.addEventListener("load", () => {
    const orderDataStor = JSON.parse(
      window.localStorage.getItem("certificate")
    );
    orderData = orderDataStor;
    if (tabs.length) {
      tabsState(orderData, tabs);
      autoChangeTab(orderData, tabs);
      setConfirmOrder(orderData);
      toChangeParams(tabs);
    }
    if (links.length) {
      setCertificateType(links, tabs);
    }

    selectedCertificateType(orderData);
    selectedDesign(orderData);
  });

  if (certificateTypeBtns) {
    setCertificateType(certificateTypeBtns, tabs);
  }

  if (designBtns) {
    designBtns.forEach((designBtn) => {
      designBtn.addEventListener("click", (e) => {
        const wrap = e.currentTarget.closest(".abonement-design__wrap");
        const img = wrap.querySelector("img");
        const designImg = img.getAttribute("src");
        orderData = { ...orderData, designImg };
        window.localStorage.setItem("certificate", JSON.stringify(orderData));
        tabsState(orderData, tabs);
        setConfirmOrder(orderData);
        autoChangeTab(orderData, tabs);
        selectedDesign(orderData);
      });
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", (e) => {
      const formData = new FormData(e.currentTarget.closest("form"));
      const sendData = {
        sendTo: formData.get("send"),
        name: formData.get("name"),
        email: formData.get("email"),
      };
      orderData = { ...orderData, ...sendData };
      window.localStorage.setItem("certificate", JSON.stringify(orderData));
      tabsState(orderData, tabs);
      setConfirmOrder(orderData);
      autoChangeTab(orderData, tabs);
    });
  }
}

function setAbonementType(elements, tabs) {
  elements.forEach((typeBtn) => {
    typeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const isLink = e.currentTarget.classList.contains(
        "abonement-slide__link"
      );
      const wrap = e.currentTarget.closest(".abonement-slide__wrap");
      const type = wrap
        .querySelector(".abonement-slide__title")
        .innerText.toLowerCase();
      const description = wrap.querySelector(
        ".abonement-slide__subtitle"
      ).innerText;
      const period = wrap
        .querySelector(".select__current")
        .innerText.toLowerCase();
      const count = wrap
        .querySelector(".counter__count")
        .innerText.toLowerCase();
      const price = wrap
        .querySelector(".abonement-slide__price")
        .innerText.toLowerCase();
      const orderDataNew = {
        type,
        period,
        count,
        price,
        description,
      };
      orderData = { ...orderData, ...orderDataNew };

      window.localStorage.setItem("abonement", JSON.stringify(orderData));
      selectedAbonementType(orderData);

      if (isLink) {
        window.location.href = window.location.href + "abonement";
      } else {
        tabsState(orderData, tabs);
        setConfirmOrder(orderData);
        autoChangeTab(orderData, tabs);
      }
    });
  });
}

function setCertificateType(elements, tabs) {
  elements.forEach((typeBtn) => {
    typeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const isLink = e.currentTarget.classList.contains(
        "certeficat-slide__link"
      );
      const wrap = e.currentTarget.closest(".certeficat-slide__wrap");
      const type = wrap
        .querySelector(".certeficat-slide__title")
        .innerText.toLowerCase();
      const count = wrap
        .querySelector(".counter__count")
        .innerText.toLowerCase();
      const price = wrap
        .querySelector(".certeficat-slide__price")
        .innerText.toLowerCase();
      const orderDataNew = {
        type,
        count,
        price,
      };
      orderData = { ...orderData, ...orderDataNew };

      window.localStorage.setItem("certificate", JSON.stringify(orderData));
      selectedCertificateType(orderData);

      if (isLink) {
        window.location.href = window.location.href + "certificate";
      } else {
        tabsState(orderData, tabs);
        setConfirmOrder(orderData);
        autoChangeTab(orderData, tabs);
      }
    });
  });
}

function setInput(form) {
  const inputs = document.querySelectorAll("input");
  for (let key in form) {
    inputs.forEach((input) => {
      if (input.type !== "radio") {
        if (input.name === key) {
          input.value = form[key];
        }
      } else {
        if (input.value === form[key]) {
          input.checked = true;
        }
      }
    });
  }
}

function setImgUrl(url) {
  const img = document.querySelector(".abonement-confirm__img");
  img.src = url;
}

function tabsState(orderData, tabs) {
  tabs.forEach((tab, i) => {
    if (i !== 0) {
      tab.disabled = true;
    }
  });
  if (orderData) {
    if (orderData.type) {
      tabs[1].disabled = false;
    }
    if (orderData.designImg) {
      tabs[2].disabled = false;
    }
    if (orderData.type && orderData.designImg && orderData.sendTo) {
      tabs[3].disabled = false;
    }
  }
}

function setConfirmOrder(orderData) {
  const valuesWrap = document.querySelectorAll("[data-value]");
  for (let key in orderData) {
    if (key === "designImg") {
      setImgUrl(orderData[key]);
    }
    valuesWrap.forEach((value) => {
      const attribute = value.getAttribute("data-value");
      if (attribute === key) {
        value.innerHTML = orderData[key];
        if (key === "price") {
          value.innerHTML = `${orderData[key]} руб.`;
        }
      }
    });
  }
}

function autoChangeTab(orderData, tabs) {
  if (orderData) {
    if (orderData.type && orderData.designImg && orderData.email) {
      tabs[3].click();
      setInput(orderData);
    } else if (orderData.type && orderData.designImg) {
      tabs[2].click();
    } else if (orderData.type) {
      tabs[1].click();
    }
  }
}

function toChangeParams(tabs) {
  const btns = document.querySelectorAll("[data-btn-reset]");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = e.currentTarget.getAttribute("data-btn-reset");
      tabs[index].click();
    });
  });
}

function selectedAbonementType(orderData) {
  if (orderData) {
    const typesWrap = document.querySelectorAll(".abonement-slide");
    typesWrap.forEach((card) => {
      card.classList.remove("selected");
      const title = card
        .querySelector(".abonement-slide__title")
        .innerHTML.toLowerCase();
      if (title === orderData.type) {
        card.classList.add("selected");
        const period = card.querySelector(".select__current");
        period.innerHTML = orderData.period;

        const count = card.querySelector(".counter__count");
        count.innerHTML = orderData.count;

        const price = card.querySelector(".abonement-slide__price");
        price.innerHTML = orderData.price;
      }
    });
  }
}

function selectedCertificateType(orderData) {
  if (orderData) {
    const typesWrap = document.querySelectorAll(".certeficat-slide");
    typesWrap.forEach((card) => {
      card.classList.remove("selected");
      const title = card
        .querySelector(".certeficat-slide__title")
        .innerHTML.toLowerCase();
      if (title === orderData.type) {
        card.classList.add("selected");
        const count = card.querySelector(".counter__count");
        count.innerHTML = orderData.count;

        const price = card.querySelector(".certeficat-slide__price");
        price.innerHTML = orderData.price;
      }
    });
  }
}

function selectedDesign(orderData) {
  if (orderData) {
    const designCards = document.querySelectorAll(".abonement-design__wrap");

    designCards.forEach((card) => {
      const img = card.querySelector("img");
      const src = img.getAttribute("src");
      img.classList.remove("selected");
      if (src === orderData.designImg) {
        img.classList.add("selected");
      }
    });
  }
}
