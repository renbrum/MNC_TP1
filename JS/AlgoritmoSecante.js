/* 
    Calcular a raiz de uma equação pelo método da secante
*/

function secante(a, b, toler, itermax){
    Fa=f(a);
    Fb=f(b);
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
        document.write(iter);
        document.write(a);
        document.write(Fa);
        document.write(b);
        document.write(Fb);
        document.write(x);
        document.write(Fx);
        document.write(DeltaX);
        a=b; Fa=Fb; b=x; Fb=Fx; 
        iter++;
        raiz=x;
        // Teste de Convergência
        if(math.abs(DeltaX)<=toler && math.abs(Fx)<=toler){
            CondErro=0;
        }
        else{
            CondErro=1;
        }
    }
}


