import {isIpad} from "../../functions/check-viewport";

// открывающеся меню при таблет о бренде

function menuList() {
  const mainLink = document.querySelector(".header__list--subtitle");
  const caret = document.querySelector(".header__list--caret");
  const nav = document.querySelector(".header__list nav");
  if (mainLink) {
    if (isIpad()) {
      mainLink.addEventListener("click", function (e) {
        mainLink.classList.toggle("active");
        caret.classList.toggle("active");
        nav.classList.toggle("active");
      });



      document.addEventListener('click', (e)=> {
        let click = e.composedPath().includes(mainLink);
        if (!click) {
          mainLink.classList.remove("active");
          caret.classList.remove("active");
          nav.classList.remove("active");
        } else {

        }

      })
    }
  }
}

export default menuList;
