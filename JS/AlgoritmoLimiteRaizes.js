/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function limitesRaizes(grau, coefFunc) {
    if (grau = 0) {
    alert("Coeficiente c(1) nulo.");
    }
    var t = 0;
            t = (parseFloat(grau) + 1);
            coefFunc[(t + 1)] = 0;
            var aux = 0;
            aux = parseFloat(coefFunc[(t) + 1]);
    //    repita
            if (aux = 0) {
    alert("Polinômio é deflacionado!");
    }
    if (coefFunc[t] != 0){
    //        interrompa
    }
    //    
    for (var i = 1; i < 4; i++){
    if (i = 2 || i = 4){
    for (var j = 1; j < (t / 2); j++){
    var aux2 = coefFunc[j];
            coefFunc[j] = coefFunc[(t - j) + 1];
            coefFunc[(t - j) + 1] = aux2;
    }
    } else{
    if (var i = 3){
    for (var j = 1; j < (t / 2); j++){
    var aux2 = coefFunc[j];
            coefFunc[j] = coefFunc[(t - j) + 1];
            coefFunc[(t - j) + 1] = aux2;
    }
    }
    }

    }
}
;
