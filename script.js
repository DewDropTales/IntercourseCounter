document.addEventListener('DOMContentLoaded', function () {
  const worldometersEndpoint = 'https://www.worldometers.info/world-population/';

  // Fetch the HTML content of the Worldometer page
  fetch(worldometersEndpoint)
    .then(response => response.text())
    .then(html => {
      // Create a temporary DOM element to parse the HTML
      const tempElement = document.createElement('div');
      tempElement.innerHTML = html;

      // Find the element containing the world population
      const populationElement = tempElement.querySelector('.col-md-8.country-pop-description');

      // Extract the world population text
      const populationText = populationElement.textContent.trim();

      // Extract the numeric part from the text (assuming it's formatted like "Current World Population: 7,925,208,690")
      const currentPopulation = parseInt(populationText.replace(/[^0-9]/g, ''), 10);

      // Calculate and display the estimated people per second
      const weeklyIntercourse = (1 / 3) * currentPopulation;
      const perSecond = weeklyIntercourse / (7 * 24 * 60 * 60);

      // Display the result on the webpage
      const intercourseResultElement = document.getElementById('output');
      intercourseResultElement.textContent = perSecond.toFixed(2);
    })
    .catch(error => {
      console.error('Error fetching data from Worldometer:', error);
      // Handle errors, e.g., display a message to the user
    });
});
