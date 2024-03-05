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
 



  
  



function calcularGebMasc() {

  var container = document.getElementById("oculta");

  var pesoInfor = document.getElementById("ent-peso").value
  var totalPeso = (13.75 * pesoInfor);

  var altInfor = document.getElementById("ent-altura").value
  var totalAlt = (5 * altInfor);

  var idadeInfor = document.getElementById("ent-idade").value
  var totalIdade = (6.76 * idadeInfor);

  var geb = (66.47 + totalPeso + totalAlt - totalIdade);

   if (geb > 66.47 ) {
    container.style.display = 'block';
    document.getElementById("saidaGeb").innerHTML = "O total deu " + geb + " KCAL";

   }

  }

  function calcularGebFem() {

    var container = document.getElementById("oculta");
    
    var pesoInfor = document.getElementById("ent-peso").value
     var totalPeso = (9.56 * pesoInfor);
    
     var altInfor = document.getElementById("ent-altura").value
     var totalAlt = (1.85 * altInfor);
    
     var idadeInfor = document.getElementById("ent-idade").value
     var totalIdade = (4.68 * idadeInfor);
    
     var geb = (655.1 + totalPeso + totalAlt - totalIdade);

     if (geb > 655.1) {
      container.style.display = 'block';
      document.getElementById("saidaGeb").innerHTML = "O total deu " + geb + " KCAL"
    
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
