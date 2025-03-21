import './interesting';

document.addEventListener('DOMContentLoaded', function () {
  fetch('/components/tagPage/allMaterials.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('all-materials').innerHTML = data;
    })
    .catch(error => console.error('Error loading allMaterials:', error));
});
