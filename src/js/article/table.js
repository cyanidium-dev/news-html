document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/articlePage/table.html')
    .then(response => response.text())
    .then(data => {
      const tableElement = document.getElementById('table');

      if (tableElement) {
        tableElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading table:', error));
});
