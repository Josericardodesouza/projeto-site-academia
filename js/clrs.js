
function limiteNumeros() {
    var refCarb = 4; // variáveis mantidas para melhor manutenção
    var refProt = 4;
    var refLipi = 4;
    var carbInfor = document.getElementById("ent-carboidratos");
    var protInfor = document.getElementById("ent-proteinas");
    var lipidInfor = document.getElementById("ent-lipi");

    var lmtNumCarb = carbInfor.value;
    var lmtNumProt = protInfor.value;
    var lmtNumLipi = lipidInfor.value;


    if (lmtNumCarb.length > refCarb) {
        carbInfor.value = lmtNumCarb.slice(0, refCarb);
    }

    if (lmtNumProt.length > refProt) {
        protInfor.value = lmtNumProt.slice(0, refProt);
    }

    if (lmtNumLipi.length > refLipi) {
        lipidInfor.value = lmtNumLipi.slice(0, refLipi);
    }
    

}




function aparecer() {
    var container = document.getElementById("section-oculta");
    var entCarb = document.getElementById("ent-carboidratos").value;
    var entProt = document.getElementById("ent-proteinas").value;
    var entLipi = document.getElementById("ent-lipi").value;

    var inputCarb = document.getElementById("ent-carboidratos");
    var inputProt = document.getElementById("ent-proteinas");
    var inputLipi = document.getElementById("ent-lipi");
  

    var pErroCarb = document.getElementById("pErroCarb");
    var pErroProt = document.getElementById("pErroProt");
    var pErroLipi = document.getElementById("pErroLipi");

    switch (true) {

        case (entCarb.indexOf(',') === -1 && entCarb.indexOf('.') === -1):
            pErroCarb.style.display = 'block';
            pErroProt.style.display = 'none';
            pErroLipi.style.display = 'none';

            inputCarb.style.borderColor = 'red';
            inputLipi.style.borderColor = 'black';
            inputProt.style.borderColor = 'black';

            // pErroProt.style.display = 'none';
            // pErroLipi.style.display = 'none';
            container.style.display = 'none';
            break;

        case (entProt.indexOf(',') === -1 && entProt.indexOf('.') === -1):
            pErroProt.style.display = 'block';
            pErroCarb.style.display = 'none';
            pErroLipi.style.display = 'none';

            inputProt.style.borderColor = 'red';
            inputCarb.style.borderColor = 'black';
            inputLipi.style.borderColor = 'black';

            // pErroCarb.style.display = 'none';
            // pErroLipi.style.display = 'none';
            container.style.display = 'none';
            break;

        case (entLipi.indexOf(',') === -1 && entLipi.indexOf('.') === -1):
            pErroLipi.style.display = 'block';
            pErroCarb.style.display  = 'none';
            pErroProt.style.display = 'none';

            inputLipi.style.borderColor = 'red';
            inputCarb.style.borderColor = 'black';
            inputProt.style.borderColor = 'black';


            // pErroCarb.style.display = 'none';
            // pErroProt.style.display = 'none';
            container.style.display = 'none';
            break;

        default:
            pErroCarb.style.display = 'none';
            pErroLipi.style.display = 'none';
            pErroProt.style.display = 'none';
            container.style.display = 'block';

            inputCarb.style.borderColor = 'black';
            inputProt.style.borderColor = 'black';
            inputLipi.style.borderColor = 'black';


            container.scrollIntoView({behavior: "smooth"});
            break;

    }




    // botao.addEventListener('click', function(){
    //     if (container.style.display == 'inline-block') {
    //         container.style.display = 'none';
    //     } else {
    //         container.style.display = 'inline-block';
    //     }
    // }
    // )
}

function calcularCal() {
    var carboidratos = document.getElementById("ent-carboidratos").value;

    var totCarboidratos = (carboidratos * 4);

    var proteinas =  document.getElementById("ent-proteinas").value;

    var totProteinas = (proteinas * 4);

    var lipidios = document.getElementById("ent-lipi").value;

    var totLipidios = (lipidios * 9);

    var total = (totCarboidratos + totProteinas + totLipidios);

    document.getElementById("saida-totalCal").innerHTML = total.toFixed(1);

    document.getElementById("formCal").innerHTML = carboidratos + " + " + proteinas + " + " + lipidios;

    document.getElementById("saida-totalCarb").innerHTML = carboidratos + "G carboidratos";

    document.getElementById("formCarb").innerText = carboidratos + "X 4 = " + totCarboidratos + "KCAL"

    document.getElementById("saida-totalProt").innerHTML = proteinas + "G proteínas"

    document.getElementById("formProt").innerHTML = proteinas + "X 4 = " + totProteinas + "KCAL"

    document.getElementById("saida-totalLipi").innerHTML = lipidios + "G lipídios"

    document.getElementById("formLipi").innerHTML = lipidios + "X 9 = " + totLipidios + "KCAL"
   
}


function resetar() {
    var valorInputCarb = document.getElementById("ent-carboidratos");
    var valorInputProt = document.getElementById("ent-proteinas");
    var valorInputLipi = document.getElementById("ent-lipi");
    // var resultado = document.getElementsByClass("secao-saida");
    var container = document.getElementById("section-oculta");
    var divCalc = document.getElementById("entrada-dados");

    if (container.style.display == 'block') {
        valorInputCarb.value = '';
        valorInputProt.value = '';
        valorInputLipi.value = '';
        // resultado.style.display = 'none';
        container.style.display = 'none';
       
    }








}

