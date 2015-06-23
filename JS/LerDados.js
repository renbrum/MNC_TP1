/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
this.grau = 0;
this.ponto = 0;
this.coefFunc = [];

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
//    var leia = new lerDadosLR();
    this.grau = 4;
    this.coefFunc = [1, 2, -13, -14, 24];
    var solucao = AlgoritmoLimitesRaizes(this.grau, this.coefFunc);
    imprimirResultadoLR(this.grau, this.coefFunc, solucao);
//    L = 0.6316    4.7417  -14.0000 -0.5760
//    var leia = new lerDados();
//    leia;
//    var solucao = AlgoritmoLimiteRaizes(leia.grau, leia.coefFunc);
//    imprimirResultadoLR(leia.grau, leia.coefFunc, solucao);
}

function AvaliarNewton() {
//    Setando Dados
//    var leia = new lerDadosLR();
   alert("Deu certo 1");
    this.x0 = 8;
    this.grau = 5;
    this.coefFunc = [1, -14, 30, 236, -511,-1470];
    this.IterMax = 8;
    this.Toler = 10;
    var solucao = Newton(this.x0, this.Toler, this.IterMax, this.coefFunc,this.grau);
    
//    L = 0.6316    4.7417  -14.0000 -0.5760
//    var leia = new lerDados();
//    leia;
//    var solucao = AlgoritmoLimiteRaizes(leia.grau, leia.coefFunc);
//    imprimirResultadoLR(leia.grau, leia.coefFunc, solucao);
}


