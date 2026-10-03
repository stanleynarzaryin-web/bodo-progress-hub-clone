const year = new Date().getFullYear();

// Update footer year if desired.
const footer = document.querySelector('.site-footer p');
if (footer && footer.textContent.includes('©')) {
  footer.textContent = `© ${year} Bodo Progress Hub`;
}

