document.addEventListener('DOMContentLoaded', function () {
  const exchangeForecastsElements = document.querySelectorAll(
    '.exchange-forecasts'
  );

  if (exchangeForecastsElements.length === 0) return;

  fetch('./components/mainPage/exchangeForecasts.html')
    .then(response => response.text())
    .then(data => {
      exchangeForecastsElements.forEach(element => {
        element.innerHTML = data;
      });
    })
    .catch(error => console.error('Error loading exchangeForecasts:', error));
});
