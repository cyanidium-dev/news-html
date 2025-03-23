import './interesting';
import '../socials';

document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/tagPage/allMaterials.html')
    .then(response => response.text())
    .then(data => {
      const allMaterialsElement = document.getElementById('all-materials');

      if (allMaterialsElement) {
        allMaterialsElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading allMaterials:', error));
});
