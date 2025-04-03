document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/articlePage/video.html')
    .then(response => response.text())
    .then(data => {
      const videoElement = document.getElementById('video');

      if (videoElement) {
        videoElement.innerHTML = data;
      }
    })
    .catch(error => console.error('Error loading video:', error));
});
