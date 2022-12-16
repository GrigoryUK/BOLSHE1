function touchImage() {
  const items = document.querySelectorAll(".default__item");
  if (items) {
    items.forEach((item) => {
      let before = item.querySelector(".default__item--before");
      let after = item.querySelector(".default__item--after");
      function inside() {
        before.classList.add("visible");
        after.classList.add("hidden");
      }

      function outside() {
        before.classList.remove("visible");
        after.classList.remove("hidden");
      }


      item.addEventListener('touchstart', inside, false)
      item.addEventListener('touchmove', inside, false)
      item.addEventListener('touchend', outside, false)
    });
  }
  // t.addEventListener('touchstart', fun, false)
  // t.addEventListener('touchmove', fun, false)
  // t.addEventListener('touchend', fun, false)
}

export default touchImage;
