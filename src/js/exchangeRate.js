document.addEventListener('DOMContentLoaded', function () {
  const observer = new MutationObserver(mutationsList => {
    const exchangeRateElement = document.getElementById('exchange-rate');

    if (exchangeRateElement) {
      fetch('./components/exchangeRate.html')
        .then(response => response.text())
        .then(data => {
          exchangeRateElement.innerHTML = data;
        })
        .catch(error => console.error('Error loading exchangeRate:', error));

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
