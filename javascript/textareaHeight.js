document.addEventListener("DOMContentLoaded", () => {
  const textareas = document.querySelectorAll("textarea");

  textareas.forEach((textarea) => {
    textarea.style.height = textarea.scrollHeight + "px"; // Stel initiële hoogte in
    textarea.addEventListener("input", (event) => {
      textarea.style.height = "auto"; // Reset hoogte
      textarea.style.height = textarea.scrollHeight + "px"; // Pas aan aan inhoud
    });
  });
});
