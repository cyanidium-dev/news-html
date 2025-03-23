document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/mainPage/columns.html')
    .then(response => response.text())
    .then(data => {
      const columnsElement = document.getElementById('columns');

      if (columnsElement) {
        columnsElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading columns:', error));
});
