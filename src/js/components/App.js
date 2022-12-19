import menuList from "./menu/menuList";
import burger from "./menu/burger";
import modalDef from "./modal/modal";
import anchor from "./anchor/anchor";
import preloader from "./preloader/preloader";
import relocationLink from "./relocation/relocation";
import touchImage from "./touch/touch";
import {addClassName} from "./addClassName/addClassName";

preloader();
document.addEventListener("DOMContentLoaded", function (e) {
  menuList();
  modalDef();
  anchor();
  burger();
  relocationLink();
  touchImage();
  addClassName();
});
