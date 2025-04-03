document.addEventListener('DOMContentLoaded', function () {
  fetch('./components/articlePage/slider.html')
    .then(response => response.text())
    .then(data => {
      const sliderElement = document.getElementById('slider');

      if (sliderElement) {
        sliderElement.innerHTML = data;

        new Swiper('.main-slider', {
          loop: true,
          navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          },
          thumbs: {
            swiper: new Swiper('.thumb-slider', {
              slidesPerView: 3,
              spaceBetween: 10,
              watchSlidesProgress: true,
            }),
          },
        });
      }
    })
    .catch(error => console.error('Error loading slider:', error));
});
