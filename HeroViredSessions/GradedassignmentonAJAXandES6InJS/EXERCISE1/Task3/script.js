document.addEventListener('DOMContentLoaded', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            updateRestaurantList(this);
        }
    };
    xhttp.open("GET", "restaurants.xml", true);
    xhttp.send();
});

function updateRestaurantList(xml) {
    var xmlDoc = xml.responseXML;
    var restaurants = xmlDoc.getElementsByTagName("restaurant");
    var html = "";

    for (let restaurant of restaurants) {
        let name = restaurant.getAttribute("name");
        let address = restaurant.getAttribute("address");
        let type = restaurant.getAttribute("type").toLowerCase().replace(/\s/g, '');

        html += `<li class="${type}">${name} - ${address}</li>`;
    }

    document.getElementById("restaurant-list").innerHTML = html;
}
