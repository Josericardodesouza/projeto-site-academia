

function calcular() {
    var peso = document.getElementById("entrada-peso").value;

    var altura = document.getElementById("entrada-altura").value;

    let imc = peso / (altura * 2);




    document.getElementById('saida').innerHTML = imc;


}

