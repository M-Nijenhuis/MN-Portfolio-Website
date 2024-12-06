document.addEventListener('DOMContentLoaded', () => {
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


  document.querySelectorAll('script[src]').forEach(script => {
    if(script.src.endsWith('.js')) {
      const currentTime = new Date().getTime();
      script.src = `${script.src.split('?')[0]}?v=${currentTime}`;
    }
  });

});
