
function contar() {

    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passos = document.getElementById("passos");
    var res = document.getElementById("resimg");

   
        
    if(inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
            alert("ERROR !!! Preencha todos os campos com um número acima de zero !");
        } else{

            res.innerHTML = "Contagem: "
            var i = Number(inicio.value);
            var f = Number(fim.value);
            var p = Number(passos.value);

           for(var c = i; c <= f; c += p){
               res.innerHTML += ` ${c}\u{1F449}` 
           }

        }
    }