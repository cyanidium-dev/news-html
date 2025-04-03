document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/mainPage/importantNews.html')
    .then(response => response.text())
    .then(data => {
      const importantMainNewsElement = document.getElementById(
        'important-main-news'
      );

      if (importantMainNewsElement) {
        importantMainNewsElement.innerHTML = data;

        if (
          importantMainNewsElement.classList.contains('bordered') &&
          window.innerWidth >= 768
        ) {
          const listItems = importantMainNewsElement.querySelectorAll('li');
          listItems.forEach(item => {
            item.style.borderTop = '1px solid #E8E8E8';
            item.style.borderBottom = '1px solid #E8E8E8';
            item.style.borderRight = '1px solid #E8E8E8';
          });
        }
      }
    })
    .catch(error => console.error('Error loading importantMainNews:', error));
});
