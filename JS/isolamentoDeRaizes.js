/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function lerDados(){
    this.numGrau = parseInt(document.getElementById("grau").value);
    this.coefFunc = [];
    this.numGrau_aux = this.numGrau;
    this.coefVar = function (){
	for(var i = 0 ; i <= this.numGrau; i++) {
            this.coefFunc[i] = document.getElementById("x"+(this.numGrau)).value;
	}
    };
}

function IsolamentoDeRaizes(grau, coefFunc,a){
    this.y = coefFunc[grau];
    for(var i = 1; i < grau; i++){
        this.y = (y*a) + c[i];
    }
    ImprimirResultado(y);
}

