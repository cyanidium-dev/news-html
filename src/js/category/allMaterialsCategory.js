import '../tag/interesting';
import '../socials';

document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/categoryPage/allMaterialsCategory.html')
    .then(response => response.text())
    .then(data => {
      const allMaterialsElement = document.getElementById(
        'all-materials-category'
      );

      if (allMaterialsElement) {
        allMaterialsElement.innerHTML = data;
      }
    })
    .catch(error =>
      console.error('Error loading allMaterialsCategory:', error)
    );
});
