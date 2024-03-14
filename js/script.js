
function aparecer () {
    var dado1 = document.getElementById("entrada-peso").value;
    var dado2 = document.getElementById("entrada-altura").value;
    var botao = document.getElementById("executar");
    var container = document.getElementById("section-oculta")

    botao.addEventListener('click', function() {
        if (dado1 > 0 && dado2 > 0) {
            container.style.display = 'block'
        } else {
            container.style.display = 'none'
        }
    }
    )



    // botao.addEventListener('click', function(){
    //     if(container.style.display == 'block') {
    //         container.style.display = 'none';
    //     } else {
    //         container.style.display = 'block';
    //     }
    // })

}
    


 function calcular() {

    var peso = document.getElementById("entrada-peso").value;

    var altura = document.getElementById("entrada-altura").value;

    var total = peso / (altura * altura);

    var imc = total.toFixed(1);

    if (imc < 17) {
        document.getElementById("saida-frase").innerHTML = "Voce esta muito abaixo do peso"
    } else if (imc >= 17.0 && imc <= 19.0) {
        document.getElementById("saida-frase").innerHTML = "Voce esta abaixo do peso"
    } else if (imc >= 18.50 && imc <= 25.0) {
        document.getElementById("saida-frase").innerHTML = "Voce esta com o peso normal"
    } else if (imc >= 25.01 && imc <= 30.0) {
        document.getElementById("saida-frase").innerHTML = "Voce esta acima do peso"
    } else if (imc >= 30.0 && imc <= 35.0) {
        document.getElementById("saida-frase").innerHTML = "Obesidade 1"
    } else if (imc >= 35.01 && imc <= 40.0) {
        document.getElementById("saida-frase").innerHTML = "Obesidade 2(severa)"
    } else if (imc >= 40.1) {
        document.getElementById("saida-frase").innerHTML = "Obesidade 3(mórbida)"
    }
    document.getElementById("saida-res").innerHTML = "O seu IMC é de " + imc
    document.getElementById("saida-form").innerHTML = "Fórmula: " + peso + " / (" + altura + " x 2)";
 }


 function resetar() {
    // var entPeso = document.getElementById('entrada-peso').value
    // var entAltura = document.getElementById('entrada-altura').value
    var container = document.getElementById("section-oculta");
    var divSaida = document.getElementById("saida")
     if(container.style.display == 'block') {
            document.getElementById('saida-res').innerHTML = "";
            document.getElementById('saida-frase').innerHTML = "";
            document.getElementById('saida-form').innerHTML = "";
            divSaida.style.display = 'none';


     }

            // box = document.getElementById('div-saida')
            // if (box.style.display == 'block') {
            //     box.style.display = 'none'
            // } else {
            //     box.style.display = 'block'
            // }
            // }


 }














// var btn = document.querySelector("botao");
// var resultado = document.querySelector("container-saida");

// btn.addEventListener('click', function(){
//    if (resultado.style.display === 'block') {
//       resultado.style.display = 'none';
//    } else {
//       resultado.style.display = 'block';

// )}







