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


        function confereNomeSobrenomeNum() {
            let inputNome = document.getElementById("input-nome")
            let inputSobrenome = document.getElementById("input-sobrenome")
            // var inputSobrenome = document.getElementById("input-sobrenome").value
            let pErroNomeNum = document.getElementById("nome-erro-num")
            let pErroSobrenomeNum = document.getElementById("sobrenome-erro-num")
            
            
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
            let inputNome = document.getElementById("input-nome");
            let inputSobrenome = document.getElementById("input-sobrenome")

            let pErroNomeNull = document.getElementById("nome-erro")
            let pErroSobrenomeNull = document.getElementById("sobrenome-erro")


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
            let inputNome = document.getElementById("input-nome");
            let inputSobrenome = document.getElementById("input-sobrenome")

            let pErroNomeNull = document.getElementById("nome-erro")
            let pErroSobrenomeNull = document.getElementById("sobrenome-erro")

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
            let inputNome = document.getElementById("input-nome")
            let pNomeCaractereInv = document.getElementById("nome-erro-caractereInv")
           

            let inputNomeValue = inputNome.value
           

            if (!/[a-zA-Z]/.test(inputNomeValue)) {
                pNomeCaractereInv.style.display = 'block';
                inputNome.style.borderColor = 'red'
                 console.log('Há uma / no campo nome')
            } else {
                pNomeCaractereInv.style.display = 'none';
                inputNome.style.borderColor = 'white'

                 console.log('a barra em NOME foi removida')
            }


            

        }


        function sobrenomeCaractereInvalido() {
            let inputSobrenome = document.getElementById("input-sobrenome")
            let pSobrenomeCaractereInv = document.getElementById("sobrenome-erro-caractereInv")

            let inputSobrenomeValue = inputSobrenome.value


            if (!/[a-zA-Z]/.test(inputSobrenomeValue)) {
                pSobrenomeCaractereInv.style.display = 'block';
                inputSobrenome.style.borderColor = 'red';
                 console.log('Há uma barra no sobrenome')
            } else {
                pSobrenomeCaractereInv.style.display = 'none';
                inputSobrenome.style.borderColor = 'white';
                console.log('Não há uma barra no sobrenome')
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
             var inputRg = document.getElementById("input-rg")
            //  var pErroRg = document.getElementById("rg-erro")

             inputRgValue = inputRg.value
             

            inputRg.addEventListener('keypress', function() {
                var rgLength = inputRg.value.length

                 if (rgLength === 2 || rgLength === 6) {
                   inputRg.value += '.'
                } else if (rgLength === 10) 
                    inputRg.value += '-'
             })


         } 



            function mascaraRgConfere() {
                var inputRgValue = document.getElementById("input-rg").value
                 var inputRg = document.getElementById("input-rg")
                var pErroRg = document.getElementById("rg-erro")

                // var rgLength = inputRg.value.length

             

                /*console.log('valor inicial RG = ' + inputRgValue) // ele está recebendo 12 invés de 2,*/

                /*console.log(inputRgValue[0])
                console.log(inputRgValue[1])
                console.log(inputRgValue[3])
                console.log(inputRgValue[4])
                console.log(inputRgValue[5])
                console.log(inputRgValue[6])
               
                console.log(inputRgValue[8])
                console.log(inputRgValue[9])
                console.log(inputRgValue[10])
             
                console.log(inputRgValue[12])*/



                
                // tentar com While
                //tentar com OnChange


               

                 if (/^\d{2}(.)\d{3}(.)\d{3}(-)\d{2}$/.test(inputRgValue)) { // tá funcionando/ sem o !, 1 é numero, e a tambem
                    console.log('tudo certo')
                    pErroRg.style.display = 'block';
                    inputRg.style.borderColor = 'red';

                } else {
                     console.log('tem caractere no meio');
                     pErroRg.style.display = 'none'
                     inputRg.style.borderColor = 'black';
                 }

                
                


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
            var inputCpf = document.getElementById("input-cpf")
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


        function mascaraTelefone() {
            inputTel = document.getElementById("input-telefone")

            inputTel.addEventListener('keypress', function() {
                var numTel = inputTel.value.length

                if (numTel === 9) {
                    inputTel.value  += '-'
                }
            }
            )
        }

        function confereNum() {
            var inputNum = document.getElementById("input-telefone").value
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

    var inputNum = document.getElementById("input-telefone").value
    var pErroQtdNums = document.getElementById("pErroQtdNum")



    
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
                     pErroLocal.style.display = 'block';
                     break;

                    case (cidade === undefined): 
                     pErroLocal.style.display = 'block';
                     break;

                    case (rua === undefined): 
                     pErroLocal.style.display = 'block';
                     break;

                     default: 
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
        

