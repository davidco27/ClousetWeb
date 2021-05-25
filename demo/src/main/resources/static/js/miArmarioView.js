var usuario = Cookies.get('username');
document.getElementById("nombreUsuario").innerHTML= "<em>" + usuario + "</em>";

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
            console.log(showPrendaInfo(r));
        })
        .catch(e => console.log(e));

}

function showPrendaInfo(response){
    var html='';
    response.forEach(prenda => {
        var div = '<div class="container-fluid mt-3 ml-8" id="info">';
        var link = '<a href="#" id="link"></a>';
        var imagen = '<img src="#" alt="una imagen">';
        var nombre = '<p>' + prenda.nombre + '</p>';
        var marca = '<p>' + prenda.marca + '</p>';
        var valoracion = '<p>' + prenda.valoracion + '</p>';
        var end = '</div>';

        html = html + div + link + imagen + nombre + marca + valoracion + end;
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
            console.log(showOutfitInfo(r));
        })
        .catch(e => console.log(e));

}

function showOutfitInfo(response){
    var html='';
    response.forEach(outfit => {
        var div = '<div class="container-fluid mt-3 ml-8" id="info">';
        var link = '<a href="#" id="link"></a>';
        var imagen = '<img src="#" alt="una imagen">';
        var nombre = '<p>' + outfit.nombre + '</p>';
        var valoracion = '<p>' + outfit.valoracion + '</p>';
        var end = '</div>';

        html = html + div + link + imagen + nombre + valoracion + end;
    });

    document.getElementById("armario").innerHTML=html;
}