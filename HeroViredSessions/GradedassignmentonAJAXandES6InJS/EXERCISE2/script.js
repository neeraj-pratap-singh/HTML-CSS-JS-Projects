document.getElementById('addButton').addEventListener('click', function() {
    const countryName = document.getElementById('countryInput').value;
    fetchPopulation(countryName);
});

function fetchPopulation(countryName) {
    const headers = {
        'X-Api-Key': '+VdESuC5ub7ScN7BN4d45w==XnbjuMqAJEqVnpA8',
        'Content-Type': 'application/json'
    };

    fetch(`https://api.api-ninjas.com/v1/country?name=${countryName}`, {
        method: 'GET',
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Country not found');
        }
        return response.json();
    })
    .then(data => {
        console.log('result', data);
        // Assuming the API returns a population field
        const population = data[0].population; // Adjusted to handle array response
        addCountryToList(countryName, population);
    })
    .catch(error => {
        alert("Country not found. Please enter a valid country name.");
    });
}


function addCountryToList(countryName, population) {
    const listItem = document.createElement('li');
    listItem.textContent = `${countryName}: Population - ${population}`;
    document.getElementById('countryList').appendChild(listItem);
}
