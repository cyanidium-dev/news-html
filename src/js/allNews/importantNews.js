document.addEventListener('DOMContentLoaded', function () {
  const importantNewsElement = document.getElementById('important-news-all');

  if (importantNewsElement) {
    fetch('./components/allNews/importantNews.html')
      .then(response => response.text())
      .then(data => {
        importantNewsElement.innerHTML = data;
      })
      .catch(error => console.error('Error loading importantNews:', error));
  }
});
