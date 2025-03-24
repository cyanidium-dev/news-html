document.addEventListener('DOMContentLoaded', function () {
  const observer = new MutationObserver(mutationsList => {
    const exchangeRateElement = document.getElementById('exchange-rate');

    if (exchangeRateElement) {
      fetch('./components/exchangeRate.html')
        .then(response => response.text())
        .then(data => {
          exchangeRateElement.innerHTML = data;

          // Обертання стрілки
          const arrows = document.querySelectorAll('.arrow-icon');
          arrows.forEach(arrow => {
            arrow.addEventListener('click', function () {
              arrow.classList.toggle('rotate-180');
              arrow.classList.toggle('text-accent');
            });
          });

          // Зміна міжбанку на НБУ (моб)
          const monoDiv = document.getElementById('mono-div');
          const nbuDiv = document.getElementById('nbu-div');
          const toggleIcon = document.getElementById('toggle-icon');

          if (window.innerWidth <= 768 && toggleIcon && monoDiv && nbuDiv) {
            toggleIcon.addEventListener('click', function () {
              monoDiv.classList.toggle('hidden');
              nbuDiv.classList.toggle('hidden');
              nbuDiv.classList.toggle('flex');
              toggleIcon.classList.toggle('rotate-180');
            });
          }
        })
        .catch(error => console.error('Error loading exchangeRate:', error));

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
