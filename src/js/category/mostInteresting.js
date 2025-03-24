document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/categoryPage/mostInteresting.html')
    .then(response => response.text())
    .then(data => {
      const mostInterestingElement =
        document.getElementById('most-interesting');

      if (mostInterestingElement) {
        mostInterestingElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading mostInteresting:', error));
});
