const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    navLinks.forEach(otherLink => {
      otherLink.style.opacity = .5;
    });
    link.style.opacity = 1;
  });

  link.addEventListener('mouseleave', () => {

    navLinks.forEach(otherLink => {
      otherLink.style.opacity = 1;
    });
  });
});
