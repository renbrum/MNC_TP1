/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function RegulaFalsi(a, b, Toler, IterMax) {
    var FA;
    var t;
    var Iter;
    var FX;
    FA = f(a);
    var FB;
    FB = f(b);
    var DELTAX=0;
    if ((FA * FB) > 0) {
        document.write("Função não muda de sinal nos extremos dos intervalo dado");
    } else {
        if (FA > 0) {
            t = a; a = b; b = t; t = FA; FA = FB; FB = t;
        }
        Iter = 0; x = b; FX = FB;
        do{
            DELTAX = -FX/(FB-FA)*(b-a);
            x=x+DELTAX; FX= f(x);
            document.write("Iter" + Iter + "a" + a +"FA"+ FA + "b" + b+ "FB" + FB + "X" + x+ "FX" + FX + "DELTA X" + DELTAX );
            if(FX <0){
                a=x;
                FA= FX;
            }else{
                
                
            }
            
        }while((abs(DELTAX)>Toler && abs(FX)> Toler)|| Iter <IterMax)
        
        
        
        var c;
        c = a + b;
        document.write("Resultado" + c + "<br />");

    }
}

function f(x) {
    return x + 1;

}