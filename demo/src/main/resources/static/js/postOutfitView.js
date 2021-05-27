var usuario = localStorage.getItem('username');
    var form = document.getElementById("newOutfitForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        return validateForm();
    });
function validateForm() {
    try {
        var name = document.getElementById("name").value;
        var marca = document.getElementById("marca").value;
        var color = document.getElementById("color").value;
        var tipo= document.getElementById("tipo").value;
        var today = new Date();
        var id = Math.floor(Math.random() * 10000000);
        const data = {id: id, id_prendas: id_prendas, valoracion: 5, nombre_usuario: usuario, nvaloraciones : 0, nombre: name,
            fecha_creacion: today};
        const address = '/miarmario/outfits';

        fetch(address, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(response =>{
            if (response.ok){
              alert('Outfit registrado correctamente');
              document.location.href="/home.html";
              }

            else
               alert('Ha sucedido un error al registrar su nuevo outfit, por favor inténtelo más tarde');
            })
            .then(data => {

            });
    } catch (err) {
        console.error(err.message);
    }
    return false;
}