var usuario = localStorage.getItem('username');
    var form = document.getElementById("newPrendaForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        return validateFormPrendas();
    });

function validateFormPrendas() {
    try {
        var name = document.getElementById("prendaName").value;
        var marca = document.getElementById("marca").value;
        var color = document.getElementById("color").value;
        var tipo= document.getElementById("tipo").value;
        var today = new Date();
        var id = Math.floor(Math.random() * 10000000);
        const data = {id: id, color: color,marca: marca,valoracion: 5,nvaloraciones : 0,nombre_usuario : usuario,
        tipo:tipo,nombre: name,fecha_creacion: today};
        const address = '/miarmario/prendas';

        fetch(address, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response =>{
            if (response.ok){
              alert('Prenda registrada correctamente');
              document.location.href="/home.html";
              }

            else
               alert('Ha habido un error al registrar la nueva prenda');
            })
            .then(data => {

            });
    } catch (err) {
        console.error(err.message);
    }
    return false;
}