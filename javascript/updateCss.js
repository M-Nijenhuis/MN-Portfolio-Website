// Select all links in html with the rel="stylesheet"
const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');

// loop true all found links
cssLinks.forEach(link => {
  // checks if the href is a css file
  if (link.href.endsWith('.css')) {
    const currentTime = new Date().getTime();
    // update the href atribute with the string
    link.href = `${link.href.split('?')[0]}?v=${currentTime}`;
  }
});
