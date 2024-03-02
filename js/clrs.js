function calcularCal() {
    var carboidratos = document.getElementById("ent-carboidratos").value;

    var totCarboidratos = (carboidratos * 4);

    var proteinas =  document.getElementById("ent-proteinas").value;

    var totProteinas = (proteinas * 4);

    var lipidios = document.getElementById("ent-lipi").value;

    var totLipidios = (lipidios * 9);

    var total = (totCarboidratos + totProteinas + totLipidios);

    document.getElementById("saida-totalCal").innerHTML = total;

    document.getElementById("formCal").innerHTML = carboidratos + " + " + proteinas + " + " + lipidios;

    document.getElementById("saida-totalCarb").innerHTML = carboidratos + "G carboidratos";

    document.getElementById("formCarb").innerText = carboidratos + "X 4 = " + totCarboidratos + "KCAL"

    document.getElementById("saida-totalProt").innerHTML = proteinas + "G proteínas"

    document.getElementById("formProt").innerHTML = proteinas + "X 4 = " + totProteinas + "KCAL"

    document.getElementById("saida-totalLipi").innerHTML = lipidios + "G lipídios"

    document.getElementById("saida-formLipid").innerHTML = lipidios + "X 9 = " + totLipidios + "KCAL"

   

   
}

