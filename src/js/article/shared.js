document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/articlePage/shared.html')
    .then(response => response.text())
    .then(data => {
      const sharedElement = document.getElementById('shared');

      if (sharedElement) {
        sharedElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading shared:', error));
});
