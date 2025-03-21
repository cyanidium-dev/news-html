document.addEventListener('DOMContentLoaded', function () {
  fetch('/components/tagPage/pagination.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('pagination').innerHTML = data;
    })
    .catch(error => console.error('Error loading pagination:', error));
});
