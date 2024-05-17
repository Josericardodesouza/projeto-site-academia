
console.log('aqui')


var botao = document.getElementById("btn-hamb");
var container = document.getElementById("opt-oculta");



function cliqueMenu() {

    console.log('chamou a função')

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
