const scrollers = document.querySelectorAll(".scroller");

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach(scroller  => {
    scroller.setAttribute('data-animated', true);


    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerContect = Array.from(scrollerInner.children);

    scrollerContect.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    })
  });

}
