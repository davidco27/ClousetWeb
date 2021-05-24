document.addEventListener("DOMContentLoaded", function(event) {

    var form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        return validateForm();
    });
});

function validateForm() {
    try {
        var username = document.getElementById("username").value;
        var tlf = document.getElementById("tlf").value;
        var issue = document.getElementById("issue").value;
        var message = document.getElementById("message").value;

        const data = { username: username, tlf: tlf, issue: issue, message: message};
        const address = 'http://localhost:8080/api/contact';

        fetch(address, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response => {if (response.ok) {document.location.href="index.html";} else {alert("Lo sentimos, pero el documento envíado no es válido");}})
            .then(data => {
                console.log(data);
            });

    } catch (err) {
        console.error(err.message);
    }
    return false;
}