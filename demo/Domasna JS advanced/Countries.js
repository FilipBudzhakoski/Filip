async function getBorderingCountries(countryCode) {
    const countryApiUrl = `https://restcountries.com/v3.1/alpha/${countryCode}`;

    try {
        const response = await fetch(countryApiUrl);
        const countryData = await response.json();
        const country = countryData[0];

        console.log('Country:', country);

        const neighbours = country.borders;
        if (neighbours && neighbours.length > 0) {
            for (const neighbourCode of neighbours) {
                const neighbourResponse = await fetch(`https://restcountries.com/v3.1/alpha/${neighbourCode}`);
                const neighbourData = await neighbourResponse.json();
                console.log('Neighbour:', neighbourData[0]);
            }
        } else {
            console.log('No neighbouring countries found.');
        }
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}

getBorderingCountries('MKD');
