import SmoothScroll from 'smooth-scroll';



function anchor() {
const scroll = new SmoothScroll('a[href*="#"]', {
    updateURL: false,
 
});
}

export default anchor;
