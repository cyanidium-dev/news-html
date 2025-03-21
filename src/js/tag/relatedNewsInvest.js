document.addEventListener('DOMContentLoaded', function () {
  fetch('/components/tagPage/relatedNewsInvest.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('related-news-invest').innerHTML = data;
      document.getElementById('related-news-finance').innerHTML = data;
    })
    .catch(error => console.error('Error loading relatedNewsInvest:', error));
});
