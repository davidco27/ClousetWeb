var usuario = localStorage.getItem('username');

if(usuario != null)
    document.getElementById("nombreUsuario").innerHTML= "<em>" + usuario + "</em>";
else
    alert('No esta registrado');

tokenVerification();

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
            showPrendaInfo(r);
        })
        .catch(e => console.log(e));

}

function showPrendaInfo(response){
    var html='';
    response.forEach(prenda => {
        var date = new Date(prenda.fecha_creacion);
        var anio = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        var div = '<div class="media" style="position: relative; cursor: pointer;" onclick="window.location.href= \'detalle.html?prendaId=' + prenda.id + '\'">';
        var imagen = '<img src="images/IconNavbar.png" width="3%" height="3%" class="mr-3 align-self-center" alt="Sample Image">';
        var div2 = '<div class="media-body">';
        var nombre = '<h5 class="mt-0"><strong>' + prenda.nombre + '</strong><small><i>   Añadida el ' + day + '/' + month + '/' + anio  + '</i></small></h5>';
        var valoracion = '<h7 class="mt-0"> Valoración: <u>' + prenda.valoracion + '</u> (' + prenda.nvaloraciones + ')</h7>';
        var end = '</div>';
        var hr = '<hr>';

        html = html + div  + imagen + div2 + nombre + valoracion + end + end + hr;
    });

    document.getElementById("armario").innerHTML=html;
}

function getOutfits() {
    fetch('http://localhost:8080/miarmario/outfits?userId=' + usuario,
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
            showOutfitInfo(r);
        })
        .catch(e => console.log(e));

}

function showOutfitInfo(response){
    var html='';
    response.forEach(outfit => {
        var date = new Date(outfit.fecha_creacion);
        var anio = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        var div = '<div class="media" style="position: relative; cursor: pointer;" onclick="window.location.href= \'detalle.html?outfitId=' + outfit.id + '\'">';
        var imagen = '<img src="images/IconNavbar.png" width="3%" height="3%" class="mr-3 align-self-center" alt="Sample Image">';
        var div2 = '<div class="media-body">';
        var nombre = '<h5 class="mt-0"><strong>' + outfit.nombre + '</strong><small><i>   Añadida el ' + day + '/' + month + '/' + anio  + '</i></small></h5>';
        var valoracion = '<h7 class="mt-0"> Valoración: <u>' + outfit.valoracion + '</u> (' + outfit.nvaloraciones + ')</h7>';
        var end = '</div>';
        var hr = '<hr>';

        html = html + div  + imagen + div2 + nombre + valoracion + end + end + hr;
    });

    document.getElementById("armario").innerHTML=html;
}

function borrarPrenda() {
var id = localStorage.getItem('id');
fetch('http://localhost:8080/miarmario/prendas/'+id,
        {
            method: 'DELETE',
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
            document.location.href="home.html";
        })
        .catch(e => console.log(e));
}

function valorarPrenda(){
    var id = localStorage.getItem('id');
    fetch('http://localhost:8080/miarmario/prendas/'+id+'?valoracion=' + valoracion,
            {
                method: 'PUT',
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
                document.location.href="home.html";
            })
            .catch(e => console.log(e));
}
function tokenVerification() {

    if (typeof localStorage.getItem('token') === 'undefined') {
        console.log("Cookie not detected");
        console.log(Cookies.get('token'));
        document.location.href="login.html";
    }
    console.log("Cookie detected");
}

function openPrendaForm() {
    document.getElementById("newPrendaForm").style.display = "block";
    disableScroll();
}

function closePrendaForm() {
    document.getElementById("newPrendaForm").style.display = "none";
    enableScroll();
}

function openOutfitForm() {
    document.getElementById("newOutfitForm").style.display = "block";
    disableScroll();
}

function closeOutfitForm() {
    document.getElementById("newOutfitForm").style.display = "none";
    enableScroll();
}

function disableScroll(){
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){
    window.onscroll = null;
}