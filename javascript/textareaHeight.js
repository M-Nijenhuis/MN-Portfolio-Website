document.addEventListener("DOMContentLoaded", () => {
  const textareas = document.querySelectorAll("textarea");

  textareas.forEach((textarea) => {
    // Stel een standaardhoogte in
    textarea.style.height = "80px";
    
    // Pas de hoogte aan op basis van de inhoud
    textarea.style.height = textarea.scrollHeight + "px";

    // Zorg dat de hoogte dynamisch blijft bij invoer
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  });
});
