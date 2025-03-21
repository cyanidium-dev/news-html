document.addEventListener('DOMContentLoaded', function () {
  fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-container').innerHTML = data;

      // Обробка навігаційних посилань
      const links = document.querySelectorAll('.footer-nav-link');
      links.forEach(link => {
        if (window.location.pathname === link.getAttribute('href')) {
          link.classList.add('text-mint', 'font-semibold');
        }
      });
    })
    .catch(error => console.error('Error loading footer:', error));
});
