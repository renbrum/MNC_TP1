/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
this.c1 = 0;
this.k = 0;
this.b = 0;
this.l = 0;
this.Aux = 0;
this.aux2 = 0;
this.zero = 0;
this.n1 = 0;
this.t = 0;



function AlgoritmoLimitesRaizes(grau, coefFunc) {
    grau = parseFloat(grau);
    this.c1 = parseFloat(coefFunc[0]);

    if (this.c1 === 0) {
        document.write("Coeficiente c(1) nulo.");
        document.write("abandone!!"); //ABANDONE ???
    }
    this.t = (parseFloat(grau) + 1);  
    coefFunc.push(0);
    
    this.n1 = grau + 1;
    this.aux2 = parseFloat(coefFunc[this.n1]);
    //    repita
    do{
        if (this.aux2 === this.zero) {
            document.write("Polinômio é deflacionado!");
        }
        this.t = (this.t) - 1;
    }while(!(coefFunc[this.t] !== 0));
    
    // Calculo dos quatro limites das raizes reais   
    for (var i = 1; i < 4; i++) {
        if ((i === 2) || (i === 4)) {
            for (var j = 1; j < (this.t / 2); j++) {
                this.Aux = coefFunc[j];
                coefFunc[j] = coefFunc[(this.t - j) + 1];
                coefFunc[(this.t - j) + 1] = this.Aux;
            }
        } else {
            if (i === 3) {
                for (var h = 1; h < (this.t / 2); h++) {
                    this.Aux = coefFunc[h];
                    coefFunc[h] = coefFunc[(this.t - h) + 1];
                    coefFunc[(this.t - h) + 1] = this.Aux;
                }
                for (var h = (this.t - 1); h <= 1; h++) {
                    coefFunc[h] = -coefFunc[h];

                }
            }
        }
        if (coefFunc[0] < 0) {
            for (var j = 1; j <= this.t; j++) {
                coefFunc[j] = (coefFunc[j] * -1);
            }
        }
        this.k = 2;
        do{
            this.k = this.k + 1;
        }while(!((coefFunc[k] < 0) || (k > t)));


        if (this.k <= this.t) {
            for (var j = 2; j <= this.t; j++) {
                if ((coefFunc[this.k] < 0) || (abs(coefFunc[j]) > 0)) {
                    this.b = Math.abs(coefFunc[j]);
                }
            }
            var dsoma = 0;
            dsoma = Math.pow(this.b / coefFunc[0], (1 / (this.k - 1)));
            this.l[i] = 1 + dsoma;
        } else {
            this.l[i] = Math.pow(10, 100);
        }
    }
    this.Aux = this.l[1];
    this.l[i] = (1 / this.l[2]);
    this.l[2] = this.Aux;
    this.l[3] = -this.l[3];
    this.l[4] = -this.l[4];
    return this.l;
}
;
