/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var fieldLimiteInferior;
var fieldLimiteSuperior;
var fieldToler;
var fieldIterMax;
var fieldRaiz;
var fieldIter;
var fieldCondErro;

function init() {
//	// Obtendo referência dos campos na tela...
//	fieldLimiteInferior = document.querySelector('#limiteInferior');
//	fieldLimiteSuperior = document.querySelector('#limiteSuperior');
//	fieldToler          = document.querySelector('#toler');
//	fieldIterMax        = document.querySelector('#iterMax');
//	fieldRaiz           = document.querySelector('#raiz');
//	fieldIter           = document.querySelector('#iter');
//	fieldCondErro           = document.querySelector('#condErro');
//	
//	// Configurando evento do botão para chamar método javascript...
////	document.querySelector('#buttonMuller').onclick = muller;
//	
//	// Definindo valores padrão para os campos na tela...
//	fieldLimiteInferior.value = 10.0;
//	fieldLimiteSuperior.value = 12.0;
//	fieldToler.value = 0.0000000001;
//	fieldIterMax.value = 100.0;

        lerDadosMuller()
        muller();
};

/**
 * Esta é a nossa função que queremos descobrir a raíz.
 * Escreva a funcção aqui!
 * Função: x^2 - 2x + 3
 */
function f(x){
	return (2*x + 3);
}

function muller(a , c, toler, iterMax) {
	// Validações dos campos e preparação inicial...
//	a = parseFloat(fieldLimiteInferior.value);
//	c = parseFloat(fieldLimiteSuperior.value);
//	toler = parseFloat(fieldToler.value);
//	iterMax = parseFloat(fieldIterMax.value);
	
	if(isNaN(a)){     
		alert('Valor inválido em "Limite inferior": ' + fieldLimiteInferior.value);
		a.focus();
		return;
	}else if(isNaN(c)){
		alert('Valor inválido em "Limite superior": ' + fieldLimiteSuperior.value);
		c.focus();
		return;
	}else if(isNaN(toler)){
		alert('Valor inválido em "Tolerância": ' + fieldToler.value);
		toler.focus();
		return;
	}else if(isNaN(iterMax)){
		alert('Valor inválido em "Iterações": ' + fieldIterMax.value);
		iterMax.focus();
		return;
	}
		
	// Início do algoritmo...
	executarMuller(a, c, toler, iterMax);
};

function executarMuller(a, c, toler, iterMax){
	var fa = f(a);
	var fc = f(c);
	var b = 0;
        b = ((a + c)/2);
	var fb = 0;
        fb = f(b);
	
	var x = b;
	var fx = fb;
	var deltaX = c - a;
	var iter = 0;
	
	var h1, h2, r, t, A, B, C, z;
	var raiz, condErro;
	
	while(true){
		h1 = c - b;
		h2 = b - a;
		r = h1/h2;
		t = x;
		
		A = (fc - (r + 1) * fb + r * fa)/(h1 * (h1 + h2));
		B = (fc - fb)/h1 - A * h1;
		C = fb;
		
		if(A != 0){
			z = (-B + sinal(B) * Math.sqrt(B * B - 4 * A * C))/(2 * A);
		}else{
			if(B != 0){
				z = (-C) / B;
			}else{
				z = -C;
			}
		}
		
		if(isNaN(z)){
			alert('A: ' + A + ' B: ' + B + ' C: ' + C);
			alert("Erro: z não é um numero real.");
			break;
		}
		
		x = b + z;
		deltaX = x - t;
		fx = f(x);
		
		if((Math.abs(deltaX) <= toler && Math.abs(fx) <= toler) || iter >= iterMax){
			break;
		}
		if(x > b){
			a = b;
			fa = fb;
		}else{
			c = b;
			fc = fb;
		}
		x = (a + c)/2;
		b = x;
		fb = fx;
		iter = iter + 1;
	}
	
	raiz = x;
	if(Math.abs(deltaX) <= toler && Math.abs(fx) <= toler){
		condErro = 0;
	}else{
		condErro = 1;
	}
	
	imprimirSaida(raiz, iter, condErro);
}

function sinal(x){
	if(x >= 0){
		return 1;
	}else{
		return -1;
	}
}

function imprimirSaida(raiz, iter, condErro){
	
	fieldRaiz.value = raiz;
	fieldIter.value = iter;
	fieldCondErro.value = condErro;
}

init();