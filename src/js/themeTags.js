document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/themeTags.html')
    .then(response => response.text())
    .then(data => {
      const themeTagsElement = document.getElementById('theme-tags');

      if (themeTagsElement) {
        themeTagsElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading lastNews:', error));
});
