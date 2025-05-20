// Fetch current world population and calculate estimated intercourse per second
async function updateCounter() {
    try {
        // Fetch world population data from a reliable API
        const response = await fetch('get-population.p.rapidapi.com/population', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b604471a9emshdb762ec2610aedcp14b2a4jsnc57f98c05da3',
                'X-RapidAPI-Host': get-population.p.rapidapi.com'
            }
        });
        const data = await response.json();
        const population = data.body.population;

        // Assume average intercourse acts per person per year (for sexually active adults)
        const avgActsPerPersonPerYear = 75; // Adjustable between 50-100
        const activePopulation = population * 0.35; // 35% of the population is sexually active
        const totalActsPerYear = avgActsPerPersonPerYear * activePopulation;

        // Convert total yearly acts to per second
        const actsPerSecond = totalActsPerYear / (365.25 * 24 * 60 * 60);

        // Update the live counter on the page
        setInterval(() => {
            document.getElementById('live-counter').textContent = (actsPerSecond).toFixed(2);
        }, 1000); // Update every second
    } catch (error) {
        console.error('Error fetching population data:', error);
    }
}

// Initialize the update
updateCounter();