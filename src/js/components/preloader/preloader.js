// Реализация остановки скролла (не забудьте вызвать функцию)
import { disableScroll } from "../../functions/disable-scroll";

import { enableScroll } from "../../functions/enable-scroll";
import gsap from "gsap";
import { TimelineLite } from "gsap";
function preloader() {
  const logo = document.querySelector(".svg--preloader");
  const preloader = document.querySelector(".preloader__container");
  const video = document.querySelector(".blockM__video video");
  if (preloader) {
    disableScroll();
    console.log(video.onload)
    const mediaFiles = document.querySelectorAll("img");

    let i = 0;
    mediaFiles.forEach((file, index) => {


      console.log(mediaFiles.length);

      if(file.complete) {
        i++;
        let m = ((i * 100) / mediaFiles.length).toFixed(0);
        let numberProperties = parseInt(m, 10);
        console.log(numberProperties);

        gsap.registerPlugin(TimelineLite);
        const tl = new TimelineLite({ onComplete: endPreloader });


        if (numberProperties > 30) {

          // logo.style.transform = `scale(.3)`;
          tl.to(logo, .3, { css:{ scale:0.3},
            })

        }

        if (numberProperties > 60) {
          // logo.style.transform = `scale(.6)`;
          tl.to(logo, .3, { css:{scale:0.6},
          }, 1)
        }

        if (numberProperties > 80) {
          // logo.style.transform = `scale(.8)`;
          tl.to(logo, .3, {css:{scale:1},
          }, 2)
        }

        if (numberProperties > 90) {









        }

        function endPreloader() {

          setTimeout(() => {
            preloader.classList.add("preloader--hide");
            video.play();
            video.setAttribute("autoplay", "");
            enableScroll();
          }, 3000)


        }

      }



    });
  }
}

export default preloader;
