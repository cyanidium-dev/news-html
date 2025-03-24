document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/categoryPage/columnsCategory.html')
    .then(response => response.text())
    .then(data => {
      const columnsElement = document.getElementById('columns-category');

      if (columnsElement) {
        columnsElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading columnsCategory:', error));
});
