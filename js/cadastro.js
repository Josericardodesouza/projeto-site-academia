

//testando vars globais

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

   
    var inputNum = document.getElementById("input-telefone").value
    var pErroTel = document.getElementById("pErroNum")
    var pErroQtdNums = document.getElementById("pErroQtdNum")

  

    // inputTel.onclick = function() {
    //     this.value = '('
    // }

        

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
            
            } else if (inputSobrenomeValue === '') {
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
        

            

       


             




        
        
         function mascaraRG() {

            console.log("chamou funcao")
            
            var inputRg = document.getElementById("input-rg")
            var inputRgValue = document.getElementById("input-rg").value

            console.log(inputRgValue)

            inputRg.addEventListener("input", function() {

            var limpaInputRg = inputRg.value.replace(/\D/g, "").substring(0, 12)

            var arrayRg = limpaInputRg.split("")

            var inputFormatado = ""

            if (arrayRg.length > 0) {
                inputFormatado += arrayRg.slice(0, 2).join("")

                console.log("ok rg")
            }

            if (arrayRg.length > 2) {
                inputFormatado += `.${arrayRg.slice(2, 5).join("")}`
            }

            if (arrayRg.length > 5) {
                inputFormatado += `.${arrayRg.slice(5, 8).join("")}`
            }

            if (arrayRg.length > 8) {
                inputFormatado += `-${arrayRg.slice(8, 9).join("")}`
            }


            inputRg.value = inputFormatado;

            


    


         
       
             

            // inputRg.addEventListener('input', function() {
            //     var rgLength = inputRg.value.length

            //      if (rgLength === 2) {
            //         inputRg.value += '.'
            //         console.log('ponto')
            //         console.log(rgLength)

            //      } else if (rgLength === 6) {
            //        inputRg.value += '.'
            //        console.log('ponto')
            //        console.log(rgLength)

            //     } else if (rgLength === 10) {
            //         inputRg.value += '-'
            //         console.log('traço')
            //         console.log(rgLength)

            //     }

            //  })


        })


             
        if (inputRg.value.length > inputFormatado.length) {
            inputRg.value = inputFormatado;
         } else {
            inputRg.value = inputFormatado;
         }

        }


        

         function limparInputRg() {
            
         }



            function mascaraRgConfere() {
                var inputRg = document.getElementById('input-rg')
                var inputRgValue = document.getElementById("input-rg").value
               var  pErroRg = document.getElementById("rg-erro")


                    // if (!/^[a-zA-ZÀ-ü' ?\d]+$/.test(inputSobrenomeValue))


               

                 if (!/^\d{2}\.\d{3}\.\d{3}\-\d$/.test(inputRgValue)) {
                    console.log('Inválido')
                    inputRg.style.borderColor = 'red'
                    pErroRg.style.display = 'block'

                 } else {
                    console.log('Tudo certo!')
                    inputRg.style.borderColor = 'white'
                    pErroRg.style.display = 'none'
                
                 
                 }
                 
                 
                 if (inputRgValue === '') {
                    pErroRg.style.display = 'none'
                    inputRg.style.borderColor = 'white'
                 }

                }
                


        function mascaraCpf() {
           
                // var inputCpf = parseFloat(document.getElementById("input-cpf"));
                var inputCpf = document.getElementById("input-cpf")

                inputCpf.addEventListener("input", function() {
                    var limpaInputCpf = inputCpf.value.replace(/\D/g, "").substring(0, 14)

                    var arrayCpf = limpaInputCpf.split("")
                    var inputFormatadoCpf = ""

                    if (arrayCpf.length > 0) {
                        inputFormatadoCpf += arrayCpf.slice(0, 3).join("")
                    }

                    if (arrayCpf.length > 3) {
                        inputFormatadoCpf += `.${arrayCpf.slice(3, 6).join("")}`
                    }

                    if (arrayCpf.length > 6) {
                        inputFormatadoCpf += `.${arrayCpf.slice(6, 9).join("")}`
                    }

                    if (arrayCpf.length > 9) {
                        inputFormatadoCpf += `-${arrayCpf.slice(9, 12).join("")}`
                    }

                    inputCpf.value = inputFormatadoCpf;
                })

                             
        if (inputCpf.value.length > inputFormatadoCpf.length) {
            inputCpf.value = inputFormatadoCpf
         } else {
            inputCpf.value = inputFormatadoCpf
         }

        }




                



       

            //     inputCpf.addEventListener('input', function() {
            //         var cpfLength = inputCpf.value.length

            //         if (cpfLength === 3 || cpfLength === 7) {
            //             inputCpf.value += '.'
            //             // confere = 12

            //         } else if (cpfLength === 11) {
            //             inputCpf.value += '-'

            //         }


            //     }
            //  )

        


        function mascaraCpfConfere() {
            var inputCpf = document.getElementById("input-cpf")

        
            var inputCpfValue = document.getElementById("input-cpf").value

            var pErroCpf = document.getElementById("cpf-erro")

            if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}/.test(inputCpfValue)) {
                console.log('Inválido')
                inputCpf.style.borderColor = 'red'
                pErroCpf.style.display = 'block'

            } else {
                console.log('Tudo certo!')
                inputCpf.style.borderColor = 'white'
                pErroCpf.style.display = 'none'
            }


            if (inputCpfValue === '') {
                inputCpf.style.borderColor = 'white'
                pErroCpf.style.display = 'none'

            }


        }


        function mascaraTelefone() {

            var inputTel = document.getElementById("input-telefone")

          
        
            inputTel.addEventListener('input', function() {

             var limpaInput = inputTel.value.replace(/\D/g, "").substring(0, 11)

             var arrayNumeros = limpaInput.split("")

             var numeroEstruturado = ""

             if (arrayNumeros.length > 0) {
                numeroEstruturado += `(${arrayNumeros.slice(0,2).join("")})`
             }

             if (arrayNumeros.length > 2) {
                numeroEstruturado += ` ${arrayNumeros.slice(2, 7).join("")}` 
             }

             if (arrayNumeros.length > 7) {
                numeroEstruturado += `-${arrayNumeros.slice(7, 12).join("")}`
             }

             inputTel.value = numeroEstruturado;


             if (inputTel.value.length > numeroEstruturado.length) {
                inputTel.value = numeroEstruturado;
             } else {
                inputTel.value = numeroEstruturado;
             }

            })






            //     if (numTel === 1) {
            //         inputTel.value = '(' + inputTel.value.slice(0)

            //     }
                
            //     if (numTel === 3) {
            //         inputTel.value += ')'
                 
                    
            //     }


            //  if (numTel === 4){
            //     inputTel.value += ' '
            //  }

            //     if (numTel === 10) {
            //         inputTel.value  += '-'
            //     }
            // }
            // )


            
        }

    
    

        function confereNum() {
         
            var inputNum = document.getElementById("input-telefone").value

            if (!/^\(\d{2}\)\s\d{5}\-\d{4}$/.test(inputNum)) {

         

                console.log('numInválido')
    
            } else {

                console.log('numVálido')
            }


        }



