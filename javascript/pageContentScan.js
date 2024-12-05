const footer = document.querySelector(".one-page-footer");

// This function checkes if you can scroll in the page or not
function checkIfScrollingIsNeeded() {
  setTimeout(() => {
    let viewportHeight = window.innerHeight;
    let contentHeight = document.documentElement.scrollHeight;

    if (!footer) {
      console.warn("Er is geen footer aangewezen!");
      return;
    }

    if (contentHeight > viewportHeight) {
      console.log("Scrollen is nodig.");

      footer.classList.remove("one-page-footer");
    } else {
      console.log("Alles past op de pagina.");

      footer.classList.add("one-page-footer");
    }
  }, 20);
}

// This function checks if the page changes width and if it does it calls the check if scrolling needed function
function observeChanges() {
  // Calls the function on the beginning of the load
  checkIfScrollingIsNeeded();

  // checks if the window gets rezized
  window.addEventListener("resize", checkIfScrollingIsNeeded);

  // uses a MutationObserver for DOM-changes
  const observer = new MutationObserver(checkIfScrollingIsNeeded);
  observer.observe(document.body, { childList: true, subtree: true });
}

observeChanges();
