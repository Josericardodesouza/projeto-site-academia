
function limiteNumeros() {
    var refAltura = 4;
    var refPeso = 5;
    var pesoInfor = document.getElementById('entrada-peso')
    var alturaInfor = document.getElementById('entrada-altura')
    var lmtNumPeso = pesoInfor.value
    var lmtNumAlt = alturaInfor.value

    if (lmtNumPeso.length > refPeso) {
        pesoInfor.value = lmtNumPeso.slice(0, refPeso);                             
    }

    if (lmtNumAlt.length > refAltura) {                                                   

    alturaInfor.value = lmtNumAlt.slice(0, refAltura);

    }


}




function aparecer () {
    var entPeso = document.getElementById("entrada-peso").value;
    var entAlt = document.getElementById("entrada-altura").value;

    var inputPeso = document.getElementById("entrada-peso");
    var inputAlt = document.getElementById("entrada-altura");

    var container = document.getElementById("section-oculta");
    var pErroAlt = document.getElementById("pErroAlt")
    var pErroPes = document.getElementById("pErroPes")


    var ponto = document.getElementById("executar")
    /*var pNull = document.getElementById("pNull")*/

 

  


    switch (true) {

        case (entAlt.indexOf(',') === - 1 && entAlt.indexOf('.') === -1):
            //   pErroAlt.innerHTML = 'Voce deve inserir um ponto(.) ou vírgula(,) no campo de ALTURA!';
             container.style.display = 'none';
              pErroAlt.style.display = 'block';
              pErroPes.style.display = 'none';

              inputAlt.style.borderColor = 'red';
              inputPeso.style.borderColor = 'black';
             break;

        


        case (entPeso.indexOf(',') === - 1 && entPeso.indexOf('.') === -1): 
            //  pErroAlt.style.display = 'none';
            //  pErroPes.innerHTML = 'Voce deve inserir um ponto(.) ou vírgula(,) no campo de PESO!';
             pErroPes.style.display = 'block';
             pErroAlt.style.display = 'none'
             container.style.display = 'none';

             inputPeso.style.borderColor = 'red';
             inputAlt.style.borderColor = 'black';


       
             break;
        
      
        default:
             pErroAlt.style.display = 'none';
             pErroPes.style.display = 'none';

             inputPeso.style.borderColor = 'black';
             inputAlt.style.borderColor = 'black';

            container.style.display = 'block';
            ponto.scrollIntoView({behavior: "smooth"});
            break;
    }
    

}


 function calcular() {

    var peso = document.getElementById("entrada-peso").value;

    var altura = document.getElementById("entrada-altura").value;
    p = document.getElementById('saida-frase');

    var total = peso / (altura * altura);

    var imc = total.toFixed(1);


 if ( imc < 17) {
        p.style.backgroundColor = 'red';
        document.getElementById("saida-frase").innerHTML = "Voce esta muito abaixo do peso"

     } else if (imc >= 17.0 && imc <= 19.0) {
        p.style.backgroundColor = 'orange';
        document.getElementById("saida-frase").innerHTML = "Voce está abaixo do peso"

     } else if (imc >= 18.50 && imc <= 25.0) {
         p.style.backgroundColor = 'whitesmoke';
         document.getElementById("saida-frase").innerHTML = "Voce está com o peso normal"
         document.getElementById("saida-frase")

     } else if (imc >= 25.01 && imc <= 30.0) {
         p.style.backgroundColor = 'yellow';
         document.getElementById("saida-frase").innerHTML = "Voce está acima do peso"
     } else if (imc >= 30.0 && imc <= 35.0) {
         p.style.backgroundColor = 'orange';
         document.getElementById("saida-frase").innerHTML = "Obesidade 1"

        } else if (imc >= 35.01 && imc <= 40.0) {
         p.style.backgroundColor = 'orange';
         document.getElementById("saida-frase").innerHTML ="Obesidade 2 (severa)"

        } else if (imc >= 40.1) {
         p.style.backgroundColor = 'red';
         document.getElementById("saida-frase").innerHTML = "Obesidade 3 (mórbida)! <br> Procure assistencia médica e nutricional o quanto antes."
     }

     document.getElementById("saida-res").innerHTML = "O seu IMC é de " + imc
     document.getElementById("saida-form").innerHTML = "Fórmula: " + peso + ' &#247 ' + " ( " + altura + " x 2)";
      
    }
    


 function resetar() {
    // var entPeso = document.getElementById('entrada-peso').value
    // var entAltura = document.getElementById('entrada-altura').value
    // var containerEntrada = document.getElementById("entrada-dados")
    var container = document.getElementById("section-oculta");
    var divSaida = document.getElementById("saida")
    var alt = document.getElementById('entrada-altura')
    var pes = document.getElementById('entrada-peso')
    var ponto = document.getElementById("texto-header")

     if(container.style.display == 'block') {
            alt.value = '';
            pes.value = '';
            document.getElementById('saida-res').innerHTML = "";
            document.getElementById('saida-frase').innerHTML = "";
            document.getElementById('saida-form').innerHTML = "";
            container.style.display = 'none';
            divSaida.style.display = 'none';

            ponto.scrollIntoView({behavior: "smooth"});
           

     
    }













    




     
//   switch (calculoIMC) {

//     case 'confere > 1':

//     if (imc < 17) {
//         document.getElementById("saida-frase").innerHTML = "Voce esta muito abaixo do peso"
//     } else if (imc >= 17.0 && imc <= 19.0) {
//         document.getElementById("saida-frase").innerHTML = "Voce esta abaixo do peso"
//     } else if (imc >= 18.50 && imc <= 25.0) {
//         document.getElementById("saida-frase").innerHTML = "Voce esta com o peso normal"
//     } else if (imc >= 25.01 && imc <= 30.0) {
//         document.getElementById("saida-frase").innerHTML = "Voce esta acima do peso"
//     } else if (imc >= 30.0 && imc <= 35.0) {
//         document.getElementById("saida-frase").innerHTML = "Obesidade 1"
//     } else if (imc >= 35.01 && imc <= 40.0) {
//         document.getElementById("saida-frase").innerHTML = "Obesidade 2(severa)"
//     } else if (imc >= 40.1) {
//         document.getElementById("saida-frase").innerHTML = "Obesidade 3(mórbida)"
//     }
//     document.getElementById("saida-res").innerHTML = "O seu IMC é de " + imc
//     document.getElementById("saida-form").innerHTML = "Fórmula: " + peso + " / (" + altura + " x 2)";
//      }


 }






