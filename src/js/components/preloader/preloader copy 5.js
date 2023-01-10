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

      let images = document.images,
        imagesTotalCount = document.images.length,
        imagesLoadedCount = 0;


      for (let i = 0; i < imagesTotalCount; i++) {

        let image_Clone = new Image();
        image_Clone.onload = imageLoaded;
        image_Clone.oneerorr = imageLoaded;
        image_Clone.src = images[i].src;

      }

      function imageLoaded() {
        imagesLoadedCount++;

        let m = ((imagesLoadedCount * 100) / imagesTotalCount).toFixed(0);
        let b = parseInt(m, 10);


        if (b > 80 && b < 90) {

          setTimeout(() => {
            logo.style.transform = `scale(1)`;
            if (isDesktop() || isTablet()) {


              videoDesk.play();
              videoDesk.setAttribute("autoplay", "");


            }
            if (isMobile()) {



                videoMobile.play();
                videoMobile.setAttribute("autoplay", "");

            }

          }, 600)
        }


        if (isDesktop() || isTablet()) {
          if (imagesLoadedCount >= imagesTotalCount) {

            setTimeout(() => {

              preloader.classList.add("preloader--hide");
              enableScroll();


            }, 1000);


          }
        }
        if (isMobile() && imagesLoadedCount >= imagesTotalCount) {


          setTimeout(() => {

            videoMobile.addEventListener('canplay', (event) => {
              console.log(1)
              preloader.classList.add("preloader--hide");
              enableScroll();
            });
          }, 500);
        }

      }
    }


    function preloadEvery() {
      preloader.style.display = 'none';
      if (isDesktop() || isTablet()) {

        videoDesk.play();
        videoDesk.setAttribute("autoplay", "");
      }
      if (isMobile()) {
        videoMobile.addEventListener('canplay', (event) => {
          videoMobile.play();
          videoMobile.setAttribute("autoplay", "");
        });

      }


    }


    if (!sessionStorage.getItem('doNotShow6')) {
      sessionStorage.setItem('doNotShow6', 'true');
      preloadOnly();
    } else {
      preloadEvery()

    }

  }
}

export default preloader

