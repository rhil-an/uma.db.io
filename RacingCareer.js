// Auto-open character profile based on URL hash
document.addEventListener('DOMContentLoaded', function () {
  const hash = window.location.hash.substring(1);
  if (hash) {
    const element = document.getElementById(hash);
    if (element && element.classList.contains('collapse')) {
      const collapse = new bootstrap.Collapse(element, { toggle:true});
      setTimeout(() => element.scrollIntoView({behavior: 'smooth', block: 'start'}), 100);
    }
  }
});