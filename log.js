$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        if (username == 'admin' && password == 'password') {
            alert('Login successful');
            window.location.href = 'dashboard.html'; //redirect to dashboard page
        } else {
            alert('Invalid username or password');
        }
    });
});