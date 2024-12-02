const navLinks = document.querySelectorAll(".nav-link");

function navHover() {

  //If the window is bigger than 1000px than execute the code
  if (window.innerWidth > 1000) {

    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        navLinks.forEach((otherLink) => {
          otherLink.style.opacity = 0.5;
        });
        link.style.opacity = 1;
      });

      link.addEventListener("mouseleave", () => {
        navLinks.forEach((otherLink) => {
          otherLink.style.opacity = 1;
        });
      });
    });
  }
}

navHover();

window.addEventListener("resize", navHover);
