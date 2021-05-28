var usuario = localStorage.getItem('username');

if(usuario != null) {
    document.getElementById("nombreUsuario").innerHTML= "<em>" + usuario + "</em>";
 } else {
    document.location.href = 'login.html';
 }

var prendaId = getParameterByName("prendaId");
var outfitId = getParameterByName("outfitId");

if (prendaId != null) {
    getPrenda();
} else if (outfitId != null) {
    getOutfit();
}

var slider = document.getElementById("slider");
var output = document.getElementById("valoracion");
output.innerHTML = slider.value/10;
console.log(slider.value);

var valoracion = 0;

slider.oninput = function() {
    valoracion = parseFloat(this.value/10);
    output.innerHTML = this.value/10;
    console.log(valoracion);
}

function borrar() {
    if (prendaId != null) {
        borrarPrenda();
    } else if (outfitId != null) {
        borrarOutfit();
    }
}

function valorar() {
    if (prendaId != null) {
        valorarPrenda();
    } else if (outfitId != null) {
        valorarOutfit();
    }
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
            var div = '<div class="media" style="position: relative; cursor: pointer; margin-bottom: 2%;">';
            var imagen = '<img src="images/IconNavbar.png" width="5%" height="5%" class="mr-3 align-self-center" alt="Sample Image">';
            var div2 = '<div class="media-body">';
            var nombre = '<h4 class="mt-0"><strong>' + prenda.nombre + '</strong><small><i>   Añadida el ' + day + '/' + month + '/' + anio  + '</i></small></h4>';
            var valoracion = '<h6 class="mt-0"> Valoración: <u>' + prenda.valoracion + '</u> (' + prenda.nvaloraciones + ')</h6>';
            var color = '<h6 class="mt-0"> Color de la prenda: ' + prenda.color + '</h6>';
            var tipo = '<h6 class="mt-0"> Tipo de prenda: ' + prenda.tipo + '</h6>';
            var end = '</div>';

            html = html + div  + imagen + div2 + nombre + valoracion + color + tipo + end + end;

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
            var div = '<div class="media" style="position: relative; cursor: pointer; margin-bottom: 2%;">';
            var imagen = '<img src="images/IconNavbar.png" width="5%" height="5%" class="mr-3 align-self-center" alt="Sample Image">';
            var div2 = '<div class="media-body">';
            var nombre = '<h4 class="mt-0"><strong>' + outfit.nombre + '</strong><small><i>   Añadida el ' + day + '/' + month + '/' + anio  + '</i></small></h4>';
            var valoracion = '<h6 class="mt-0"> Valoración: <u>' + outfit.valoracion + '</u> (' + outfit.nvaloraciones + ')</h6>';
            var prendas = '<h6 class="mt-0"> Ids de las prendas: ' + outfit.id_prendas + '</h6>';
            var end = '</div>';

            html = html + div + imagen + div2 + nombre + valoracion + prendas + end + end;

            document.getElementById("infodetalle").innerHTML=html;
        })
        .catch(e => console.log(e));

}

function borrarPrenda() {
    fetch('http://localhost:8080/miarmario/prendas/' + prendaId,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
            .then(res => {
                if (res.ok) {
                    document.location.href="home.html";
                } else {
                    throw res;
                }
            })
            .catch(e => console.log(e));
}

function borrarOutfit() {
    fetch('http://localhost:8080/miarmario/outfits/' + outfitId,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    }
                })
                .then(res => {
                    if (res.ok) {
                        document.location.href="home.html";
                    } else {
                        throw res;
                    }
                })
                .catch(e => console.log(e));
}

function valorarPrenda(){

    fetch('http://localhost:8080/miarmario/prendas/' + prendaId + '?valoracion=' + valoracion,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
            .then(res => {
                if (res.ok) {
                    document.location.href="home.html";
                } else {
                    throw res;
                }
            })
            .catch(e => console.log(e));
}

function valorarOutfit(){

    fetch('http://localhost:8080/miarmario/outfits/' + outfitId + '?valoracion=' + valoracion,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
            .then(res => {
                if (res.ok) {
                    document.location.href="home.html";
                } else {
                    throw res;
                }
            })
            .catch(e => console.log(e));
}