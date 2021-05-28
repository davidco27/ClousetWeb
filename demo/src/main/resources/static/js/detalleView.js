var usuario = localStorage.getItem('username');

if(usuario != null)
    document.getElementById("nombreUsuario").innerHTML= "<em>" + usuario + "</em>";
else
    alert('No esta registrado');

var prendaId = getParameterByName("prendaId");
var outfitId = getParameterByName("outfitId");

if (prendaId != null) {
    getPrenda();
} else if (outfitId != null) {
    getOutfit();
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getPrenda() {
    fetch('http://localhost:8080/miarmario/prendas/' + prendaId + '?userId=' + usuario,
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
        .then(prenda => {

            var date = new Date(prenda.fecha_creacion);
            var anio = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();

            var html='';
            var div = '<div class="media" style="position: relative; cursor: pointer;">';
            var imagen = '<img src="images/IconNavbar.png" width="3%" height="3%" class="mr-3 align-self-center" alt="Sample Image">';
            var div2 = '<div class="media-body">';
            var nombre = '<h5 class="mt-0"><strong>' + prenda.nombre + '</strong><small><i>   Añadida el ' + day + '/' + month + '/' + anio  + '</i></small></h5>';
            var valoracion = '<h7 class="mt-0"> Valoración: <u>' + prenda.valoracion + '</u> (' + prenda.nvaloraciones + ')</h7>';
            var end = '</div>';

            html = html + div  + imagen + div2 + nombre + valoracion + end + end;

            document.getElementById("infodetalle").innerHTML=html;
        })
        .catch(e => console.log(e));

}

function getOutfit() {
    fetch('http://localhost:8080/miarmario/outfits/' + outfitId + '?userId=' + usuario,
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
        .then(outfit => {

            var date = new Date(outfit.fecha_creacion);
            var anio = date.getFullYear();
            var month = date.getMonth() + 1;
            var day = date.getDate();

            var html='';
            var div = '<div class="media" style="position: relative; cursor: pointer;" onclick="window.location.href= \'detalle.html\'">';
            var imagen = '<img src="images/IconNavbar.png" width="3%" height="3%" class="mr-3 align-self-center" alt="Sample Image">';
            var div2 = '<div class="media-body">';
            var nombre = '<h5 class="mt-0"><strong>' + outfit.nombre + '</strong><small><i>   Añadida el ' + day + '/' + month + '/' + anio  + '</i></small></h5>';
            var valoracion = '<h7 class="mt-0"> Valoración: <u>' + outfit.valoracion + '</u> (' + outfit.nvaloraciones + ')</h7>';
            var end = '</div>';

            html = html + div  + imagen + div2 + nombre + valoracion + end + end;

            document.getElementById("infodetalle").innerHTML=html;
        })
        .catch(e => console.log(e));

}
