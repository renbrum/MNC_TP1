/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


this.grau = 0;
this.coefFunc = [];
this.intervaloa = 0;
this.intervalob = 0;
this.IterMax = 0;
this.Toler = 0;

function lerDados() {
    this.grau = parseInt(document.getElementById("grau").value);
    this.intervaloa = parseInt(document.getElementById("intervalo1").value);
    this.intervalob = parseInt(document.getElementById("intervalo2").value);
    this.Toler = document.getElementById("Toler").value;
    this.IterMax = parseInt(document.getElementById("iterMax").value);
    this.coefFunc = [];
    var cont = 0;
    for (var i = this.grau; i >= 0; i--) {
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
    var solucao = RegulaFalsi(leia.grau, leia.coefFunc, leia.intervaloa, leia.intervalob, leia.Toler, leia.IterMax);
    imprimirResultado(leia.grau, leia.coefFunc, solucao);
}

function secante(grau, coefFunc, a, b, toler, itermax){
    var Fa=0;
    var iter = 0;
    var Fx = 0;
    var Fb = 0;
    var raiz = 0;
    var x = 0;
    var DeltaX = 0;
    var t=0;
    var condErro = 0;
    Fa= f(a, grau, coefFunc);
    Fb= f(b, grau, coefFunc);
    
    if( (math.abs(Fa)) < (math.abs(Fb)) ){
        t=a;
        a=b;
        b=t;
        t=Fa;
        Fa=Fb;
        Fb=t;
    }
    iter=0; x=b; Fx=Fb;
    while(  (math.abs(DeltaX)>toler && math.abs(Fx)>toler) || iter>itermax){
        DeltaX=-Fx/(Fb-Fa)*(b-a);
        x=x+DeltaX;
        Fx=f(x);
    document.write("Iteração: " + Iter + " a: " + a +" Fa"+ Fa + "b: " + b+ " Fb:" + Fb + " x: " + x+ "Fx: " + Fx + "Delta X: " + DeltaX );
        a=b;
        Fa=Fb;
        b=x;
        Fb=Fx; 
        iter++;
        raiz=x;
        // Teste de Convergência
        if( (math.abs(DeltaX)<=toler) && (math.abs(Fx)<=toler)){
            CondErro=0;
        }
        else{
            CondErro=1;
        }
    }
}