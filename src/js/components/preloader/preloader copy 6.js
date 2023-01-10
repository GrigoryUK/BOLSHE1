// Реализация остановки скролла (не забудьте вызвать функцию)
import {isMobile, isTablet, isDesktop} from "../../functions/check-viewport";

import {disableScroll} from "../../functions/disable-scroll";

import {enableScroll} from "../../functions/enable-scroll";

function preloader() {
  const logo = document.querySelector(".svg--preloader");
  const preloader = document.getElementById("preloader");
  const body = document.getElementById('blockM');
  if (body) {
    const videoDesk = document.getElementById("bigVideo");
    const videoMobile = document.getElementById("mobileVideo");

    function preloadOnly() {
      window.scrollTo(0, 0);
      disableScroll();


      function scaleLogo() {
        logo.style.transform = `scale(1)`;
      }

      function videoPlay(video) {
        setTimeout(() => {
          video.play();
          video.setAttribute("autoplay", "");
          video.click()
        }, 300)
      }



      function preloadHide() {
        preloader.classList.add("preloader--hide");
        enableScroll();
      }



      const delay = (time) => {
        return new Promise((resolve, reject) => setTimeout(resolve, time))
      }


      if (isDesktop() || isTablet()) {


        videoDesk.addEventListener('loadedmetadata', (event) => {
          delay(100)
            .then(() => {
              scaleLogo()
              return delay(400)
            })
            .then(() => {
              videoPlay(videoDesk)
              return delay(500)
            })
            .then(() => {
              preloadHide()
            })
        })


      }
      if (isMobile()) {
        // videoMobile.addEventListener('loadedmetadata', (event) => {


          delay(100)
            .then(() => {
              scaleLogo()
              return delay(400)
            })
            .then(() => {
              videoPlay(videoMobile)
              return delay(500)
            })
            .then(() => {
              preloadHide()
            })


        // });


      }


    }


    function preloadEvery() {
      preloader.style.display = 'none';
      if (isDesktop() || isTablet()) {
        videoDesk.addEventListener('loadedmetadata', (event) => {
          videoDesk.play();
          videoDesk.setAttribute("autoplay", "");
        })
      }
      if (isMobile()) {
        // videoMobile.addEventListener('loadedmetadata', (event) => {
        //   videoMobile.play();
        //   videoMobile.setAttribute("autoplay", "");
        // });

      }


    }


    if (!sessionStorage.getItem('doNotShowTen')) {
      sessionStorage.setItem('doNotShowTen', 'true');
      preloadOnly()
    } else {
      preloadEvery()

    }

  }
}

export default preloader