/*function contaNumsTeste() {

    
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


    }*/

        

// tem 11 numeros


        

        function buscarLocal() { // vai ser chamada pelo input quando ele estiver completo, usar regex
            var inputCEP = document.getElementById('input-cep').value
            var pErroLocal = document.getElementById("p-erro-local")
            var icon = document.getElementById("icon-local-erro")
            var botaoCep = document.getElementById("btn-cep")


            botaoCep.style.display = 'none'

            console.log("chamou função")



            if (inputCEP.length < 9)  {
                icon.style.display = 'block'
                pErroLocal.style.display = 'flex';
                // document.getElementById("saida-uf").innerHTML = ''
                document.getElementById("saida-cidade").innerHTML = ''
                document.getElementById("saida-logradouro-rua").innerHTML = ''
                document.getElementById("saida-bairro").innerHTML = ''
            
               


            } else {


                icon.style.display = 'none'
                pErroLocal.style.display = 'none';
                
            }


            if (inputCEP.length === 9) { // se não der jeito, envolver isso tudo numa função


                var request = new XMLHttpRequest();

                request.open('GET', 'https://viacep.com.br/ws/' + inputCEP + '/json/')
                request.send();
    
                request.onload = function() {
                    let dadosLocal = JSON.parse(this.responseText);
    
                    var estado = dadosLocal.uf;
                    var cidade = dadosLocal.localidade;
                    var rua = dadosLocal.logradouro;
                    var bairro = dadosLocal.bairro;


                    if (cidade === undefined) {
                        icon.style.display = 'block'
                        pErroLocal.style.display = 'flex';
                        document.getElementById("saida-cidade").style.display = "none"
                        
                    }

                    if (rua === undefined) {
                        icon.style.display = 'block'
                        pErroLocal.style.display = 'flex';
                        document.getElementById("saida-logradouro-rua").style.display = "none"
                        

                    }

                    if (bairro === undefined) {
                        icon.style.display = 'block'
                        pErroLocal.style.display = 'flex';
                        document.getElementById("saida-bairro").style.display = "none"
                     

                    }

                    // }
    
                    // switch (true) { 
                    //     case (estado === undefined):
                    //     icon.style.display = 'block'
                    //      pErroLocal.style.display = 'flex';
                    //      break;
    
                    //     case (cidade === undefined): 
                    //      icon.style.display = 'block'
                    //      pErroLocal.style.display = 'flex';
                    //      break;
    
                    //     case (rua === undefined): 
                    //      icon.style.display = 'block'
                    //      pErroLocal.style.display = 'flex';
                    //      break;

                    //      case (bairro === undefined): 
                    //      icon.style.display = 'block'
                    //      pErroLocal.style.display = 'flex';
                    //      break;
    
                    //      default: 
                    //      icon.style.display = 'none'
                    //       pErroLocal.style.display = 'none';
                    //     //   document.getElementById("saida-uf").innerHTML = "Estado: " + estado + ".";
                    //       document.getElementById("saida-cidade").innerHTML = "Cidade: " + cidade + "/" + estado + ".";
                    // }



                    if (cidade != '') {
                        document.getElementById("saida-cidade").innerHTML = "Cidade: " + cidade + "/" + estado;
                        document.getElementById("btn-cep").style.display = "block"

                    } else {
                        document.getElementById("saida-cidade".innerHTML = "Município não encontrado")
                        document.getElementById("btn-cep").style.display = 'block'

                    }

                    

                    if (rua !== '') {
                        document.getElementById("saida-logradouro-rua").innerHTML = "Logradouro: " + rua;
                        document.getElementById("btn-cep").style.display = 'block'


                    } else {
                        document.getElementById("saida-logradouro-rua").innerHTML = "Logradouro não encontrado."
                        document.getElementById("btn-cep").style.display = 'block'

                    }

                    if (bairro !== '') {
                        document.getElementById("saida-bairro").innerHTML = "Bairro: " + bairro;
                        document.getElementById("btn-cep").style.display = 'block'

                    } else {
                        document.getElementById("saida-bairro").innerHTML = "Bairro não encontrado.";
                    }






           
    
                }
                
            }

            
        if (inputCEP.length < 1) {
            icon.style.display = 'none'
            pErroLocal.style.display = 'none';
            // document.getElementById("saida-uf").innerHTML = ''
            document.getElementById("saida-cidade").innerHTML = ''
            document.getElementById("saida-logradouro-rua").innerHTML = ''
            document.getElementById("saida-bairro").innerHTML = ''

        }

    }




