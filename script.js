document.addEventListener('DOMContentLoaded', function () {
  const worldBankApiEndpoint = 'https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json';

  // Fetch population data from the World Bank API
  fetch(worldBankApiEndpoint)
    .then(response => response.json())
    .then(data => {
      // Extract the latest population data from the API response
      const latestData = data[1][0];
      const currentPopulation = latestData.value;

      // Use the population data to calculate the estimated people per second
      const weeklyIntercourse = (1 / 3) * currentPopulation;
      const perSecond = weeklyIntercourse / (7 * 24 * 60 * 60);

      // Display the result on the webpage
      const resultElement = document.getElementById('output');
      resultElement.textContent = perSecond.toFixed(2);
    })
    .catch(error => {
      console.error('Error fetching data from the World Bank API:', error);
      // Handle errors, e.g., display a message to the user
    });
});
