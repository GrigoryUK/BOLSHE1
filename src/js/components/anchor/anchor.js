import SmoothScroll from "smooth-scroll";

function anchor() {
  const scroll = new SmoothScroll('a[href*="#"]', {
    updateURL: false,
    speed: 600,
    speedAsDuration: true,
    easing: 'easeOutQuad',
    // durationMax: 2,
  });
}

export default anchor;
