// function cliqueMenu () {
//     if (menu.style.display=='block') {
//         menu.style.display = 'none'
//     } else {
//         menu.style.display = 'block'
//     }
// }




function cliqueMenu() {
    var botao = document.getElementById("btn-hamb");
    var container = document.getElementById("oculta");

    botao.addEventListener('click', function(){

        if (container.style.display === 'none') {
            container.style.display = 'block';
            console.log('mostrou')

        } else {
            
            container.style.display = 'none';
            console.log('escondeu')
          
        }
    }
    )

}
