/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function RegulaFalsi(grau,coefFunc,a, b, Toler, IterMax) {
    return a;
    /*var FA;
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
    if ((FA * FB) > 0) {
       // document.write("Função não muda de sinal nos extremos dos intervalo dado");
    } else {
        if (FA > 0) {
            t = a; a = b; b = t; t = FA; FA = FB; FB = t;
        }
        Iter = 0; x = b; FX = FB;
        do{
            DELTAX = -FX/(FB-FA)*(b-a);
            x=x+DELTAX; FX= f(x,grau,coefFunc);
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
        
       
    }
     return Iter;*/
}

function f(x,grau,coefFunc) {
    var y = 0;
    var resultado=0;
    y = parseFloat(coefFunc[0]);
    for (var i = 0; i <=grau; i++) {
       if(i === 0){
           resultado=resultado+coefFunc[0];
       }else{
           resultado=resultado+((x^i)*coefFunc[i+1]);
       }
    }
    return resultado;
}