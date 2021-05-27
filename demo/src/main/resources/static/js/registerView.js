document.addEventListener("DOMContentLoaded", function(event) {



    var form = document.getElementById("registerForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        return validateForm();
    });
});

function validateForm() {
    try {
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var repeatedPassword = document.getElementById("repeatedPassword").value;
        if (password != repeatedPassword) {
            document.getElementById("password").setCustomValidity('Passwords Must be Matching.');
            document.getElementById("repeatedPassword").setCustomValidity('Passwords Must be Matching.');
            return false;
        } else {
        document.getElementById("password").setCustomValidity('');
        document.getElementById("repeatedPassword").setCustomValidity('');
        const data = { username: username,email: email, password: password};
        const address = '/api/register';

        fetch(address, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response =>
            response.json())
            .then(data => {
                if (typeof data=== 'string')
                alert(data);
                else{
                    console.log("Authenticated");
                    localStorage.setItem('token', data.jwttoken)
                    localStorage.setItem('username', username)
                    alert("Te has registrado correctamente")
                    document.location.href="/index.html";
                 }

            });
    }
    } catch (err) {
        console.error(err.message);
    }
    return false;
}