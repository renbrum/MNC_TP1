/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
this.grau = 0;
this.ponto = 0;
this.coefFunc = [];
this.coefFuncNewton = [];


function lerDados() {
    this.grau = parseInt(document.getElementById("grau").value);
    this.ponto = parseInt(document.getElementById("ponto").value);
    this.coefFunc = [];
    var cont = 0;
    for (var i = this.grau; i >= 0; i--) {
        this.coefFunc[cont] = parseFloat(document.getElementById("x" + i).value);
        cont++;
    }
}
function lerDadosLR() {
    this.grau = parseInt(document.getElementById("grau").value);
    this.coefFunc = [];
    var cont = 1; 
    for (var i = this.grau; i >= 0; i--) { //coefFunc começa com [1];
         
          
        this.coefFunc[cont] = parseFloat(document.getElementById("x" + i).value);
        cont++;
    }
}

function lerDadosMuller() {
    this.limiteInferior = parseFloat(document.getElementById("limiteInferior").value);
    this.limiteSuperior = parseFloat(document.getElementById("limiteSuperior").value);
    this.toler = parseFloat(document.getElementById("toler").value);
    this.iterMax = parseFloat(document.getElementById("iterMax").value);
}

function lerDadosNewton() {
    this.grau = parseFloat(document.getElementById("grau").value);
    var cont = 0;
    for (var i = this.grau; i >= 0; i--) {
        this.coefFuncNewton[cont] = parseFloat(document.getElementById("x" + i).value);
        cont++;
    }
    this.x0 = parseFloat(document.getElementById("x0").value);
    this.inter_min = parseFloat(document.getElementById("inter_min").value);
    this.inter_max = parseFloat(document.getElementById("inter_max").value);
}

function Avaliar() {
//    Setando Dados
//    var solucao = AlgoritmoHorner(leia.grau, leia.coefFunc, leia.ponto);
//    var grau = 5;
//    var ponto = 2;
//    var coefFunc = [3, -2, 5, 7, -3, 1];
    var leia = new lerDados();
    leia;
    var solucao = AlgoritmoHorner(leia.grau, leia.coefFunc, leia.ponto);
    imprimirResultado(leia.grau, leia.ponto, leia.coefFunc, solucao);
}
function AvaliarLR() {
//    Setando Dados
//    this.grau = 4;
//    this.coefFunc = [1, 2, -13, -14, 24];
//    L = 0.6316    4.7417  -14.0000 -0.5760
//    var leia = new lerDados();
//    leia;
//    var solucao = AlgoritmoLimiteRaizes(leia.grau, leia.coefFunc);
//    imprimirResultadoLR(leia.grau, leia.coefFunc, solucao);
    var leia = new lerDadosLR();
    leia;
    var solucao = AlgoritmoLimitesRaizes(leia.grau, leia.coefFunc);
    imprimirResultadoLR(leia.grau, leia.coefFunc, solucao);

}

function AvaliarNewton() {
//    Setando Dados
    
    this.x0 = parseFloat(document.getElementById("x0").value);
    this.grau = parseFloat(document.getElementById("grau").value);
    this.IterMax = parseFloat(document.getElementById("inter_max").value);
    this.Toler = parseFloat(document.getElementById("inter_min").value);
    
    // this.coefFunc = [1, -14, 30, 236, -511,-1470];

    this.coefFunc = [];
    var cont = 1; 
    for (var i = this.grau; i >= 0; i--) { //coefFunc começa com [1];
         
          
        this.coefFunc[cont] = parseFloat(document.getElementById("x" + i).value);
        cont++;}
    
    var solucao = Newton(this.x0, this.Toler, this.IterMax, this.coefFunc,this.grau);
}

function AvaliarDekkerBrent() {
//    Setando Dados
//    var leia = new lerDadosLR();
 
    this.a = 8;
    this.b = 10;
    this.grau = 5;
    this.coefFunc = [1, -14, 30, 236, -511,-1470];
    this.IterMax = 8;
    this.Toler = 10;
    var solucao = DekkerBrent(this.a, this.b, this.Toler, this.IterMax, this.coefFunc, this.grau);
    
//    L = 0.6316    4.7417  -14.0000 -0.5760
//    var leia = new lerDados();
//    leia;
//    var solucao = AlgoritmoLimiteRaizes(leia.grau, leia.coefFunc);
//    imprimirResultadoLR(leia.grau, leia.coefFunc, solucao);
}

function AvaliarMuller() {
    var leia = new lerDadosMuller();
    leia;
//    this.limiteInferior = 10.0;
//    this.limiteSuperior = 12.0;
//    this.toler = 0.0000001;
//    this.iterMax = 100;
    
    if (isNaN(this.limiteInferior)) {
        alert('Valor inválido em "Limite inferior": ' + fieldLimiteInferior.value);
        a.focus();
        return;
    } else if (isNaN(this.limiteSuperior)) {
        alert('Valor inválido em "Limite superior": ' + fieldLimiteSuperior.value);
        c.focus();
        return;
    } else if (isNaN(this.toler)) {
        alert('Valor inválido em "Tolerância": ' + fieldToler.value);
        toler.focus();
        return;
    } else if (isNaN(this.iterMax)) {
        alert('Valor inválido em "Iterações": ' + fieldIterMax.value);
        iterMax.focus();
        return;
    }
//    var leia = new lerDadosMuller();
//    leia;
//    var solucao = AlgoritmoMuller(leia.limiteInferior, leia.limiteSuperior, leia.toler, leia.iterMax);
//    imprimirResultado(leia.limiteInferior, leia.limiteSuperior, leia.toler, leia.iterMax, solucao);
    AlgoritmoMuller(this.limiteInferior, this.limiteSuperior, this.toler, this.iterMax);
}
;

