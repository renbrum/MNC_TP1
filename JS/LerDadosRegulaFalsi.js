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
this.intervaloa =0;
this.intervalob =0;
this.IterMax =0;
this.Toler =0;

function lerDados() {
    this.grau = parseInt(document.getElementById("grau").value);
    this.intervaloa= parseInt(document.getElementById("intervaloa").value);
    this.intervalob = parseInt(document.getElementById("intervalob").value);
    this.Toler = document.getElementById("Toler").value;
    this.IterMax = parseInt(document.getElementById("iterMax").value);
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

function Avaliar() {
//    Setando Dados
//    var solucao = AlgoritmoHorner(leia.grau, leia.coefFunc, leia.ponto);
//    var grau = 5;
//    var ponto = 2;
//    var coefFunc = [3, -2, 5, 7, -3, 1];
    var leia = new lerDados();
    leia;
    var solucao = RegulaFalsi(leia.grau,leia.coefFunc,leia.intervaloa,leia.intervalob,leia.Toler,leia.IterMax);
    imprimirResultado(leia.grau, leia.coefFunc, solucao);
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



