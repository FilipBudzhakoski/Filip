document.addEventListener("DOMContentLoaded", function() {
    const resultsDiv = document.getElementById("results");
    const countryInput = document.getElementById("countryInput");
    const searchButton = document.getElementById("searchButton");
    const homeButton = document.getElementById("homeButton");
    const resetButton = document.getElementById("resetButton");
    const europeButton = document.getElementById("europeButton");
    const neighborsButton = document.getElementById("neighborsButton");
    const macedoniaButton = document.getElementById("macedoniaButton");

    function fetchAllCountries() {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => displayCountries(data))
            .catch(error => console.error("Error fetching all countries:", error));
    }

    
    fetchAllCountries();

    searchButton.addEventListener("click", function() {
        const searchValue = countryInput.value.trim();
        if (searchValue) {
            fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
                .then(response => response.json())
                .then(data => displayCountries(data))
                .catch(error => console.error("Error fetching country:", error));
        }
    });

    homeButton.addEventListener("click", function() {
        fetchAllCountries();
        countryInput.value = "";
    });

    resetButton.addEventListener("click", function() {
        resultsDiv.innerHTML = ""; 
        countryInput.value = "";
    });

    europeButton.addEventListener("click", function() {
        fetch("https://restcountries.com/v3.1/region/europe")
            .then(response => response.json())
            .then(data => displayCountries(data))
            .catch(error => console.error("Error fetching European countries:", error));
            countryInput.value = "";
    });

    neighborsButton.addEventListener("click", function() {
        fetch(`https://restcountries.com/v3.1/alpha/mkd`)
            .then(response => response.json())
            .then(data => {
                const neighbors = data[0].borders;
                if (neighbors) {
                    const neighborCountries = neighbors.map(alpha3Code =>
                        fetch(`https://restcountries.com/v3.1/alpha/${alpha3Code}`)
                            .then(response => response.json())
                            .catch(error => console.error(`Error fetching neighbor country with alpha3Code ${alpha3Code}:`, error))
                    );

                    Promise.all(neighborCountries).then(countries => {
                        const flattenedCountries = countries.flat();
                        displayCountries(flattenedCountries);
                    }).catch(error => console.error("Error fetching neighbor countries:", error));
                } else {
                    resultsDiv.innerHTML = "<p>Macedonia has no neighbors.</p>";
                }
            })
            .catch(error => console.error("Error fetching Macedonia data:", error));
    });

    macedoniaButton.addEventListener("click", function() {
        fetch("https://restcountries.com/v3.1/name/macedonia")
            .then(response => response.json())
            .then(data => displayCountries(data))
            .catch(error => console.error("Error fetching Macedonia data:", error));
    });

    function displayCountries(countries) {
        resultsDiv.innerHTML = ""; 
        countries.forEach(country => {
            const countryCard = document.createElement("div");
            countryCard.classList.add("country-card");

            const flag = country.flags.svg;
            const name = country.name.common;
            const population = country.population;
            const capital = country.capital ? country.capital[0] : "N/A";
            const languages = country.languages ? Object.values(country.languages).join(", ") : "N/A";
            const wikiLink = `https://en.wikipedia.org/wiki/${name}`;

            countryCard.innerHTML = `
                <img src="${flag}" alt="Flag of ${name}" width="100">
                <h2>${name}</h2>
                <p><strong>Population:</strong> ${population}</p>
                <p><strong>Capital:</strong> ${capital}</p>
                <p><strong>Languages:</strong> ${languages}</p>
                <a href="${wikiLink}" target="_blank">Open on Wikipedia</a>
            `;
            resultsDiv.appendChild(countryCard);
        });
    }
});