document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/mainPage/blog.html')
    .then(response => response.text())
    .then(data => {
      const blogElement = document.getElementById('blog');
      const blogDeskElement = document.getElementById('blogDesk');

      if (blogElement) {
        blogElement.innerHTML = data;
      }

      if (blogDeskElement) {
        blogDeskElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading blog:', error));
});
