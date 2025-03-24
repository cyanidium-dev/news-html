document.addEventListener('DOMContentLoaded', function () {
  const observer = new MutationObserver(async mutationsList => {
    const interestingElement = document.getElementById('interesting');

    if (interestingElement) {
      try {
        const response = await fetch('./components/tagPage/interesting.html');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.text();
        interestingElement.innerHTML = data;
      } catch (error) {
        console.error('Error loading interesting:', error);
      }

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
