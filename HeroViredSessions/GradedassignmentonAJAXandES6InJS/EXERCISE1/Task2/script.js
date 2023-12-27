document.addEventListener('DOMContentLoaded', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayData(this);
        }
    };
    xhttp.open("GET", "restaurants.xml", true);
    xhttp.send();
});

function displayData(xml) {
    var xmlDoc = xml.responseXML;
    var txt = "";
    var restaurants = xmlDoc.getElementsByTagName("restaurant");
    
    for (let restaurant of restaurants) {
        txt += "Name: " +
            restaurant.getAttribute("name") +
            "<br>Address: " +
            restaurant.getAttribute("address") +
            "<br>Latitude: " +
            restaurant.getAttribute("lat") +
            "<br>Longitude: " +
            restaurant.getAttribute("lng") +
            "<br>Type: " +
            restaurant.getAttribute("type") +
            "<br><br>";
    }
    document.getElementById("restaurant-info").innerHTML = txt;
}
