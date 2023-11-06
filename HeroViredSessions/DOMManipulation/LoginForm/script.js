document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // TODO: Implement your validation or form submission here
    console.log('Email:', email);
    console.log('Password:', password);
  
    // Example: Alert the user
    alert('Login submitted for ' + email);
  });
  