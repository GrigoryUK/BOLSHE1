// Реализация остановки скролла (не забудьте вызвать функцию)
import {disableScroll} from "../../functions/disable-scroll";

import {enableScroll} from "../../functions/enable-scroll";

function preloader() {
  const logo = document.querySelector(".svg--preloader");
  const preloader = document.querySelector(".preloader");
  const btn = document.querySelector('.btn__to--catalog');
  const catalogContainer = document.getElementById('catalog')
  const video = document.getElementById("bigVideo");
  const body = document.querySelector('body');
  if (video) {
    function preloadOnly() {
      window.scrollTo(0, 0);

      disableScroll();

      let images = document.images,
        imagesTotalCount = document.images.length,
        imagesLoadedCount = 0;


      for (var i = 0; i < imagesTotalCount; i++) {

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
            video.play();
            video.setAttribute("autoplay", "");
          }, 600)
        }


        if (imagesLoadedCount >= imagesTotalCount) {
          setTimeout(() => {
            preloader.classList.add("preloader--hide");
            enableScroll();
          }, 1000);
          setTimeout(() => {

          }, 1200)

        }
      }
    }

    function preloadEvery() {
      window.scrollTo(0, 0);
      video.play();
      video.setAttribute("autoplay", "");

      setTimeout(() => {
        logo.style.transform = `scale(1)`;
      })

      setTimeout(() => {
        preloader.classList.add("preloader--hide");
      },600)



      setTimeout(()=> {
        catalogContainer.scrollIntoView({behavior: "smooth"});

      }, 1200)
    }

    function preloadEvery2() {
      catalogContainer.scrollIntoView({behavior: "smooth"});
    }



    if (!localStorage.getItem('doNotShow2')) {
      localStorage.setItem('doNotShow2', 'true');
      preloadOnly();

    } else {
      preloader.style.display = 'none';
      preloadEvery2()

    }

  }
}

export default preloader

