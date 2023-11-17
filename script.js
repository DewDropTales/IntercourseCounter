document.addEventListener('DOMContentLoaded', function () {
  const worldBankApiEndpoint = 'https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json';

  // Fetch population data from the World Bank API
  fetch(worldBankApiEndpoint)
    .then(response => response.json())
    .then(data => {
      const latestData = data[1][0];
      const currentPopulation = latestData.value;

      // Calculate the estimated people per second
      const weeklyIntercourse = (1 / 3) * currentPopulation;
      const perSecond = weeklyIntercourse / (7 * 24 * 60 * 60);

      // Display the result on the webpage
      const intercourseResultElement = document.getElementById('output');
      intercourseResultElement.textContent = perSecond.toFixed(2);

      // Calculate the estimated pregnancies per second
      const pregnancyRate = 0.1; // Adjust this rate as needed
      const pregnanciesPerSecond = perSecond * pregnancyRate;

      // Display the pregnancy result on the webpage
      const pregnancyResultElement = document.getElementById('pregnancyOutput');
      pregnancyResultElement.textContent = pregnanciesPerSecond.toFixed(2);
    })
    .catch(error => {
      console.error('Error fetching data from the World Bank API:', error);
      // Handle errors, e.g., display a message to the user
    });
});

function openTab(tabId) {
  const tabs = document.getElementsByClassName('tab');
  for (const tab of tabs) {
    tab.style.display = 'none';
  }
  document.getElementById(tabId).style.display = 'block';
}
