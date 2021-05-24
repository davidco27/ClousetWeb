function getCountryByName() {
    var pais = document.getElementById("busqueda");
    fetch('http://localhost:8080/api/detalle/' + pais.value,
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
            console.log(showCountryInfo(r));
        })
        .catch(e => console.log(e););

}

function showCountryInfo(response){
    var html='';
    response.forEach(country => {
        var div = '<div class="container-fluid mt-3 ml-8">';
        var linea1= '<div class="card d-inline-block" style="width: 23%;margin-left: 1%; margin-bottom: 1%; color: #c77949; background-color: #f8c6a7;">' + country.name + '</div>'
        var linea2= '<div class="card d-inline-block" style="width: 23%;margin-left: 1%; margin-bottom: 1%; color: #f8c6a7; background-color: #7b360a;">' + country.region + '</div>'
        var linea3= '<div class="card d-inline-block" style="width: 23%;margin-left: 1%; margin-bottom: 1%; color: #f8c6a7; background-color: #7b360a;">' + country.subregion + '</div>'
        var linea4= '<div class="card d-inline-block" style="width: 23%;margin-left: 1%; margin-bottom: 1%; color: #f8c6a7; background-color: #7b360a;">' + country.demonym + '</div>'
        var end = '</div>';

        html = html + div + linea1 + linea2 + linea3 + linea4 + end;
    });
    document.getElementById("pais").innerHTML=html;
}