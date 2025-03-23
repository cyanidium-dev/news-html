document.addEventListener('DOMContentLoaded', function () {
  loadSocialElement('socialsMain');

  const observer = new MutationObserver(() => {
    loadSocialElement('socials');
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
    .then(response => response.text())
    .then(data => {
      targetElement.innerHTML = data;
    })
    .catch(error => console.error('Error loading socials:', error));
}
