import SmoothScroll from "smooth-scroll";


// ссылки
function anchor() {
  const scroll = new SmoothScroll('a[href*="#"]', {
    updateURL: false,
    speed: 600,
    speedAsDuration: true,
    easing: 'linear',

  });
}

export default anchor;
