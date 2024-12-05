document.addEventListener("DOMContentLoaded", () => {
  const scripts = document.querySelectorAll('script[src]'); // Selecteer alle scripts met een 'src'
  
  scripts.forEach((script) => {
    const src = script.getAttribute('src');
    // Controleer of er al een querystring in de URL staat
    const versionedSrc = `${src}${src.includes('?') ? '&' : '?'}v=${new Date().toISOString().split('T')[0]}`;
    script.setAttribute('src', versionedSrc); // Update het src-attribuut met de versie
  });
});
