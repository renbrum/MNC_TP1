
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function lerDados() {
    this.grau = parseInt(document.getElementById("grau").value);
    this.coefFunc = [];

    this.coefVar = function() {
        for (var i = this.grau; i >= 0; i--) {
            this.coefFunc[i] = document.getElementById("x" + (this.grau)).value;
        }
    };
}

function ler() {
    var leia = new lerDados();
    leia.lerFunc();
    document.write("<br>"+ leia.grau +"<br>");
    document.write("<br>"+ leia.coefFunc +"<br>");
    document.write("<br>"+ leia.a +"<br>");
    // for (var i = 0; i < leia.solucao.length; i++) {
    // 	document.write("<br>"+ leia.tabelaSimplex[i] +"\t"+ leia.solucao[i] +"<br>");
    // }
    // document.write("<br>");
    var iR = new IsolamentoDeRaizes(leia.grau, leia.coefFunc, leia.a);
    iR.IsolamentoDeRaizes();
    // document.write("<br>"+ sDual.solucao +"<br>");
    // document.write("<br>"+ sDual.variaveis +"<br>");
}

