document.addEventListener("DOMContentLoaded", function(event) {

    // tokenVerification();

    var form = document.getElementById("registerForm");
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
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var repeatedPassword = document.getElementById("repeatedPassword").value;

        const data = { email: email, password: inputValue2, repeatedPassword: repeatedPassword};
        const address = '/api/register';

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
                    Cookies.set('token', data.jwttoken)
                    document.location.href="/home.html";
                } else {
                    alert("Credential not recognized");
                }
            });

    } catch (err) {
        console.error(err.message);
    }
    return false;
}