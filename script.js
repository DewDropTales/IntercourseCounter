function openTab(tabId) {
  const tabs = document.getElementsByClassName('tab');
  for (const tab of tabs) {
    tab.style.display = 'none';
  }
  document.getElementById(tabId).style.display = 'block';
}

window.onload = function() {
  // Fetch the current population from the iframe

  // Extract the population from the div
  const currentPopulation = 8073634500;

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
}
