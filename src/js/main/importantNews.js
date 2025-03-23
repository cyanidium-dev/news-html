document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/mainPage/importantNews.html')
    .then(response => response.text())
    .then(data => {
      const importantMainNewsElement = document.getElementById(
        'important-main-news'
      );

      if (importantMainNewsElement) {
        importantMainNewsElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading importantMainNews:', error));
});
