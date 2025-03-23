document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/mainPage/lastNews.html')
    .then(response => response.text())
    .then(data => {
      const lastNewsElement = document.getElementById('last-news');

      if (lastNewsElement) {
        lastNewsElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading lastNews:', error));
});
