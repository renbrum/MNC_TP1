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
    this.intervaloa= parseInt(document.getElementById("intervalo1").value);
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
function lerDadosLR() {
    this.grau = parseInt(document.getElementById("grau").value);
    this.coefFunc = [];
    var cont = 1; 
    for (var i = this.grau; i >= 0; i--) { //coefFunc começa com [1];
         
          
        this.coefFunc[cont] = parseFloat(document.getElementById("x" + i).value);
        cont++;
    }
}

function Avaliar(){
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
function RegulaFalsi(grau,coefFunc,a, b, Toler, IterMax){
    var FA;
    var t;
    var Iter;
    var FX;
    FA = f(a,grau,coefFunc);
    var FB;
    var Raiz;
    var x;
    FB = f(b,grau,coefFunc);
    var DELTAX=0;
    var CondErro;
    if ((FA*FB)>0) {
        document.write("Função não muda de sinal nos extremos dos intervalo dado");return false;
    } else {
        if (FA > 0) {
            t = a; a = b; b = t; t = FA; FA = FB; FB = t;
        }
        Iter = 0; x = b; FX = FB;
        do{
            return FX;
            DELTAX = -FX/((FB-FA)*(b-a));
            return DELTAX;
            x=x+DELTAX; FX= f(x,grau,coefFunc);
            return x;
            //document.write("Iter" + Iter + "a" + a +"FA"+ FA + "b" + b+ "FB" + FB + "X" + x+ "FX" + FX + "DELTA X" + DELTAX );
            if(FX <0){
                a=x;
                FA= FX;
            }else{
                b=x;
                FB=FX;
            }
            Iter= Iter+1;
            
        }while((abs(DELTAX)>Toler && abs(FX)> Toler)|| Iter <IterMax)
        Raiz =x;
        if(abs(DELTAX)<= Toler && abs(FX)<=Toler){
            CondErro =0;
        }else{
            CondErro=1;
        }
        
      // document.write("Iterações:" +Iter+ "CondErro:" +CondErro);
     return Raiz;
    }
}

function f(x,grau,coefFunc) {
    var resultado=0;
    var aux;
    for(var j=0;j<=grau;j++){
         aux[j]=coefFunc[j];
        
    }
    for (var i =0; i<=grau; i++) {
       if(i == grau){
           resultado+=aux[grau];
           
       }else{
           if(i!=grau){
           resultado+=((Math.pow(x,i))*aux[i]);
            }
       }
    }
    return resultado;
}


