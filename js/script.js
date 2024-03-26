
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

    // var botao = document.getElementById("executar");
    var container = document.getElementById("section-oculta");
    var pErroAlt = document.getElementById("pErroAlt")
    var pErroPes = document.getElementById("pErroPes")
    var pNull = document.getElementById("pNull")

    // var confereInputAlt = entAlt.value;
    // var confereInputP = entPeso.value;



     
        // if (confereInputAlt.value === '' && confereInputP.value === ''){
        // window.alert('Voce deve preencher os campos obrigatórios!')
        // entPeso.value = '';
        // entAlt.value = '';
        // }
    

  


    switch (true) {

        // case (entAlt.indexOf() === -1 && entPeso.indexOf() === -1):
        //     pNull.style.display = 'block';
        //     console.log('teste');

        //     break;


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

            //  case (entAlt.indexOf(',') === 1 && entAlt.indexOf('.') === 1):
            // pErroAlt.style.display = 'none';
            //  break;

            //  case (entPeso.indexOf(',') ===  1 && entPeso.indexOf('.') === 1):
            //  pErroPes.style.display = 'none';
            //  break;
        
      
        default:
             pErroAlt.style.display = 'none';
             pErroPes.style.display = 'none';

             inputPeso.style.borderColor = 'black';
             inputAlt.style.borderCColor = 'black';

            container.style.display = 'block';
            container.scrollIntoView({behavior: "smooth"});
            break;
    }


   








    // var confere = 0;

    // if (dado1.indexOf(',') === -1 || dado1.indexOf('.') === -1) {
    //     window.alert('Voce deve inserir um ponto(.) ou virgula(,) no campo de ALTURA!')
    //     confere = 0;
    // }else{

    //     confere = 1;
    // }

    // if (dado2.indexOf(',') === -1 || dado2.indexOf('.') === -1) {
    //     window.alert('Você deve inserir um ponto(.) ou virgula(,) no campo de PESO!')
    //     confere = 0;
    // } else {
    //     confere = 1;
    // }


    // botao.addEventListener('click', function() {

    //     //novo if de teste
    //     // if (dado1.indexOf(',') !== -1 && dado1.indexOf('.') !== -1 && ) 
    //     //tentar substituir os if e else por switch case, fica mais elegante e prático. obg Deus



    //     //if original ele ve se dado1 e dado2 é maior que 1, que e o valor inserido no input pelo usuário
    //     // agora tem que verificar se os dado1 e dado2 são maiores que 1 e tem o . e , no input
    //    // mas o condicional do if fica muito grande
    //     if ( dado1 > 0 && dado2 > 0) {
    //         container.style.display = 'block'
    //      } else {
    //          container.style.display = 'none'
    //      }

        

    //     if (altura.indexOf(',') === -1 && altura.indexOf('.') === -1) {
    //         window.alert('Voce deve inserir um ponto(.) ou virgula(,) no campo de ALTURA!')
    //      }
    //  // icnrementar esses ifs no if do botao
    
    //      if (peso.indexOf(',') === -1 && peso.indexOf('.') === -1) {
    //         window.alert('Você deve inserir um ponto(.) ou virgula(,) no campo de PESO!')
    //      } 
    // }
    

    
}



    // botao.addEventListener('click', function(){
    //     if(container.style.display == 'block') {
    //         container.style.display = 'none';
    //     } else {
    //         container.style.display = 'block';
    //     }
    // })




    


 function calcular() {

    var peso = document.getElementById("entrada-peso").value;

    var altura = document.getElementById("entrada-altura").value;
    p = document.getElementById('saida-frase');

  

    //  var container = document.getElementById("section-oculta")

    // var confere = 0;

    var total = peso / (altura * altura);

    var imc = total.toFixed(1);


   








    //  if (altura.indexOf(',') === -1 && altura.indexOf('.') === -1) {
    //     window.alert('Voce deve inserir um ponto(.) ou virgula(,) no campo de ALTURA!')
    //  }
 

    //  if (peso.indexOf(',') === -1 && peso.indexOf('.') === -1) {
    //     window.alert('Você deve inserir um ponto(.) ou virgula(,) no campo de PESO!')
    //  } 


   
 if ( imc < 17) {
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
            p.style.color = 'red';
            document.getElementById("saida-frase").innerHTML = "Obesidade 3(mórbida)! <br> Procure assistencia médica e nutricional o quanto antes."
     }
     document.getElementById("saida-res").innerHTML = "O seu IMC é de " + imc
     document.getElementById("saida-form").innerHTML = "Fórmula: " + peso + " ÷ (" + altura + " x 2)";
      
    }
    


 function resetar() {
    // var entPeso = document.getElementById('entrada-peso').value
    // var entAltura = document.getElementById('entrada-altura').value
    var container = document.getElementById("section-oculta");
    var divSaida = document.getElementById("saida")
    var alt = document.getElementById('entrada-altura')
    var pes = document.getElementById('entrada-peso')

     if(container.style.display == 'block') {
            alt.value = '';
            pes.value = '';
            document.getElementById('saida-res').innerHTML = "";
            document.getElementById('saida-frase').innerHTML = "";
            document.getElementById('saida-form').innerHTML = "";
            container.style.display = 'none';
            divSaida.style.display = 'none';
           

     
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







