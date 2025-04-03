document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/articlePage/banner.html')
    .then(response => response.text())
    .then(data => {
      const bannerElement = document.getElementById('banner');

      if (bannerElement) {
        bannerElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading banner:', error));
});
