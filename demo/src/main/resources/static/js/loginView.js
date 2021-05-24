document.addEventListener("DOMContentLoaded", function(event) {

    // tokenVerification();

    var form = document.getElementById("loginForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        return validateForm();
    });
});


function tokenVerification() {

    if (typeof Cookies.get('token') !== 'undefined') {
        console.log("Cookie detected");
        document.location.href="home.html";
    }
}

function validateForm() {
    try {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // FUTURO: Introducir la logica asociada a recordar contraseña

        const data = { username: username, password: password};
        const address = '/api/login';

        fetch(address, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (typeof data.jwttoken !== 'undefined') {
                    console.log("Authenticated");
                    Cookies.set('token', data.jwttoken);
                    document.location.href="/index.html";
                } else {
                    alert("Credential not recognized");
                }
            });

    } catch (err) {
        console.error(err.message);
    }
    return false;
}