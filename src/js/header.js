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

      // Обробка активного посилання в навігації
      const links = document.querySelectorAll('.nav-link');
      links.forEach(link => {
        if (window.location.pathname === link.getAttribute('href')) {
          link.classList.add('text-accent', 'font-semibold');
        }
      });

      // Логіка пошуку
      const searchIcon = document.getElementById('search-icon');
      const searchInput = document.getElementById('search-input');
      const closeIcon = document.getElementById('close-icon');
      const searchContainer = document.getElementById('search-container');

      function openSearch() {
        searchContainer.classList.remove('-translate-y-full'); // Відкриваємо пошук
        searchContainer.classList.remove('hidden');
        searchInput.focus();
      }

      function closeSearch() {
        searchInput.value = ''; // Очищуємо введене значення
        searchContainer.classList.add('-translate-y-full'); //
      }

      if (searchIcon) {
        searchIcon.addEventListener('click', openSearch);
      }

      if (closeIcon) {
        closeIcon.addEventListener('click', closeSearch);
      }

      // Закриття при кліку поза пошуком
      document.addEventListener('click', function (event) {
        if (
          !searchContainer.contains(event.target) &&
          !searchIcon.contains(event.target)
        ) {
          closeSearch();
        }
      });

      // Закриття при натисканні Escape
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          closeSearch();
        }
      });

      // Логіка бургер-меню
      const burgerIcon = document.getElementById('burger-icon');
      const mobileMenu = document.getElementById('mobile-menu');

      function toggleMenu() {
        const isOpen = mobileMenu?.classList.contains('translate-y-[12%]');

        burgerIcon?.classList.toggle('open', !isOpen);
        mobileMenu?.classList.toggle('translate-y-[12%]', !isOpen);
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
