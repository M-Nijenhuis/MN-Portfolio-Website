// Selecteer alle <link> tags met rel="stylesheet"
const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');

// Loop door alle gevonden <link> tags
cssLinks.forEach(link => {
  // Controleer of de href een CSS-bestand is
  if (link.href.endsWith('.css')) {
    const currentTime = new Date().getTime(); // Huidige tijd in milliseconden
    // Update het href-attribuut met een querystring
    link.href = `${link.href.split('?')[0]}?v=${currentTime}`;
  }
});
