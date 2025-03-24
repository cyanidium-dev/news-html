document.addEventListener('DOMContentLoaded', function () {
  loadtagElement('theme-tags');

  const observer = new MutationObserver(() => {
    console.log('Mutation detected');
    const mobElement = document.getElementById('theme-tags-mob');
    if (mobElement && !mobElement.innerHTML) {
      loadtagElement('theme-tags-mob');
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

function loadtagElement(elementId) {
  const element = document.getElementById(elementId);
  if (element && !element.innerHTML) {
    loadtags(element);
  }
}

async function loadtags(targetElement) {
  try {
    const response = await fetch('./components/themeTags.html');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.text();
    targetElement.innerHTML = data;
  } catch (error) {
    console.error('Error loading tags:', error);
  }
}
