// Реализация остановки скролла (не забудьте вызвать функцию)
import { disableScroll } from "../../functions/disable-scroll";

import { enableScroll } from "../../functions/enable-scroll";

function preloader() {
  const logo = document.querySelector(".svg--preloader");
  const preloader = document.querySelector(".preloader__container");
  const video = document.getElementById("bigVideo");
  if (preloader) {
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



      if (b > 30 && b < 60) {
        setTimeout(() => {
          logo.style.transform = `scale(.3)`;
        }, 200)

      }

      if (b > 60 && b < 80) {

        setTimeout(() => {
          logo.style.transform = `scale(.6)`;
        }, 400)
      }

      if (b > 80 && b < 90) {

        setTimeout(() => {
          logo.style.transform = `scale(1)`;
        }, 600)
      }



      if (imagesLoadedCount >= imagesTotalCount) {
        setTimeout(() => {
          preloader.classList.add("preloader--hide");
          video.play();
          video.setAttribute("autoplay", "");
          enableScroll();
        }, 1000)
      }
    }


    // mediaFiles.forEach((file, index) => {
    //   console.log(video.readyState);

    //   if(file.complete) {
    //     i++;
    //     let m = ((i * 100) / mediaFiles.length).toFixed(0);
    //     let numberProperties = parseInt(m, 10);
    //     console.log(numberProperties);

    //     gsap.registerPlugin(TimelineLite);
    //     const tl = new TimelineLite();
    //     // onComplete: endPreloader

    //     if (numberProperties > 30) {

    //       // logo.style.transform = `scale(.3)`;
    //       tl.to(logo, .3, { css:{ scale:0.3},
    //         })

    //     }

    //     if (numberProperties > 60) {
    //       // logo.style.transform = `scale(.6)`;
    //       tl.to(logo, .3, { css:{scale:0.6},
    //       }, 1)
    //     }

    //     if (numberProperties > 80) {
    //       // logo.style.transform = `scale(.8)`;
    //       tl.to(logo, .3, {css:{scale:1},
    //       }, 2)
    //     }

    //     if (numberProperties > 90 && video.readyState == 4) {

    //       readyVideo()
    //     }

    //   }
    //   // vid.readyState
    //   function readyVideo(){

    //   }

    // });
  }
}

export default preloader
