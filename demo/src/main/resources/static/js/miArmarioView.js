var usuario = localStorage.getItem('username');
document.getElementById("nombreUsuario").innerHTML= "<em>" + usuario + "</em>";
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
        var div = '<div class="media">';
        // var link = '<a href="detalle.html" id="link"></a>';
        var imagen = '<img src="images/IconNavbar.png" width="3%" height="3%" class="mr-3 align-self-center" alt="Sample Image">';
        var div2 = '<div class="media-body">';
        var foo = '<h5 class="mt-0">Jhon Carter <small><i>Posted on January 10, 2019</i></small></h5>';
        var nombre = '<p>' + prenda.nombre + '</p>';
        var marca = '<p>' + prenda.marca + '</p>';
        var valoracion = '<p>' + prenda.valoracion + '</p>';
        var end = '</div>';

        // html = html + div + link + imagen + div2 + foo + nombre + marca + valoracion + end + end;
        html = html + div  + imagen + div2 + foo + nombre + marca + valoracion + end + end;
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
        var div = '<div class="media">';
        // var link = '<a href="detalle.html" id="link"></a>';
        var imagen = '<img src="images/IconNavbar.png" width="3%" height="3%" class="mr-3 align-self-center" alt="Sample Image">';
        var div2 = '<div class="media-body">';
        var nombre = '<p>' + outfit.nombre + '</p>';
        var valoracion = '<p>' + outfit.valoracion + '</p>';
        var end = '</div>';

        // html = html + div + link + div2 + nombre + valoracion + end + end;
        html = html + div + imagen + div2 + nombre + valoracion + end + end;
    });

    document.getElementById("armario").innerHTML=html;
}
function tokenVerification() {

    if (typeof localStorage.getItem('token') === 'undefined') {
        console.log("Cookie not detected");
        console.log(Cookies.get('token'));
        document.location.href="login.html";
    }
    console.log("Cookie detected");
}