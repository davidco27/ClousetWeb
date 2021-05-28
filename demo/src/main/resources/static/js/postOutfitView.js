var usuario = localStorage.getItem('username');
    var form = document.getElementById("newOutfitForm");
    var valores=[];
    var select;
    var prendasUsuario;
    getPrendas();
 function createSelect(prendas){
  prendasUsuario=prendas;
    prendas.forEach(r=>{
    valores.push(r.nombre);
    })
         select = document.createElement("select");
        select.name = "choices";
        select.id = "prendas"
        select.multiple =true;
    for (const val of valores)
        {
            var option = document.createElement("option");
            option.value = val;
            option.text = val.charAt(0).toUpperCase() + val.slice(1);
            select.appendChild(option);
        }

      document.getElementById("eleccionPrendas").appendChild(select);
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        return validateForm();
    });}
function validateForm() {
    try {
         var selecciones =getSelectValues(select,prendasUsuario);
         var id_prendas = "";
         selecciones.forEach(prenda=>{
         id_prendas+=prenda.id;
         })
        var name = document.getElementById("outfitName").value;
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
function getPrendas() {
    fetch('http://localhost:8080/miarmario/prendas?userId=' + usuario,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw res;
            }
        })
        .then(r => {
        console.log(r);
            createSelect(r);
        })
        .catch(e => console.log(e));
}
function getSelectValues(select,prendas) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i=0, iLen=options.length; i<iLen; i++) {
    opt = options[i];
    if (opt.selected) {
      result.push(prendas[i]);
    }
  }
  return result;
}