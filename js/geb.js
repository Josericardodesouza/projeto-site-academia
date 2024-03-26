// function calculoMasculino() {

    

//     var pesoInfor = document.getElementById("ent-peso").value
//     var totalPeso = (13.75 * pesoInfor);

//     var altInfor = document.getElementById("ent-altura").value
//     var totalAlt = (5 * altInfor);

//     var idadeInfor = document.getElementById("ent-idade").value
//     var totalIdade = (6.76 * idadeInfor);

//     var geb = (66.47 + totalPeso + totalAlt - totalIdade);

//     document.getElementById("saidaGeb").innerHTML = "O total deu " + geb + " KCAL"

// }

// function calculoFeminino() {

//     var pesoInfor = document.getElementById("ent-peso").value
//     var totalPeso = (9.56 * pesoInfor);

//     var altInfor = document.getElementById("ent-altura").value
//     var totalAlt = (1.85 * altInfor);

//     var idadeInfor = document.getElementById("ent-idade").value
//     var totalIdade = (4.68 * idadeInfor);

//     var geb = (655.1 + totalPeso + totalAlt - totalIdade);

//     document.getElementById("saidaGeb").innerHTML = "O total deu " + geb + " KCAL"
// }


// function aparecer() {
//   var botaoUm = document.getElementById("botao-masc");
//   var botaoDois = document.getElementById("botao-fem");
//   var botao = botaoUm || botaoDois;
//   var container = document.getElementById("saida");

//   botao.addEventListener('click', function(){
//       if(container.style.display == 'block') {
//           container.style.display = 'none';
//       } else {
//           container.style.display = 'block';
//       }
//   })

// }


  // const btn = document.get('botao')
  // const container = document.getElementById('oculta')

  // btn.addEventListener('click', function() {
  //   if (container.style.display === "block") {
  //     container.style.display = 'none';
  //   }else{
  //     container.style.display = 'block';
  //   }
  // }
  // ) 


//  function apareceMasc() {
//   var btn = document.getElementById("botao-masc");
//   var container = document.getElementById("oculta");

//   botao.addEventListener('click', function(){
//       if (container.style.display == 'block') {
//           container.style.display = 'none';
//       } else {
//           container.style.display = 'block';
//       }
//   }
//   )
// }
 
function limiteNumPeso() {
  var num = 5;
  var limite = document.getElementById("ent-peso");

  var limiteNum = limite.value;

  if (limiteNum.length > num)

   limite.value = limiteNum.slice(0, num);


 }


function limiteNumAlt() {
  var num = 3;
  var limite = document.getElementById("ent-altura");

  var limiteNum = limite.value;

  if (limiteNum.length > num)

  limite.value = limiteNum.slice(0, num)

}


function limiteNumIdade() {
  var num = 3;
  var limite = document.getElementById("ent-idade");

  var limiteNum = limite.value;

  if (limiteNum.length > num)

  limite.value = limiteNum.slice(0, num)

}


function confere() {
  var container = document.getElementById("oculta");
  var entPeso = document.getElementById("ent-peso").value;
  var entAlt = document.getElementById("ent-altura").value;
  var entIdade = document.getElementById("ent-idade").value;
  var pErroPeso = document.getElementById("pErroPeso")
  var pErroAlt = document.getElementById("pErroAlt")
  var pErroIdade = document.getElementById("pErroIdade")

 
 

  switch(true) {
    case (entPeso.indexOf(',') === -1 && entPeso.indexOf('.') === -1):
      pErroPeso.style.display = 'block';
      pErroAlt.style.display = 'none';
      pErroIdade.style.display = 'none';

      container.style.display = 'none';
      
      break;

    case (entAlt.indexOf(',') !== -1 || entAlt.indexOf('.') !== -1):
      entAlt.value = "";
      pErroAlt.style.display = 'block';
      pErroPeso.style.display = 'none';
      pErroIdade.style.display = 'none';
      
    
      container.style.display = 'none';
      break;

    case (entIdade.indexOf(',') !== -1 || entIdade.indexOf('.') !== -1):
      entIdade.value = "";
      pErroIdade.style.display = 'block';
      pErroAlt.style.display = 'none';
      pErroPeso.style.display = 'none';

     
      // window.alert('Você não deve inserir ponto(.) ou vírgula (,) no campo de IDADE');
      container.style.display = 'none';
      break;

      default:
        pErroPeso.style.display = 'none';
        pErroAlt.style.display = 'none';
        pErroIdade.style.display = 'none';
        container.style.display = 'block';
        container.scrollIntoView({behavior: "smooth"});
        break;

        // confirmaMasc = 2;
        // confirmaFem = 2;

  } 




}



