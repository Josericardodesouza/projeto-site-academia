function calcularCal() {
    var carboidratos = document.getElementById('ent-carboidratos').value;
    var totCarboidratos = carboidratos * 4;

    var proteinas =  document.getElementById('ent-proteinas').value;
    var totProteinas = proteinas * 4;

    var lipidios = document.getElementById('ent-lipidios').value;
    var totLipidios = lipidios * 9;

    document.getElementById('saida-carb').innerHTML = carboidratos + "G carboidratos";

    document.getElementById('saida-carb2').innerText = carboidratos + "X 4 = " + totCarboidratos + "KCAL";

    document.getElementById('saida-prot').innerHTML = proteinas + "G proteínas";

    document.getElementById('saida-prot2').innerHTML = proteinas + "X 4 = " + totProteinas + "KCAL";

    document.getElementById('saida-lipi').innerHTML = lipidios + "G lipídios";

    document.getElementById('saida-lipi2').innerHTML = lipidios + "X 9 = " + totLipidios + "KCAL";
}