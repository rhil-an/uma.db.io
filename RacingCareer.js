
// Auto-open collapse based on URL hash
document.addEventListener('DOMContentLoaded', function () {
  function openCollapse() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element && element.classList.contains('collapse')) {
        const collapse = new bootstrap.Collapse(element, { show: true });
        // Smooth scroll to the element
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }

  // Run on initial load
  openCollapse();

  // Run when hash changes
  window.addEventListener('hashchange', openCollapse);
});
