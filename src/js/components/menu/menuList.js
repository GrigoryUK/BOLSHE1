import { isMobile, isTablet, isDesktop } from "../../functions/check-viewport";
// if (isDesktop()) {
//   console.log('...')
// }

function menuList() {
  const mainLink = document.querySelector(".header__list--subtitle");
  const carret = document.querySelector(".header__list--caret");
  const nav = document.querySelector(".header__list nav");
  if (mainLink) {
    if (isTablet()) {
      mainLink.addEventListener("click", function (e) {
        mainLink.classList.toggle("active");
        carret.classList.toggle("active");
        nav.classList.toggle("active");
      });
    }
  }
}

export default menuList;
