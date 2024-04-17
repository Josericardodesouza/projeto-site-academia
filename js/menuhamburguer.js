// function cliqueMenu () {
//     if (menu.style.display=='block') {
//         menu.style.display = 'none'
//     } else {
//         menu.style.display = 'block'
//     }
// }

console.log('aqui')


var botao = document.getElementById("btn-hamb");
var container = document.getElementById("opt-oculta");



function cliqueMenu() {

    console.log('chamou a função')

    botao.addEventListener('click', function(){

        if (container.style.display === 'none') {
            container.style.display = 'block';
            // container.style.position = 'fixed'
            // container.style.zIndex = '1'
            console.log('mostrou')

        } else {
            
            container.style.display = 'none';
            // container.style.position = 'inherit'
            // container.style.zIndex = '0'
            console.log('escondeu')
          
        }
    }
    )

}
