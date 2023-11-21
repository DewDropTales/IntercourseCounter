// Function to open a tab
function openTab(tabId) {
  const tabs = document.getElementsByClassName('tab');
  for (const tab of tabs) {
    tab.style.display = 'none';
  }
  document.getElementById(tabId).style.display = 'block';
}

// Function to calculate the estimated people per second
function calculatePeoplePerSecond(currentPopulation) {
  const weeklyIntercourse = (1 / 3) * currentPopulation;
  return weeklyIntercourse / (7 * 24 * 60 * 60);
}

// Function to calculate the estimated pregnancies per second
function calculatePregnanciesPerSecond(peoplePerSecond, pregnancyRate) {
  return peoplePerSecond * pregnancyRate;
}

// Function to display the results on the webpage
function displayResults(intercourseResultElementId, intercourseResult, pregnancyResultElementId, pregnancyResult) {
  const intercourseResultElement = document.getElementById(intercourseResultElementId);
  intercourseResultElement.textContent = intercourseResult.toFixed(2);

  const pregnancyResultElement = document.getElementById(pregnancyResultElementId);
  pregnancyResultElement.textContent = pregnancyResult.toFixed(2);
}

// Main function
window.onload = function() {
  // Fetch the current population from the iframe
  // Extract the population from the div
  const currentPopulation = 8073634500;

  // Calculate the estimated people per second
  const peoplePerSecond = calculatePeoplePerSecond(currentPopulation);

  // Calculate the estimated pregnancies per second
  const pregnancyRate = 0.1; // Adjust this rate as needed
  const pregnanciesPerSecond = calculatePregnanciesPerSecond(peoplePerSecond, pregnancyRate);

  // Display the results on the webpage
  displayResults('output', peoplePerSecond, 'pregnancyOutput', pregnanciesPerSecond);
}
