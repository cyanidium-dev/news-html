document.addEventListener('DOMContentLoaded', function () {
  loadtagElement('socialsMain');

  const observer = new MutationObserver(() => {
    console.log('Mutation detected');
    const mobElement = document.getElementById('socials');
    if (mobElement && !mobElement.innerHTML) {
      loadtagElement('socials');
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
    const response = await fetch('./components/socials.html');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.text();
    targetElement.innerHTML = data;
  } catch (error) {
    console.error('Error loading socials:', error);
  }
}
