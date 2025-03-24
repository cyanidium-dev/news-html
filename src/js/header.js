import './themeTags';
import './exchangeRate';

document.addEventListener('DOMContentLoaded', function () {
  const headerContainer = document.getElementById('header-container');

  if (!headerContainer) {
    console.warn('Header container not found.');
    return;
  }

  fetch('./components/header.html')
    .then(response => response.text())
    .then(data => {
      headerContainer.innerHTML = data;

      // Обробка навігаційних посилань
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        if (window.location.pathname === link.getAttribute('href')) {
          link.classList.add('text-accent', 'font-semibold');
        }
      });

      // Логіка для пошуку
      const searchIcon = document.getElementById('search-icon');
      const searchInput = document.getElementById('search-input');

      function updateSearchVisibility() {
        if (window.innerWidth > 768) {
          searchInput?.classList.remove('hidden'); // Завжди показуємо інпут
        } else {
          searchInput?.classList.add('hidden'); // Ховаємо інпут на мобільних
        }
      }

      if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', function () {
          if (window.innerWidth <= 768) {
            searchInput.classList.toggle('hidden'); // Показати/сховати на моб
            searchInput.focus(); // Фокус при відкритті
          }
        });

        updateSearchVisibility();
        window.addEventListener('resize', updateSearchVisibility);
      }

      // Логіка бургер-меню
      const burgerIcon = document.getElementById('burger-icon');
      const mobileMenu = document.getElementById('mobile-menu');

      function toggleMenu() {
        const isOpen = mobileMenu?.classList.contains('translate-y-[11%]');

        burgerIcon?.classList.toggle('open', !isOpen);
        mobileMenu?.classList.toggle('translate-y-[11%]', !isOpen);
        mobileMenu?.classList.toggle('-translate-y-full', isOpen);

        document.body.style.overflow = isOpen ? '' : 'hidden';
      }

      if (burgerIcon && mobileMenu) {
        burgerIcon.addEventListener('click', toggleMenu);
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
          link.addEventListener('click', toggleMenu);
        });
      }
    })
    .catch(error => console.error('Error loading header:', error));
});
