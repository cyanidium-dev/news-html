document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/articlePage/accentText.html')
    .then(response => response.text())
    .then(data => {
      const accentTextElement = document.getElementById('accent-text');

      if (accentTextElement) {
        accentTextElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading accentText:', error));
});
