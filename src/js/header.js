document.addEventListener('DOMContentLoaded', function () {
  // Завантажуємо вміст header.html і вставляємо його в контейнер
  fetch('/components/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-container').innerHTML = data;

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
          searchInput.classList.remove('hidden'); // Завжди показуємо інпут
        } else {
          searchInput.classList.add('hidden'); // Ховаємо інпут на мобільних
        }
      }

      if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', function () {
          if (window.innerWidth <= 768) {
            searchInput.classList.toggle('hidden'); // Показати/сховати на моб
            searchInput.focus(); // Фокус при відкритті
          }
        });

        // Виконуємо перевірку при завантаженні
        updateSearchVisibility();

        // Перевіряємо розмір екрану при зміні ширини вікна
        window.addEventListener('resize', updateSearchVisibility);
      }

      // Логіка бургер-меню
      const burgerIcon = document.getElementById('burger-icon');
      const mobileMenu = document.getElementById('mobile-menu');
      const closeMenu = document.getElementById('close-menu');

      if (burgerIcon && mobileMenu && closeMenu) {
        burgerIcon.addEventListener('click', function () {
          mobileMenu.classList.remove('translate-x-full');
        });

        closeMenu.addEventListener('click', function () {
          mobileMenu.classList.add('translate-x-full');
        });

        // Закриття меню при кліку на будь-яке посилання
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
          link.addEventListener('click', function () {
            mobileMenu.classList.add('translate-x-full');
          });
        });
      }

      // обертання стрілки
      const arrows = document.querySelectorAll('.arrow-icon');
      arrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
          arrow.classList.toggle('rotate-180');
          arrow.classList.toggle('text-accent');
        });
      });

      // зміна міжбанку на нбу (моб)
      const monoDiv = document.getElementById('mono-div');
      const nbuDiv = document.getElementById('nbu-div');
      const toggleIcon = document.getElementById('toggle-icon');

      if (window.innerWidth <= 768) {
        // Додаємо обробник події на клік для стрілки
        toggleIcon.addEventListener('click', function () {
          // Якщо monoDiv видимий, приховуємо його та показуємо nbuDiv
          if (monoDiv.classList.contains('hidden')) {
            monoDiv.classList.remove('hidden');
            nbuDiv.classList.add('hidden');
            toggleIcon.classList.toggle('rotate-180');
          } else {
            // Інакше робимо навпаки
            monoDiv.classList.add('hidden');
            nbuDiv.classList.remove('hidden');
            nbuDiv.classList.add('flex');
            toggleIcon.classList.toggle('rotate-180');
          }
        });
      }
    })
    .catch(error => console.error('Error loading header:', error));
});
