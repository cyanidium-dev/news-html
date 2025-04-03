document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/articlePage/accentWhiteText.html')
    .then(response => response.text())
    .then(data => {
      const accentTextWhiteElement =
        document.getElementById('accent-white-text');

      if (accentTextWhiteElement) {
        accentTextWhiteElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading accentWhiteText:', error));
});
