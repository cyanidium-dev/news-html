document.addEventListener('DOMContentLoaded', function () {
  waitForElement('socialsMain', loadSocialElement);

  const observer = new MutationObserver(mutations => {
    for (let mutation of mutations) {
      if ([...mutation.addedNodes].some(node => node.id === 'socials')) {
        loadSocialElement('socials');
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});

function loadSocialElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    loadSocials(element);
  }
}

function loadSocials(targetElement) {
  fetch('./components/socials.html')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      targetElement.innerHTML = data;
    })
    .catch(error => console.error('Error loading socials:', error));
}

// Функція для очікування появи елемента в DOM
function waitForElement(id, callback) {
  const element = document.getElementById(id);
  if (element) {
    callback(id);
    return;
  }
  const observer = new MutationObserver(() => {
    const element = document.getElementById(id);
    if (element) {
      observer.disconnect();
      callback(id);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
