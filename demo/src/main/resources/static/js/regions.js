function getCountriesByRegion() {
    var region = document.getElementsByName("regiones")[0];
    var regionSelecionada=region.options[region.selectedIndex].value;
    fetch('http://localhost:8080/api/home/paises/' + regionSelecionada,
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
            console.log(setCountriesByRegion(r));
        })
        .catch(e => console.log(e));
}

function setCountriesByRegion(response){
    var html='';

    response.forEach(country => {
        if(country.name == "Spain")
            var linea= '<div class="card d-inline-block" style="width: 30%;margin-left: 1%; margin-bottom: 1%; color: #c77949; background-color: #f8c6a7;">' + country.name + '</div>'
        else
           var linea= '<div class="card d-inline-block" style="width: 30%;margin-left: 1%; margin-bottom: 1%; color: #f8c6a7; background-color: #7b360a;">' + country.name + '</div>'

        html = html + linea;
        console.log(country.name);
    });

    document.getElementById("paises").innerHTML=html;
}