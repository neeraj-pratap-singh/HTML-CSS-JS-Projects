document.addEventListener('DOMContentLoaded', function() {
    fetch('restaurants.xml')
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xml = parser.parseFromString(data, "application/xml");
            displayData(xml);
        })
        .catch(error => console.error('Error in fetching XML:', error));
});

function displayData(xml) {
    const restaurantsElement = document.getElementById('restaurant-data');
    const restaurants = xml.getElementsByTagName('restaurant');
    
    for (let restaurant of restaurants) {
        const name = restaurant.getElementsByTagName('name')[0].textContent;
        const cuisine = restaurant.getElementsByTagName('cuisine')[0].textContent;
        const rating = restaurant.getElementsByTagName('rating')[0].textContent;

        const restaurantDiv = document.createElement('div');
        restaurantDiv.innerHTML = `<h2>${name}</h2><p>Cuisine: ${cuisine}</p><p>Rating: ${rating}</p>`;
        restaurantsElement.appendChild(restaurantDiv);
    }
}