//  var teste = document.getElementById("input-cep")

//   if (teste.value.length >= 9) {
//      buscarLocal()
//   }


    function aparecerBotaoCep() {
        var input = document.getElementById("input-cep")
        var botao = document.getElementById("btn-cep")
        var pErro = document.getElementById("p-erro-local")


        input.addEventListener("input", function() {
            
        if (input.value.length < 9) {
            botao.style.display = "none"
            console.log('é  menor ')
        } else {
            botao.style.display = "block"
            console.log("é igual")
        }


        })


    }



    document.getElementById("form-cad").addEventListener("submit", function(evento) {
        evento.preventDefault()

        // evita que, quando clicado, o botão que executa a função de exibir os dados recebidos da api Via Cep recarregue a página.

    })




        function mascaraCep() {
            var inputCep = document.getElementById("input-cep")
            var pCidade = document.getElementById("saida-cidade")
            var pLogradouro = document.getElementById("saida-logradouro-rua")
            var pBairro = document.getElementById("saida-bairro")
            var pErro = document.getElementById("p-erro-local")
            var btn = document.getElementById("btn-cep")

            inputCep.addEventListener("input", function() {
                var limpaInputCep = inputCep.value.replace(/\D/g, "").substring(0, 9)

                var arrayCep = limpaInputCep.split("")

                var inputFormatadoCep = ""


                if (arrayCep.length > 0) {
                    inputFormatadoCep += arrayCep.slice(0, 5).join("")
                }

                if (arrayCep.length > 5) {
                    inputFormatadoCep += `-${arrayCep.slice(5, 9).join("")}`
                }



                if (arrayCep.length < 9) {
                    pCidade.innerHTML = ""
                    pBairro.innerHTML = ""
                    pLogradouro.innerHTML= ""
                    pErro.style.display = "none"

                    
                }

                inputCep.value = inputFormatadoCep

            })


            // if (inputCep.value.length > inputFormatadoCep.length) {
            //     inputCep.value = inputFormatadoCep
            // } else {
            //     inputCep.value = inputFormatadoCep
            // }


            

            // inputCep.addEventListener('input', function() {
            //     var numsCep = inputCep.value.length

            //     if (numsCep === 5) {
            //         inputCep.value += '-'
            //     }
            // })

        }



        function estatura() {
            var inputEst = document.getElementById("input-estatura") 

            inputEst.addEventListener('input', function() {
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




        // var error = document.getElementsByClassName('msg-erro')

        // if (document.getElementsByClassName("msg-erro").style.display )



          function confereMsgErro() {

            let container = document.getElementById("section-oculta")

            let pLocal = document.getElementsByClassName("info-local")

            let pBmvd = document.getElementById("saida-bmvd")

            if (document.getElementById("nome-erro").style.display === 'block') {

                document.getElementById("btn-cad").disabled = true 

            } else if (document.getElementById("nome-erro-num").style.display === 'block') {

                document.getElementById('btn-cad').disabled = true 

            } else if (document.getElementById("nome-erro-caractereInv").style.display === 'block'){

                document.getElementById("btn-cad").disabled = true

            } else if (document.getElementById("sobrenome-erro").style.display === 'block') {

                document.getElementById("btn-cad").disabled = true

            } else if (document.getElementById("sobrenome-erro-num").style.display === 'block') {

                document.getElementById("btn-cad").disabled = true

            } else if (document.getElementById("sobrenome-erro-caractereInv").style.display === 'block') {

                document.getElementById('btn-cad').disabled = true

            } else if (document.getElementById("rg-erro").style.display === 'block') {

                document.getElementById('btn-cad').disabled = true

            } else if (document.getElementById("cpf-erro").style.display === 'block') {

                document.getElementById('btn-cad').disabled = true

            } else if (document.getElementById("p-erro-local").style.display === 'block') {
                var teste = document.getElementById("input-cep")
                teste.scrollIntoView({behavior: "smooth"});

                document.getElementById('btn-cad').disabled = true

            } else if (document.getElementById("pErroNum").style.display === 'block') {

                document.getElementById("btn-cad").disabled = true

            } else if (document.getElementById("pErroQtdNum").style.display === 'block') {

                document.getElementById("btn-cad").disabled = true

            } else if (document.getElementById("pErroPeso").style.display === 'block') {

                document.getElementById('btn-cad').disabled = true

            } else if (document.getElementById("pErroPesoNull").style.display === 'block') {

                document.getElementById('btn-cad').disabled = true

            } else if (document.getElementById("erro-null").style.display === 'block') {

                document.getElementById("btn-cad").disable = true 

            } else {

                container.style.display = 'block';

                pBmvd.innerHTML = 'Olá ' + inputNome.value + ', seja muito bem vindo à LOREM IPSUM FITNESS!'

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



          /*function msg() {
    

          var msg = document.getElementById("bem-vindo")

          msg.innerHTML = 'Bem-vindo'


          }

          */





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
        

