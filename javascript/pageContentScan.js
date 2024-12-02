const footer = document.querySelector(".one-page-footer");

function checkIfScrollingIsNeeded() {
  const viewportHeight = window.innerHeight; // Zichtbare hoogte
  const contentHeight = document.documentElement.scrollHeight; // Totale inhoudshoogte

  if(!footer) {
    console.warn("Er is geen footer aangewezen!");
    return;
  }

  if (contentHeight > viewportHeight) {
    console.log("Scrollen is nodig.");
  
    footer.classList.remove("one-page-footer");

    return true; // Scrollen nodig
  } else {
    console.log("Alles past op de pagina.");

    footer.classList.add("one-page-footer");

    return false; // Geen scrollen nodig
  }
}

// Roep de functie aan
checkIfScrollingIsNeeded();

// Live checken bij resize en DOM veranderingen
function observeChanges() {
  // Check bij paginalaad
  checkIfScrollingIsNeeded();

  // Check bij vensterresizing
  window.addEventListener('resize', checkIfScrollingIsNeeded);

  // Gebruik een MutationObserver voor DOM-wijzigingen
  const observer = new MutationObserver(checkIfScrollingIsNeeded);
  observer.observe(document.body, { childList: true, subtree: true });
}

// Start de observer
observeChanges();
