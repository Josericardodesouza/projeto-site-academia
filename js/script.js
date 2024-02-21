

function calcular() {
    var peso = document.getElementById("entrada-peso").value;

    var altura = document.getElementById("entrada-altura").value;

    var total = peso / (altura * altura);

    var imc = total.toFixed(1);

    if (imc < 17) {
        document.getElementById("saida").innerHTML = "Voce esta abaixo do peso"
    } else if (imc >= 17.0 && imc <= 19.0) {
        document.getElementById("saida").innerHTML = "Voce esta abaixo do peso"
    } else if (imc >= 18.50 && imc <= 25.0) {
        document.getElementById("saida").innerHTML = "Voce esta com o peso normal"
    } else if (imc >= 25.01 && imc <= 30.0) {
        document.getElementById("saida").innerHTML = "Voce esta acima do peso"
    } else if (imc >= 30.0 && imc <= 35.0) {
        document.getElementById("saida").innerHTML = "Obesidade 1"
    } else if (imc >= 35.01 && imc <= 40.0) {
        document.getElementById("saida").innerHTML = "Obesidade 2(severa)"
    } else if (imc >= 40.1) {
        document.getElementById("saida").innerHTML = "Obesidade 3(mórbida)"
    }

    

    document.getElementById("saida-frase").innerHTML = "O seu IMC é de " + imc
    document.getElementById("saida-form").innerHTML = "Fórmula: " + peso + " / (" + altura + " x 2)";

    }
