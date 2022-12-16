import { isMobile, isTablet, isDesktop } from "../../functions/check-viewport";

function burger() {

    if(isMobile()) {
        const pagefull = document.querySelector('.fullpage')
        if (document.body.contains(pagefull)) {
            const btn = document.querySelector('.burger');
            btn.addEventListener('click', el => {
                const header = document.querySelector('header')
                header.classList.toggle('active'); 
            })
        }
    }
}

export default burger;
