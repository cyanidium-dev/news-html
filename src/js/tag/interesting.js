document.addEventListener('DOMContentLoaded', function () {
  const observer = new MutationObserver(mutationsList => {
    const interestingElement = document.getElementById('interesting');

    if (interestingElement) {
      fetch('./components/tagPage/interesting.html')
        .then(response => response.text())
        .then(data => {
          interestingElement.innerHTML = data;
        })
        .catch(error => console.error('Error loading interesting:', error));

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
