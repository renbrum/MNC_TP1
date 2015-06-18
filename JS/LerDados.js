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

function Avaliar() {
    var leia = new lerDados();
    leia;
    var solucao = AlgoritmoHorner(leia.grau, leia.coefFunc, leia.ponto);
    imprimirResultado(leia.grau, leia.ponto, leia.coefFunc, solucao);
//    Setando Dados
//    var solucao = AlgoritmoHorner(leia.grau, leia.coefFunc, leia.ponto);
//    var grau = 5;
//    var ponto = 2;
//    var coefFunc = [3, -2, 5, 7, -3, 1];

}

