/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
this.k = 0;
this.b = 0;
this.l = 0;
this.Aux = 0;
function limitesRaizes(grau, coefFunc) {
    var grau1 = parseFloat(grau);
    if (0 === grau) {
        alert("Coeficiente c(1) nulo.");
    }
    var t = 0;
    t = (parseFloat(grau) + 1);
    coefFunc[(t + 1)] = 0;
    var aux = 0;
    aux = parseFloat(coefFunc[(t) + 1]);
    //    repita
    if (aux === 0) {
        alert("Polinômio é deflacionado!");
    }
    
    if (coefFunc[t] !== 0) {
        //        interrompa
    }
    //    
    for (var i = 1; i < 4; i++) {
        if ((i === 2) || (i === 4)) {
            for (var j = 1; j < (t / 2); j++) {
                this.Aux = coefFunc[j];
                coefFunc[j] = coefFunc[(t - j) + 1];
                coefFunc[(t - j) + 1] = Aux;
            }
        } else {
            if (i === 3) {
                for (var j = 1; j < (t / 2); j++) {
                    var Aux = coefFunc[j];
                    coefFunc[j] = coefFunc[(t - j) + 1];
                    coefFunc[(t - j) + 1] = Aux;
                }
                for(j = (t-1);j<=1;j++){
                    coefFunc[j] = -coefFunc[j];
                    
                }
            }
        }
        if(coefFunc[0] < 0){
            for(j = 1;j<=t;j++){
                coefFunc[j] = -coefFunc[j];
            }
        }
        this.k = 2;
        // Repita        
        if((coefFunc[k] < 0) || (k > t)){
            break;
        }
        this.k = this.k + 1;
        //
        
        if(k <= t){
            this.b = 0;
            for(j = 2; j <= t; j++){
                if((coefFunc[k] < 0) || (abs(coefFunc[j]) > 0)){
                    b = Math.abs(coefFunc[j]);
                }
            }
            var dsoma = 0;
            dsoma = Math.pow(b/coefFunc[0], (1/ (this.k - 1)));
            this.l[i] = 1 + dsoma;
        }else{
            this.l[i] = Math.pow(10,100);
            
        }


    }
    this.Aux = this.l[1];
    this.l[i] = (1/this.l[2]);
    this.l[2] = this.Aux;
    this.l[3] = -this.l[3];
    this.l[4] = -this.l[4];
    return this.l;
}
;
