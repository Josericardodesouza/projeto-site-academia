// function cliqueMenu () {
//     if (menu.style.display=='block') {
//         menu.style.display = 'none'
//     } else {
//         menu.style.display = 'block'
//     }
// }




function cliqueMenu() {
    var botao = document.getElementById("span-nav");
    var container = document.getElementById("oculta");

    botao.addEventListener('click', function(){
        if (container.style.display == 'block') {
            container.style.display = 'none';
            console.log('passou')
        } else {
            container.style.display = 'block';
        }
    }
    )
}
