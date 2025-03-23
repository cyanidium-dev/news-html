document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/mainPage/editorsChoice.html')
    .then(response => response.text())
    .then(data => {
      const editorsChoiceElement = document.getElementById('editors-choice');

      if (editorsChoiceElement) {
        editorsChoiceElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading editorsChoice:', error));
});
