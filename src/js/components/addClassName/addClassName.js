// add className to catalog__box
import { isMobile, isTablet, isDesktop } from "../../functions/check-viewport";

function addClassName() {
  // классы должны добавляться, чтобы новые категорий
  const containerCatalog = document.querySelector('.catalog__content--desk');


  if (containerCatalog) {
    const items = containerCatalog.querySelectorAll('.catalog__box');
    const itemsCount = items.length;

    let itemFix = 0;
    for (let i = 0; i < itemsCount; i++) {
      itemFix++;
      const item = items[i];
      item.classList.add(`catalog__box--` + itemFix);

      if (itemFix % 6 === 0) {
        itemFix = 0;
      }
    }
  }

  const containerMission = document.querySelector('.mission__content--desk');


  if (containerMission) {
    const items = containerMission.querySelectorAll('.mission__box');
    const itemsCount = items.length;

    let itemFix = 0;
    for (let i = 0; i < itemsCount; i++) {
      itemFix++;
      const item = items[i];
      item.classList.add(`mission__box--` + itemFix);

      if (itemFix % 4 === 0) {
        itemFix = 0;
      }
    }
  }

  // const containerCare = document.querySelector('.care__content');

  // if (containerCare) {
  //   const items = containerCare.querySelectorAll('.care__box');
  //   const itemsCount = items.length;

  //   let itemFix = 0;
  //   for (let i = 0; i < itemsCount; i++) {
  //     itemFix++;
  //     const item = items[i];
  //     item.classList.add(`care__box--` + itemFix);

  //     if (itemFix % 2 === 0) {
  //       itemFix = 0;
  //     }
  //   }
  // }

}

export {addClassName};
