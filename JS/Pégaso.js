/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function Pegaso(a,b,Toler,IterMax){
    var FA;
    FA = f(a);
    var FB;
    var FX;
    var Iter;
    var DELTAX;
    var x; var Raiz; var CondErro;
    FB = f(b);
    x=b; FX=FB; Iter =0;
    do{
        DELTAX = -FX/(FB-FA)*(b-a);
        x=x+DELTAX;
        FX=f(x);
        document.write("Iter" + Iter + "a" + a +"FA"+ FA + "b" + b+ "FB" + FB + "X" + x+ "FX" + FX + "DELTA X" + DELTAX );
        if(FX*FB <0){
        a=b;
        FA=FB;
        }else{
            FA=FA*FB/(FB+FX);
        }
        b=x;
        FB=FX;
        Iter=Iter+1;
         
        
    }while((abs(DELTAX)>Toler && abs(FX)>Toler)||Iter < IterMax)
    Raiz=x;
    if(abs(DELTAX)<=Toler && abs(FX)<=Toler){
        CondErro=0;       
    }else{ CondErro=1;}
}



function f(x){
    
    
    
    
}