document.addEventListener('DOMContentLoaded', function () {
  fetch('/components/tagPage/importantNews.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('important-news').innerHTML = data;
    })
    .catch(error => console.error('Error loading importantNews:', error));
});
