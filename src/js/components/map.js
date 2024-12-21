import GraphTabs from "graph-tabs";
const tabsMap = new GraphTabs("map");

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {});

const mobileTabs = document.querySelector("[data-select-map]");
if (mobileTabs) {
  const selectItems = mobileTabs.querySelectorAll(".select__item");
  selectItems.forEach((item, index) => {
    item.addEventListener("click", (e) => {
      tabsMap.tabsBtns[index].click();
    });
  });
}

window.addEventListener("load", () => {
  tabsMap.switchTabs(tabsMap.tabsBtns[1]);
});
