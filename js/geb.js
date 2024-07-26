
 
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
  var section = document.getElementById("container-entrada")
  var entPeso = document.getElementById("ent-peso").value;
  var entAlt = document.getElementById("ent-altura").value;
  var entIdade = document.getElementById("ent-idade").value;
  var inputPeso = document.getElementById("ent-peso")
  var inputAlt = document.getElementById("ent-altura")
  var inputIdade = document.getElementById("ent-idade")
  var pErroPeso = document.getElementById("pErroPeso")
  var pErroAlt = document.getElementById("pErroAlt")
  var pErroIdade = document.getElementById("pErroIdade")

 
 

  switch(true) {
    case (entPeso.indexOf(',') === -1 && entPeso.indexOf('.') === -1): /* correto*/
      
       pErroPeso.style.display = 'block';
       pErroAlt.style.display = 'none';
       pErroIdade.style.display = 'none';

       inputPeso.style.borderColor = 'red';
       inputAlt.style.borderColor = 'black';
       inputIdade.style.borderColor = 'black';

      container.style.display = 'none';

      console.log('erroPeso')
      
      break;

    case (entAlt.indexOf(',') === 1 || entAlt.indexOf('.') === 1 || entAlt === ''):
        
        pErroAlt.style.display = 'block';
        pErroPeso.style.display = 'none';
        pErroIdade.style.display = 'none';

        inputAlt.style.borderColor = 'red';
        inputPeso.style.borderColor = 'black';
        inputIdade.style.borderColor = 'black';
        
      
        container.style.display = 'none';
        console.log('erroAlt');
        break;


    case (entIdade.indexOf(',') === 1 || entIdade.indexOf('.') === 1 || entIdade === ''):

     
    pErroIdade.style.display = 'block';
    pErroAlt.style.display = 'none';
    pErroPeso.style.display = 'none';

    inputIdade.style.borderColor = 'red';
    inputPeso.style.borderColor = 'black';
    inputAlt.style.borderColor = 'black';

  
   // window.alert('Você não deve inserir ponto(.) ou vírgula (,) no campo de IDADE');
   container.style.display = 'none';
   console.log('erroIdade');
   break;




      default:
      
        pErroPeso.style.display = 'none';
        pErroAlt.style.display = 'none';
        pErroIdade.style.display = 'none';
        container.style.display = 'block';

        inputAlt.style.borderColor = 'black';
        inputPeso.style.borderColor = 'black';
        inputIdade.style.borderColor = 'black';
        


        console.log('default')
      
        section.scrollIntoView({behavior: "smooth"});
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



  
    if (geb > 66.50) {
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
    var container = document.getElementById("oculta");
    let header = document.getElementById("header");


    if (container.style.display == 'block') {
      valorInputPeso.value = '';
      valorInputAltura.value = '';
      valorInputIdade.value = '';
      container.style.display = 'none';

    }

    header.scrollIntoView({behavior: "smooth"});

  }

