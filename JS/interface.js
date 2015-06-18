this.grau = 0;
this.ponto = 0;
teste = [[]];

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

function imprimirResultado(funcao) {
    printPage();
    var div = document.getElementById('texto');
    div.innerHTML = "<p>A função fica assim:</p>";
    div = document.getElementById('formulario');
    div.appendChild(createTable(funcao));
    
    var button = document.createElement("input");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "location.reload()");
    button.setAttribute("value", "Voltar");
    div.appendChild(button);
}

function printPage() {
    var texto = document.getElementById("texto");
    while (texto.firstChild) {
        texto.removeChild(texto.firstChild);
    }
    texto = document.getElementById("formulario");
    while (texto.firstChild) {
        texto.removeChild(texto.firstChild);
    }
}