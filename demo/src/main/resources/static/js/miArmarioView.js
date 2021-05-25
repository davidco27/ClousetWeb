var usuario = Cookies.get('username');
document.getElementById("nombreUsuario").innerHTML= "<em>"+usuario"</em>";

function getPrendas() {
    fetch('http://localhost:8080/miarmario/prendas?userId=' + usuario
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
        .catch(e => console.log(e););

}

function showPrendaInfo(response){
    var html='';
    response.forEach(prenda => {
        var div = '<div class="container-fluid mt-3 ml-8">';
        var linea1= '<div class="card d-inline-block" style="width: 23%;margin-left: 1%; margin-bottom: 1%; color: #c77949; background-color: #f8c6a7;">' + prenda.id + '</div>'
        var linea2= '<div class="card d-inline-block" style="width: 23%;margin-left: 1%; margin-bottom: 1%; color: #f8c6a7; background-color: #7b360a;">' + prenda.color + '</div>'
        var linea3= '<div class="card d-inline-block" style="width: 23%;margin-left: 1%; margin-bottom: 1%; color: #f8c6a7; background-color: #7b360a;">' + prenda.valoracion + '</div>'
        var linea4= '<div class="card d-inline-block" style="width: 23%;margin-left: 1%; margin-bottom: 1%; color: #f8c6a7; background-color: #7b360a;">' + prenda.marca + '</div>'
        var end = '</div>';

        html = html + div + linea1 + linea2 + linea3 + linea4 + end;
    });
    document.getElementById("armario").innerHTML=html;
}

function getOutfits() {
    fetch('http://localhost:8080/miarmario/outfits?userId=' + usuario
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
        .catch(e => console.log(e););

}