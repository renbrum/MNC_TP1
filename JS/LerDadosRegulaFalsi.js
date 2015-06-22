/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
this.grau = 0;
this.coefFunc = [];
this.intervaloa = 0;
this.intervalob = 0;
this.IterMax = 0;
this.Toler = 0;

function lerDados() {
    this.grau = parseInt(document.getElementById("grau").value);
    this.intervaloa = parseInt(document.getElementById("intervalo1").value);
    this.intervalob = parseInt(document.getElementById("intervalo2").value);
    this.Toler = document.getElementById("Toler").value;
    this.IterMax = parseInt(document.getElementById("iterMax").value);
    this.coefFunc = [];
    var cont = 0;
    for (var i = this.grau; i >= 0; i--) {
        this.coefFunc[cont] = parseFloat(document.getElementById("x" + i).value);
        cont++;
    }

    /*this.grau = 3;
    this.coefFunc = [4, 6, -26, -14];
    this.intervaloa = -1;
    this.intervalob = 1;
    this.Toler = 0.001;
    this.IterMax = 100;
    var solucao = RegulaFalsi(this.grau, this.coefFunc, this.intervaloa, this.intervalob, this.Toler, this.IterMax);*/
    //grau, coefFunc, a, b, Toler, IterMax
    //document.write("<br>A raiz é: "+solucao);
    //
//    imprimirResultadoLR(this.grau, this.coefFunc, solucao);
}


function Avaliar() {
//    Setando Dados
//    var solucao = AlgoritmoHorner(leia.grau, leia.coefFunc, leia.ponto);
//    var grau = 5;
//    var ponto = 2;
//    var coefFunc = [3, -2, 5, 7, -3, 1];
    var leia = new lerDados();
    leia;
    var solucao = RegulaFalsi(leia.grau, leia.coefFunc, leia.intervaloa, leia.intervalob, leia.Toler, leia.IterMax);
    imprimirResultado(leia.grau, leia.coefFunc, solucao);
}

function RegulaFalsi(grau, coefFunc, a, b, Toler, IterMax) {
    var FA = 0;
    var t = 0;
    var Iter = 0;
    var FX = 0;
    var FB = 0;
    var Raiz = 0;
    var x = 0;
    var DELTAX = 0;
    var CondErro = 0;
    FA = f(a, grau, coefFunc);
    FB = f(b, grau, coefFunc);
    if ((FA * FB) > 0) {
        document.write("Função não muda de sinal nos extremos dos intervalo dado");
        return false;
    } else {
        if (FA > 0) {
            t = a;
            a = b;
            b = t;
            t = FA;
            FA = FB;
            FB = t;
        }
        Iter = 0;
        x = b;
        FX = FB;
        do {
            DELTAX = -FX / ((FB - FA) * (b - a));
            x = x + DELTAX;
            FX = f(x, grau, coefFunc);

            //return FX;
            document.write("Iteração: " + Iter + " a: " + a +" FA"+ FA + "b: " + b+ " FB:" + FB + " X: " + x+ "FX: " + FX + "DELTA X: " + DELTAX );
            if (FX < 0) {
                a = x;
                FA = FX;
            } else {
                b = x;
                FB = FX;
            }
            Iter = Iter + 1;


        } while (((Math.abs(DELTAX) > Toler) && (Math.abs(FX) > Toler)) || (Iter < IterMax));
        Raiz = x;
//        return x;
        if (Math.abs(DELTAX) <= Toler && Math.abs(FX) <= Toler) {
            CondErro = 0;
        } else {
            CondErro = 1;
        }

        // document.write("Iterações:" +Iter+ "CondErro:" +CondErro);
        return Raiz;
    }
}

function f(x, grau, coefFunc) {
    var resultado = 0;
    var aux = [];
    var j;
    var auxGrau = grau;
    for (j = 0; j <= grau; j++) {
        aux[j] = coefFunc[j];
    }
    for (var i = 0; i <= grau; i++) {
        if (i === grau) {
            resultado += aux[grau];

        } else {
            if (i !== grau) {
                resultado += ((Math.pow(x, auxGrau)) * aux[i]);
            }
            auxGrau--;
        }
    }
    return resultado;
}


