
import menuList from "./menu/menuList";
import burger from "./menu/burger";
import modalDef from "./modal/modal";
import anchor from "./anchor/anchor";
import preloader from "./preloader/preloader";
import relocationLink from "./relocation/relocation";
import touchImage from "./touch/touch";




document.addEventListener('DOMContentLoaded', function(e) {
    preloader()
    menuList()
    modalDef()
    anchor()
    burger()
    relocationLink()
    touchImage();
})




