// script.js
console.log('API AJAX call')
const result = document.getElementById('result');
document.getElementById('ReqresData').addEventListener('click', function() {
    // // GET request
    // var xhr = new XMLHttpRequest(); // create an object
    // xhr.open('GET', 'https://reqres.in/api/users?page=2'); //Open the port
    // xhr.send(); // send the request
    // xhr.onload = function() {
    //         var data = JSON.parse(xhr.responseText);
    //         console.log('API response', data)
    //         result.innerHTML = data.data;
    // };

    // POST request
    var xhr = new XMLHttpRequest(); // create an object
    userData = {
            name: "morpheus",
            job: "leader"
    }
    JsonUserData = JSON.stringify(userData);
    xhr.open('POST', 'https://reqres.in/api/users'); //Open the port
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(JsonUserData); // send the request
    xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);
            console.log('API response', data)
    };


});
