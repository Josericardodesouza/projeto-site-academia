  // function contaCaracteres() {
        //     refEmail = 30;
        //     refSenha = 15;
        //     minSenha = 8;

            
        //     var email = document.getElementById("input-email")
        //     var senha = document.getElementById("input-senha")
        //     var input = document.getElementById("input-senha")
          

        //     lmtEmail = email.value;
        //     lmtSenha = senha.value;

        //     if (lmtEmail.length > refEmail) {
        //         email.value = lmtEmail.slice(0, refEmail);
        //     }

        // }


        // function confereNome() {
        //     var nome = document.getElementById("input-nome").value
        //     var erroNull = document.getElementById("nome-erro")
        //     var erroNum = document.getElementById("nome-erro-num")


        //     switch(true) {
        //         case (nome.indexOf('[0-9]') === -1):
        //             erroNum.style.display = 'block';
        //             erroNull.style.display = 'none';
        //             break;

        //         case (nome.indexOf('') === -1):
        //             erroNull.style.display = 'block';
        //             erroNum.style.display = 'none';
                    
        //     }
        // }


    var inputNome = document.getElementById("input-nome")
    var inputSobrenome = document.getElementById("input-sobrenome")
    var pErroNomeNum = document.getElementById("nome-erro-num")
    var pErroSobrenomeNum = document.getElementById("sobrenome-erro-num")


    var pErroNomeNull = document.getElementById("nome-erro")
    var pErroSobrenomeNull = document.getElementById("sobrenome-erro")

    
    var pNomeCaractereInv = document.getElementById("nome-erro-caractereInv")

        
    var pSobrenomeCaractereInv = document.getElementById("sobrenome-erro-caractereInv")

   

     
    var inputCpf = document.getElementById("input-cpf")

        
    var inputCpfValue = document.getElementById("input-cpf").value

    var inputTel = document.getElementById("input-telefone")
    var inputNum = document.getElementById("input-telefone").value

    var inputNum = document.getElementById("input-telefone").value
    var pErroQtdNums = document.getElementById("pErroQtdNum")

  



        

        function confereNomeSobrenomeNum() {
          
            // var inputSobrenome = document.getElementById("input-sobrenome").value
       
            
            
            // var pErroSobrenome = document.getElementById("sobrenome-erro")
            // var pErroSobNum = document.getElementById("sobrenome-erro-num")

           let inputNomeValue = inputNome.value;
           let inputSobrenomeValue = inputSobrenome.value;

          if (/\d/.test(inputNomeValue)) {
             pErroNomeNum.style.display = 'block';
             inputNome.style.borderColor = 'red';
            
            //  document.getElementById('btn-login').disabled = 'true'
           
         }
          else {
            inputNome.style.borderColor = 'white';
            pErroNomeNum.style.display = 'none';
          
            // document.getElementById('btn-login').disabled = 'false'
         }



         if (/\d/.test(inputSobrenomeValue)) {
             pErroSobrenomeNum.style.display = 'block';
             inputSobrenome.style.borderColor = 'red';
            
           
         }
          else {
            inputSobrenome.style.borderColor = 'white';
            pErroSobrenomeNum.style.display = 'none';
           
         }






        }




        function confereNomeSobrenomeNull() {
         


            let inputNomeValue  = inputNome.value;
            let inputSobrenomeValue = inputSobrenome.value;



            if (inputNomeValue === '') {
                pErroNomeNull.style.display = 'block';
                inputNome.style.borderColor = 'red';

            }



            if (inputSobrenomeValue === '') {
                pErroSobrenomeNull.style.display = 'block';
                inputSobrenome.style.borderColor = 'red';

            }

        }


        function inputNullFocus() {
      

            let inputNomeValue  = inputNome.value;
            let inputSobrenomeValue = inputSobrenome.value;


                if (inputNomeValue !== '' || inputSobrenomeValue !== '') {
                    pErroNomeNull.style.display = 'none';
                    pErroSobrenomeNull.style.display = 'none';
                    inputSobrenome.style.borderColor = 'white';
                    inputNome.style.borderColor = 'white';
                }


                
            }







        function nomeCaractereInvalido() {
          
           

            let inputNomeValue = inputNome.value

            //regex correto
           

            if (!/^[a-zA-ZÀ-ü' ?\d]+$/.test(inputNomeValue)) {
                pNomeCaractereInv.style.display = 'block';
                inputNome.style.borderColor = 'red'
                 console.log('Há uma / no campo nome')
            } else {
                pNomeCaractereInv.style.display = 'none';
                inputNome.style.borderColor = 'white'

                 console.log('a barra em NOME foi removida')
            }



            if (inputNomeValue === '') {
                inputNome.style.borderColor = 'white'
                pErroNomeNull.style.display = 'none'
                pErroNomeNum.style.display = 'none'
                pNomeCaractereInv.style.display = 'none'
            }

            

        }


        function sobrenomeCaractereInvalido() {
      

            let inputSobrenomeValue = inputSobrenome.value


            // regex correto

            if (!/^[a-zA-ZÀ-ü' ?\d]+$/.test(inputSobrenomeValue)) {
                pSobrenomeCaractereInv.style.display = 'block';
                inputSobrenome.style.borderColor = 'red';
                 console.log('Há uma barra no sobrenome')
                 
            } else {
                pSobrenomeCaractereInv.style.display = 'none';
                inputSobrenome.style.borderColor = 'white';
                console.log('Não há uma barra no sobrenome')
            }

        
            if (inputSobrenomeValue === '') {
                inputSobrenome.style.borderColor = 'white'
                pErroSobrenomeNull.style.display = 'none'
                pErroSobrenomeNull.style.display = 'none'
                pSobrenomeCaractereInv.style.display = 'none'
            }
            






        }
        

            

        //      case (inputNome === " "): 
        //       pErroNome.style.display = 'block';
        //       pErroNomeNum.style.display = 'none';

        //       break;

        //       default: 
        //        pErroNome.style.display = 'none';
        //        pErroNomeNum.style.display = 'none';
        // }
  
        //     }



       

            

            //  pErroNome.style.display = 'none';
            //  pErroNomeNum.style.display = 'none';
            //  pErroSobrenome.style.display = 'none';
            //  pErroSobNum.style.display = 'none';
          


    //         if (!/[0-9]/.test(inputNum[1])) {
    //     pErroQtdNums.style.display = 'block';
    //     console.log('Falta numero na posi 1')
    // }

    //estudar expressões regulares


            


             




        
        
         function mascaraRG() {
            
            let inputRg = document.getElementById("input-rg")
            let inputRgValue = document.getElementById("input-rg").value
                
           // var pErroRg = document.getElementById("rg-erro")
            
            //  var pErroRg = document.getElementById("rg-erro")

            console.log(inputRgValue)
             

            inputRg.addEventListener('keypress', function() {
                let rgLength = inputRgValue.length

                 if (rgLength === 2 || rgLength === 6) {
                   inputRg.value += '.'
                   console.log('ponto')

                } else if (rgLength === 10) {
                    inputRg.value += '-'
                    console.log('traço')

                }

             })


         } 



            function mascaraRgConfere() {
                var inputRgValue = document.getElementById("input-rg").value
              
             
                /*if ((/^\d{2}\.\d{3}\.\d{3}\-\d{2}+$/).test(inputRgValue)) { 
                    
                    // tá funcionando/ sem o !, 1 é numero, e a tambem
                    console.log('tudo certo')
                    pErroRg.style.display = 'none';

                } else {

                     console.log('tem caractere no meio');
                     pErroRg.style.display = 'block'
                     inputRg.style.borderColor = 'red';
                 }



                 // ele tá dando erro só na primeira letra pois o ^ corresponde á primeira letra da string
                
                


                /*if (/^\d{2}.?\d{3}.?\d{4}\d{1}$/.teste(inputRgValue)) {
                 console.log('valor do input = ' + inputRgValue)
                 pErroRg.style.display = 'none';
                 inputRg.style.borderColor = 'black';
                 console.log('todos os caracteres são numéricos')

                } else {

                pErroRg.style.display = 'block';
                inputRg.style.borderColor = 'red';
                console.log('Tem caractere que não é numérico');
               }*/



               

               /* inputRg.addEventListener('keypress', function() {
                  

               if (/^\d{2}.?\d{3}.?\d{4}\d{1}$/.test(rgLength)) {
             
                pErroRg.style.display = 'none';
                 inputRg.style.borderColor = 'black';
                 console.log('Todos os caracteres são numeros ')
                 console.log('borda verde')


               } else {

                pErroRg.style.display = 'block';
                inputRg.style.borderColor = 'red';
                
                 console.log('tem caractere sem ser numerico')
                 console.log('borda vermelha')
                }

                })*/

                


            
        
  
            /* if (!(Number(inputRgValue[0]))) {
                console.log('valor do input = ' + inputRgValue)
                pErroRg.style.display = 'block';
                inputRg.style.borderColor = 'red';
                console.log('Falta numero na posi 1 RG')
             }

             else if (i(Number(inputRgValue[1]))) {
                console.log('valor do input = ' + inputRgValue)
                pErroRg.style.display = 'block';
                inputRg.style.borderColor = 'red';
                console.log('Falta número na posição 2 RG')
             }

             else if (isNaN(Number(inputRgValue[3]))) {
                console.log('valor do input = ' + inputRgValue)
                pErroRg.style.display = 'block';
                 inputRg.style.borderColor = 'red';
                 console.log('Falta número na posição 3 RG')
             }

             else if (isNaN(Number(inputRgValue[4]))) {
                console.log('valor do input = ' + inputRgValue)
                 pErroRg.style.display = 'block';
                 inputRg.style.borderColor = 'red';
                 console.log('Falta número na posição 4 RG')
             }

             else if (isNaN(Number(inputRgValue[5]))) {
                console.log('valor do input = ' + inputRgValue)
                pErroRg.style.display = 'block';
                inputRg.style.borderColor = 'red';
                console.log('Falta número na posição 5 RG')
             }

            
             else if (isNaN(Number(inputRgValue[6]))) {
                console.log('valor do input = ' + inputRgValue)
                pErroRg.style.display = 'block';
                inputRg.style.borderColor = 'red';
                console.log('Falta número na posição 6 RG')

             }
    
             else if (isNaN(Number(inputRgValue[8]))) {
                console.log('valor do input = ' + inputRgValue)
                pErroRg.style.display = 'block';
                inputRg.style.borderColor = 'red';
                console.log('Falta número na posição 8 RG')

             }

            
             else if (isNaN(Number(inputRgValue[9]))) {
                console.log('valor do input = ' + inputRgValue)
                pErroRg.style.display = 'block';
                inputRg.style.borderColor = 'red';
                console.log('Falta número na posição 9 RG')
             }

            
             else if (isNaN(Number(inputRgValue[10]))) {
                console.log('valor do input = ' + inputRgValue)
                pErroRg.style.display = 'block';
                inputRg.style.borderColor = 'red';
                 console.log('Falta número na posição 10 RG')

             }

            
             else if (isNaN(Number(inputRgValue[12]))) {
                console.log('valor do input = ' + inputRgValue)
                 pErroRg.style.display = 'block';
                 inputRg.style.borderColor = 'red';
                 console.log('Falta número na posição 12 RG')

             }  else {
                console.log('valor do input = ' + inputRgValue)

                pErroRg.style.display = 'block';
                inputRg.style.borderColor = 'red';
                console.log('Tem caractere que não é numérico');
            }

            */


    
              
            
        }

            


        function mascaraCpf() {
           
                // var inputCpf = parseFloat(document.getElementById("input-cpf"));

                inputCpf.addEventListener('keypress', function() {
                    var cpfLength = inputCpf.value.length

                    if (cpfLength === 3 || cpfLength === 7) {
                        inputCpf.value += '.'
                        // confere = 12

                    } else if (cpfLength === 11) {
                        inputCpf.value += '-'

                    }


                }
             )

        }


        function mascaraCpfConfere() {
           

            let ponto = inputCpfValue.split('.').length -1;
            let traco = inputCpfValue.split('-').length - 1;

            console.log(inputCpfValue) 

            if (inputCpfValue[3] !== '.' && inputCpfValue[7] !== '.' && inputCpfValue[11] !== '-') {

                // a questão do formato inválido é na função do botao

                console.log('formato inválido')
                inputCpf.style.borderColor = 'red';

            } else {
                inputCpf.style.borderColor = 'green'

                console.log('pontos e - na posicao correta')
            }

            if (ponto > 2 || traco > 1) {
                console.log('Tem pontos e tracos a mais')
                inputCpf.style.borderColor = 'red';

            } else {

                console.log('tem a quantidade certa de pontos e um traco')
                inputCpf.style.borderColor = 'green';

            }

            if (inputCpfValue.length === 13) {
                console.log('Numeros suficientes')
                inputCpf.style.borderColor = 'green';

            } else {
                console.log('Numeros insuficientes')
                inputCpf.style.borderColor = 'red';


            }



            if (inputCpfValue === '') {
                console.log('Campo vazio')
            }





        }


        function mascaraTelefone() {
          

            inputTel.addEventListener('keypress', function() {
                var numTel = inputTel.value.length

                if (numTel === 9) {
                    inputTel.value  += '-'
                }
            }
            )
        }

        function confereNum() {
          
            // var pErro = document.getElementById("pErroNum")
            // var pErroQtd = document.getElementById("pErroQtd")
            // var qtdNums = inputNum.value.length

            switch(true) {

            
             case (inputNum[0] !== '('): 
              console.log('erro 1');
              pErroNum.style.display = 'block';
              break;
             
             case (inputNum[3] !== ')'): 
             console.log('erro 3');
             pErroNum.style.display = 'block';
             break;

             case (inputNum[0] === '('): 
              console.log('tudo certo!');
              pErroNum.style.display = 'none'
              break;

            case (inputNum[3] === ')'): 
            console.log('tudo certo!');
            pErroNum.style.display = 'none';
            break;

            }


            // if(/^\d+$/.test(inputNum) ) {
            //         window.alert('Todos são numeros')
            //     } else {
            //    window.alert('Está faltando número ou contém caracteres não numéricos.');
            //      }


            // if (qtdNums < 14) {
            //     pErroQtd.style.display = 'block';
            // } else {
            //     pErroQtd.style.display = 'none';
            // }


   
           
            }



function contaNums() {

  



    
    if (!/[0-9]/.test(inputNum[1])) {
        pErroQtdNums.style.display = 'block';
        console.log('Falta numero na posi 1')
    }

    else if (!/[0-9]/.test(inputNum[2])) {
        pErroQtdNums.style.display = 'block';
        console.log('Falta número na posi 2')    
    }

    else if (!/[0-9]/.test(inputNum[4])) {
        pErroQtdNums.style.display = 'block';
        console.log('Falta numero na posi 4')
    }

    else if (!/[0-9]/.test(inputNum[5])) {
        pErroQtdNums.style.display = 'block';
        console.log('Falta numero na posi 5')
    }

    else if (!/[0-9]/.test(inputNum[6])) { 
        pErroQtdNums.style.display = 'block';
        console.log('Falta numero na posi 6')
    }

    else if (!/[0-9]/.test(inputNum[7])) { 
        pErroQtdNums.style.display = 'block';
        console.log('Falta numero na posi 7')
    }

    else if (!/[0-9]/.test(inputNum[8])) {
        pErroQtdNums.style.display = 'block';
        console.log('Falta numero na posi 8') 
    }

    else if (!/[0-9]/.test(inputNum[10])) {
        pErroQtdNums.style.display = 'block';
        console.log('Falta numero na posi 10')
    }

    else if (!/[0-9]/.test(inputNum[11])) {
        pErroQtdNums.style.display = 'block'; 
        console.log('Falta numero na posi 11')
    }

    else if (!/[0-9]/.test(inputNum[12])) {
        pErroQtdNums.style.display = 'block';
        console.log('Falta numero na posi 12')
    }

    else if (!/[0-9]/.test(inputNum[13])) {
        pErroQtdNums.style.display = 'block';
        console.log('Falta numero na posi 13')
    } else {
        pErroQtdNums.style.display = 'none';
        console.log('Tem todos os números!')
    }

    // inputNum[2] !== /(0-9)/ ||
    // inputNum[4]  !== /(0-9)/ ||
    // inputNum[5]  !== /(0-9)/ ||
    // inputNum[6]  !== /(0-9)/ ||
    // inputNum[7]  !== /(0-9)/ ||
    // inputNum[8]  !== /(0-9)/ ||
    // inputNum[10] !== /(0-9)/ ||
    // inputNum[11]  !== /(0-9)/ ||
    // inputNum[12]  !== /(0-9)/ ||
    // inputNum[13]  !== /(0-9)/ ||
    // inputNum[14]  !== 
    // ): 


    }




 

            // function contaNums() {

            //     var inputNum = document.getElementById("input-telefone").value

               



            // }

        

// tem 11 numeros
        
        


        

        function buscarLocal() {
            var inputCEP = document.getElementById('input-cep').value
            var pErroLocal = document.getElementById("p-erro-local")

            var icon = document.getElementById("erro-local-icon")

            var request = new XMLHttpRequest();

            request.open('GET', 'https://viacep.com.br/ws/' + inputCEP + '/json/')
            request.send();

            request.onload = function() {
                let dadosLocal = JSON.parse(this.responseText)

                var estado = dadosLocal.uf;
                var cidade = dadosLocal.localidade;
                var rua = dadosLocal.logradouro;

                switch (true) { // fiz sozinho, o copilot só disse que deveria trocar o "undefined." por undefined pois é uma variável indefinida
                    case (estado === undefined):
                    icon.style.display = 'block'
                     pErroLocal.style.display = 'block';
                     break;

                    case (cidade === undefined): 
                     icon.style.display = 'block'
                     pErroLocal.style.display = 'block';
                     break;

                    case (rua === undefined): 
                     icon.style.display = 'block'
                     pErroLocal.style.display = 'block';
                     break;

                     default: 
                     icon.style.display = 'none'
                      pErroLocal.style.display = 'none';
                      document.getElementById("saida-uf").innerHTML = "Estado: " + estado + ".";
                      document.getElementById("saida-cidade").innerHTML = "Cidade: " + cidade + ".";
                      document.getElementById("saida-logradouro-rua").innerHTML = "Endereço: " + rua + ".";
                }



            }
        }

        function mascaraCep() {
            var inputCep = document.getElementById("input-cep")

            inputCep.addEventListener('keypress', function() {
                var numsCep = inputCep.value.length

                if (numsCep === 5) {
                    inputCep.value += '-'
                }
            })

        }



        function estatura() {
            var inputEst = document.getElementById("input-estatura") 

            inputEst.addEventListener('keypress', function() {
                var numEstat = inputEst.value.length

                if (numEstat === 1) {
                    inputEst.value += '.'
                }

            })


        }


        function peso() {
            var inputPeso = document.getElementById("input-peso").value
            var erroPeso = document.getElementById("pErroPeso")
            var pErroPesoNull = document.getElementById("pErroPesoNull") 

            switch(true) {

            case (inputPeso.indexOf(',') === -1 && inputPeso.indexOf('.') === -1):
                erroPeso.style.display = 'block'; 
                pErroPesoNull.style.display = 'none';
                console.log('deve ter . ou ,')

                break;
            

            case (inputPeso === ''): 
            pErroPesoNull.style.display = 'block';
            erroPeso.style.display = 'none';
            console.log('está vazio')

            break;


            default: 
             erroPeso.style.display = 'none';
             pErroPesoNull.style.display = 'none';

            }

            




            // case (entPeso.indexOf(',') === - 1 && entPeso.indexOf('.') === -1): 
            //  pErroPes.style.display = 'block';
            //  pErroAlt.style.display = 'none'
            //  container.style.display = 'none';

            //  inputPeso.style.borderColor = 'red';
            //  inputAlt.style.borderColor = 'black';


       
            //  break;
        }


        function confereInputNull() {

            let container = document.getElementById("section-oculta")
            let pErro = document.getElementById("erro-null")
    

          if (document.getElementById("input-nome").value === '') {
            pErro.style.display = 'block';

          } else if (document.getElementById("input-sobrenome").value === '') {

            pErro.style.display = 'block';

          } else if (document.getElementById("input-cpf").value === '') {

            pErro.style.display = 'block';

          } else if (document.getElementById("input-cep").value === '') {

            pErro.style.display = 'block';

          } else if (document.getElementById("input-telefone").value === '') {

            pErro.style.display = 'block';

          } else if (document.getElementById("input-estatura").value === '') {

            pErro.style.display = 'block';

          } else if (document.getElementById("input-peso").value === '') {

            pErro.style.display = 'block';

          } else {

            pErro.style.display = 'none';

            
          }


        }



          function confereMsgErro() {

            let container = document.getElementById("section-oculta")

            let pLocal = document.getElementsByClassName("info-local")

            if (document.getElementById("nome-erro").style.display === 'block' ) {

                document.getElementById("btn-login").disabled = true 

            } else if (document.getElementById("nome-erro-num").style.display === 'block') {

                document.getElementById('btn-login').disabled = true 

            } else if (document.getElementById("nome-erro-caractereInv").style.display === 'block'){

                document.getElementById("btn-login").disabled = true

            } else if (document.getElementById("sobrenome-erro").style.display === 'block') {

                document.getElementById("btn-login").disabled = true

            } else if (document.getElementById("sobrenome-erro-num").style.display === 'block') {

                document.getElementById("btn-login").disabled = true

            } else if (document.getElementById("sobrenome-erro-caractereInv").style.display === 'block') {

                document.getElementById('btn-login').disabled = true

            } else if (document.getElementById("rg-erro").style.display === 'block') {

                document.getElementById('btn-login').disabled = true

            } else if (document.getElementById("cpf-erro").style.display === 'block') {

                document.getElementById('btn-login').disabled = true

            } else if (document.getElementById("p-erro-local").style.display === 'block') {

                document.getElementById('btn-login').disabled = true

            } else if (document.getElementById("pErroNum").style.display === 'block') {

                document.getElementById("btn-login").disabled = true

            } else if (document.getElementById("pErroQtdNum").style.display === 'block') {

                document.getElementById("btn-login").disabled = true

            } else if (document.getElementById("pErroPeso").style.display === 'block') {

                document.getElementById('btn-login').disabled = true

            } else if (document.getElementById("pErroPesoNull").style.display === 'block') {

                document.getElementById('btn-login').disabled = true

            } else if (document.getElementById("erro-null").style.display === 'block') {

                document.getElementById("btn-login").disable = true 

            } else {

                document.getElementById('btn-login').disabled = false

                container.style.display = 'block';

                container.scrollIntoView({behavior: "smooth"})
                // colocar o scrool também com a primeira mensagem de erro


                document.getElementById("saida-uf").style.display = 'none'

                document.getElementById("saida-cidade").style.display = 'none'

                document.getElementById("saida-logradouro-rua").style.display = 'none'

                document.querySelectorAll('input').forEach(input => {
                    input.value = ''

                }

            )}

            


        




            //é nessa função que a section oculta aparece, se o p de erro dos inputs vazios estiver com display block


            // para rrsolver o problema de o p do erro não sumir depois de limpar o input, é usar um if para quando estiver vazio, reiniciado,  ou limpar ele automaticamente

          }





        //    switch (true) {

        //     case pErro[1].style.display === 'block':    
        //     case pErro[2].style.display === 'block': 
        //     case pErro[3].style.display === 'block': 
        //     case pErro[4].style.display === 'block': 
        //     case pErro[5].style.display === 'block':
        //     case pErro[6].style.display === 'block':
        //     case pErro[7].style.display === 'block':

        //     document.getElementById('btn-login').disabled = true
        //     container.style.display = 'none'

        //     break;

        //     default: 

        //     container.scrollIntoView({behavior: "smooth"});

        //     document.getElementById('btn-login').disabled = false
        //     container.style.display = 'block';

        //    }

        






        //FUNÇÃO PARA QUE, QUANDO ALGUMA MENSAGEM DE ERRO ESTEJA HABILITADA, O BOTÃO GANHA UM DISABLE
             // document.getElementById('btn-login').disabled = 'false'
        // os inputs serão limpos quando a div aparecer









                // switch (true) {
                //     case (inputCpf.value.length != Number && inputCpf.indexOf('.') === -1 && inputCpf.indexOf('-') === -1):
                //         inputCpf.value = '';
                // }



         
      



           

            // if (lmtSenha.length > refSenha) {
            //     senha.value = lmtSenha.slice(0, refSenha);
            // }

            // while (input.value.length <= 8) {
            //     input.style.borderColor = 'red';


            // }

                
       

           

                

    //         if (lmtNumCarb.length > refCarb) {
    //     carbInfor.value = lmtNumCarb.slice(0, refCarb);
    // }
        