function calcularGebMasc() {

  // var container = document.getElementById("oculta");


  var pesoInfor = document.getElementById("ent-peso").value
  var totalPeso = (13.75 * pesoInfor);

  var altInfor = document.getElementById("ent-altura").value
  var totalAlt = (5 * altInfor);

  var idadeInfor = document.getElementById("ent-idade").value
  var totalIdade = (6.76 * idadeInfor);

  var total = (66.47 + totalPeso + totalAlt - totalIdade);

  var geb = total.toFixed(2)



  
    if (geb > 66.47) {
      // container.style.display = 'block';
      document.getElementById("saidaGeb").innerHTML =  geb + " KCAL";

    }

  
  }

  function calcularGebFem() {

    // var container = document.getElementById("oculta");
    
    var pesoInfor = document.getElementById("ent-peso").value
     var totalPeso = (9.56 * pesoInfor);
    
     var altInfor = document.getElementById("ent-altura").value
     var totalAlt = (1.85 * altInfor);
    
     var idadeInfor = document.getElementById("ent-idade").value
     var totalIdade = (4.68 * idadeInfor);
    
     var total = (655.1 + totalPeso + totalAlt - totalIdade);

     var geb = total.toFixed(2);

     
      if ( geb >= 655.1) {
        // container.style.display = 'block';
        document.getElementById("saidaGeb").innerHTML =  geb + " KCAL";
  
      }
  }


  function resetar() {
    var valorInputPeso = document.getElementById("ent-peso");
    var valorInputAltura = document.getElementById("ent-altura");
    var valorInputIdade = document.getElementById("ent-idade");
    container = document.getElementById("oculta");

    if (container.style.display == 'block') {
      valorInputPeso.value = '';
      valorInputAltura.value = '';
      valorInputIdade.value = '';
      container.style.display = 'none';

    }

  }











//  function calcularGebMasc()  {

//         var pesoInforMas = document.getElementById("ent-pesoMasc").value
//         var totalPesoMas = (13.75 * pesoInforMas);
    
//         var altInforMas = document.getElementById("ent-alturaMasc").value
//         var totalAltMas = (5 * altInforMas);
    
//         var idadeInforMas = document.getElementById("ent-idadeMasc").value
//         var totalIdadeMas = (6.76 * idadeInforMas);
    
//         var gebMas = (66.47 + totalPesoMas + totalAltMas - totalIdadeMas);

//         if (gebMas > 66.47) {
//             document.getElementById("saidaGebMasc").innerHTML = "O total deu " + gebMas + " KCAL" 

//         }
    
       

//     } 

//     // if geb = true para travar a saida, eu acho


    
//     function calcularGebFem() {

//         var pesoInforFem = document.getElementById("ent-pesoFem").value
//         var totalPesoFem = (9.56 * pesoInforFem);
    
//         var altInforFem = document.getElementById("ent-alturaFem").value
//         var totalAltFem = (1.85 * altInforFem);
    
//         var idadeInforFem = document.getElementById("ent-idadeFem").value
//         var totalIdadeFem = (4.68 * idadeInforFem);
    
//         var gebFem = (655.1 + totalPesoFem + totalAltFem- totalIdadeFem);

//         if (gebFem > 655.1) {
//             document.getElementById("saidaGebFem").innerHTML = "O total deu " + gebFem + " KCAL"
//         }
    
        
//     }


      



//     

//        
//     }

//     

//         var base = 655.1

//        
//     }

// }
