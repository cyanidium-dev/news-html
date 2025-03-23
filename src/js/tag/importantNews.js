document.addEventListener('DOMContentLoaded', function () {
  const importantNewsElement = document.getElementById('important-news');

  if (importantNewsElement) {
    fetch('./components/tagPage/importantNews.html')
      .then(response => response.text())
      .then(data => {
        importantNewsElement.innerHTML = data;
      })
      .catch(error => console.error('Error loading importantNews:', error));
  }
});
