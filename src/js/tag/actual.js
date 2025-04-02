document.addEventListener('DOMContentLoaded', function () {
  const observer = new MutationObserver(async mutationsList => {
    const actualElement = document.getElementById('actual');

    if (actualElement) {
      try {
        const response = await fetch('./components/tagPage/actual.html');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text();
        actualElement.innerHTML = data;
      } catch (error) {
        console.error('Error loading actual:', error);
      }

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
