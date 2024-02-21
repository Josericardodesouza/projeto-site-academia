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






function calcularGEB () {
    var confereGen = document.getElementById("sexo").value;

    if (confereGen=="masc") {

        var pesoInfor = document.getElementById("ent-peso").value
        var totalPeso = (13.75 * pesoInfor);
    
        var altInfor = document.getElementById("ent-altura").value
        var totalAlt = (5 * altInfor);
    
        var idadeInfor = document.getElementById("ent-idade").value
        var totalIdade = (6.76 * idadeInfor);
    
        var geb = (66.47 + totalPeso + totalAlt - totalIdade);
    
        document.getElementById("saidaGeb").innerHTML = "O total deu " + geb + " KCAL"   
    } 

    // if geb = true para travar a saida, eu acho


    
    if (confereGen=="fem") {

        var pesoInfor = document.getElementById("ent-peso").value
        var totalPeso = (9.56 * pesoInfor);
    
        var altInfor = document.getElementById("ent-altura").value
        var totalAlt = (1.85 * altInfor);
    
        var idadeInfor = document.getElementById("ent-idade").value
        var totalIdade = (4.68 * idadeInfor);
    
        var geb = (655.1 + totalPeso + totalAlt - totalIdade);
    
        document.getElementById("saidaGeb").innerHTML = "O total deu " + geb + " KCAL"
    }

}
      



//     if (sexo === "masc") {

//         var base = 66.47

//         var pesoInfor = document.getElementById("ent-peso").value
//         var totalPeso = (13.75 * pesoInfor);

//         var altInfor = document.getElementById("ent-altura").value
//         var totalAlt = (5 * altInfor);

//         var idadeInfor = document.getElementById("ent-idade").value
//         var totalIdade = (6.76 * idadeInfor);

//         var geb = (base + totalPeso + totalAlt - totalIdade);

//         document.getElementById("saidaGeb").innerHTML = "O total deu " + geb + " KCAL"

//     }

//     if (sexo === "fem") {

//         var base = 655.1

//         var pesoInfor = document.getElementById("ent-peso").value
//         var totalPeso = (9.56 * pesoInfor);

//         var altInfor = document.getElementById("ent-altura").value
//         var totalAlt = (1.85 * altInfor);

//         var idadeInfor = document.getElementById("ent-idade").value
//         var totalIdade = (4.68 * idadeInfor);

//         var geb = (base + totalPeso + totalAlt - totalIdade);

//         document.getElementById("saidaGeb").innerHTML = "O total deu " + geb + " KCAL"
//     }

// }
