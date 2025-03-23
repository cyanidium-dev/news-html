document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/relatedNews.html')
    .then(response => response.text())
    .then(data => {
      const relatedNewsElements = document.querySelectorAll('.related-news');

      if (relatedNewsElements.length > 0) {
        relatedNewsElements.forEach(element => {
          element.innerHTML = data;
        });
      } else {
        console.warn('No elements with class .related-news found.');
      }
    })
    .catch(error => console.error('Error loading relatedNews:', error));
});
