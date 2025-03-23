document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/tagPage/pagination.html')
    .then(response => response.text())
    .then(data => {
      const paginationElement = document.getElementById('pagination');

      if (paginationElement) {
        paginationElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading pagination:', error));
});
