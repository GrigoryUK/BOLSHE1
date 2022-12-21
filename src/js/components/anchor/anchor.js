import SmoothScroll from "smooth-scroll";

function anchor() {
  const scroll = new SmoothScroll('a[href*="#"]', {
    updateURL: false,
    speed: 300,
    speedAsDuration: true,
    easing: 'easeOutQuad',
    durationMax: 1,
  });
}

export default anchor;
