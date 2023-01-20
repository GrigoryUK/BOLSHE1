import menuList from "./menu/menuList";
import burger from "./menu/burger";
import modalDef from "./modal/modal";
import anchor from "./anchor/anchor";
import preloader from "./preloader/preloader";
import relocationLink from "./relocation/relocation";
import addClassName from "./addClassName/addClassName";



relocationLink();
document.addEventListener("DOMContentLoaded", function (e) {
  preloader();
  anchor();
  addClassName();
  modalDef();
  menuList();
  burger();

});
