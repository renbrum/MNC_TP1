grau = 1;
teste = [[]];

function gerarFuncao() {
    atualizarCampos();
    esvaziarTabelas();
    desativarCamposIniciais();
    inicializarTabelaCoeficientes(grau);
    // adicionarLinhas(numberOfRestrictions);
}

function esvaziarTabelas() {
    var table = document.getElementById("tabela_coeficientes");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}

function atualizarCampos() {
    grau = document.getElementById("grau").value;
    if (grau > 10) {
        grau = 10;
    } else if (grau < 0) {
        grau = 0;
    }
}

function desativarCamposIniciais() {
    document.getElementById("grau").disabled = true;
    document.getElementById("botaoGerarFuncao").disabled = true;
    document.getElementById("botaoRemoverFuncao").disabled = false;
    document.getElementById("botaoAvaliar").disabled = false;
    /*document.getElementById("fileUpload").disabled = true;
     document.getElementById("upload").disabled = true;*/
    /*document.getElementById("botaoSalvarArquivo").disabled = false;*/
}

function desativarCamposFinais() {
    document.getElementById("grau").disabled = false;
    document.getElementById("botaoGerarFuncao").disabled = false;
    document.getElementById("botaoAvaliar").disabled = false;
    // document.getElementById("fileUpload").disabled = false;
    // document.getElementById("upload").disabled = false;
    // document.getElementById("botaoSalvarArquivo").disabled = true;

    //desativarCamposIniciais();
}

function inicializarTabelaCoeficientes(grau) {
    var table = document.getElementById("tabela_coeficientes");
    var rowHeader = table.insertRow(0);
    var rowData = table.insertRow(1);
    for (var i = 0; i <= grau; i++) {
        addColunaCoef(i, rowHeader, rowData);
    }
}



function addColunaCoef(i, rowHeader, rowData) {
    var textField = document.createElement("input");
    textField.setAttribute("id", "x" + i);
    textField.setAttribute("class", "entrada_tabela");
    textField.setAttribute("type", "text");
    textField.setAttribute("onkeypress", "return event.charCode != 47 && (event.charCode >= 45 && event.charCode <= 57)");

    var header = document.createElement("th");
    rowHeader.appendChild(header);
    header.innerHTML = "x" + i;
    header.setAttribute("class", "entrada_tabela");


    var cell = document.createElement("td");
    cell.appendChild(textField);

    rowData.appendChild(cell);
}


function removerFuncao() {
    if (confirm("Tem certeza de que deseja remover as tabelas? Quaisquer dados inseridos não salvos serão perdidos.")) {
        esvaziarTabelas();
        desativarCamposFinais();
    }
}


function imprimirResultado(tabelaSimplex, base, solucao) {
    printPage();
    var div = document.getElementById('texto');
    div.innerHTML = "<p>A tabela Simplex fica assim:</p>";
    div = document.getElementById('formulario');
    div.appendChild(createTable(tabelaSimplex, base, solucao));
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