document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/articlePage/service.html')
    .then(response => response.text())
    .then(data => {
      const serviceElement = document.getElementById('service');

      if (serviceElement) {
        serviceElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading service:', error));
});
