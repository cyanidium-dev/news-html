document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/articlePage/recommendations.html')
    .then(response => response.text())
    .then(data => {
      const recommendationsElement = document.getElementById('recommendations');

      if (recommendationsElement) {
        recommendationsElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading recommendations:', error));
});
