/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function gerarFuncao() {
    atualizarCampos();
    esvaziarTabelas();
    desativarCamposIniciais();
    inicializarTabelaCoeficientes();
    
}

function esvaziarTabelas() {
    var table = document.getElementById("tabela_coeficientes");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}

function atualizarCampos() {
    this.grau = document.getElementById("grau").value;
    if (this.grau > 10) {
        this.grau = 10;
    } else if (this.grau < 0) {
        this.grau = 0;
    }
}

function desativarCamposIniciais() {
    document.getElementById("grau").disabled = true;
    document.getElementById("botaoGerarFuncao").disabled = true;
    document.getElementById("botaoRemoverFuncao").disabled = false;
    document.getElementById("botaoAvaliar").disabled = false;
}

function desativarCamposFinais() {
    document.getElementById("grau").disabled = false;
    document.getElementById("botaoGerarFuncao").disabled = false;
    document.getElementById("botaoAvaliar").disabled = false;
}

function inicializarTabelaCoeficientes() {
    var table = document.getElementById("tabela_coeficientes");
    var linhaTabela = table.insertRow(0);
    for (var i = this.grau; i >= 0; i--) {
        addColunaCoef(i, linhaTabela, this.grau);
    }

}

function addColunaCoef(i, linhaTabela) {

    var textField = document.createElement("input");
    textField.setAttribute("id", "x" + i);
    textField.setAttribute("class", "entrada_tabela");
    textField.setAttribute("type", "text");
    textField.setAttribute("onkeypress", "return event.charCode != 47 && (event.charCode >= 45 && event.charCode <= 57)");
    var header = document.createElement("td");
    if (i > 0) {
        if (i > 0 && i < 2) {
            header.innerHTML = "x";
            linhaTabela.appendChild(textField);
            linhaTabela.appendChild(header);
        } else {
            header.innerHTML = "x" + i;
            linhaTabela.appendChild(textField);
            linhaTabela.appendChild(header);
        }
    }
    else {
        linhaTabela.appendChild(textField);
        linhaTabela.appendChild(header);
    }
}


function removerFuncao() {
    if (confirm("Tem certeza de que deseja remover as tabelas? Quaisquer dados inseridos não salvos serão perdidos.")) {
        esvaziarTabelas();
        desativarCamposFinais();
    }
}

function imprimirResultado(grau,coefFunc, solucao) {
    document.write("<br>Grau: " + grau);
    document.write("<br>Coeficientes:[");
    for (var i = 0; i < coefFunc.length; i++) {
        document.write(coefFunc[i] + "\t");
    }
    document.write("]");
    document.write("<br>Raiz: " + solucao);
  
}
function imprimirResultadoLR(grau, coefFunc, l) {
    document.write("<br>Grau: " + grau);
    document.write("<br>c = [");
    for (var i = 0; i < coefFunc.length - 1; i++) {
        document.write(coefFunc[i] + "\t");
    }
    document.write("]");
    document.write("<br>L = [");
    for (var i = 1; i < l.length; i++) {
        document.write(l[i] + "\t");
    }
    document.write("]");
}
;
