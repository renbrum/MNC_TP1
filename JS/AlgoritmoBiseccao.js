/* 
        Calcular a raiz de uma equação pelo método da bissecção
 */

function Biseccao(a, b, toler, itermax){
    Fa=f(a);
    Fb=f(b);
    if(Fa*Fb>0){
        document.write("Função não muda sinal nos extremos do intervalo dado.");
    }
    DeltaX= math.abs(b-a)/2;
    iter=0;
    while((DeltaX>toler && math.abs(Fx)>toler)|| iter>itermax){
        x=(a+b)/2;
        Fx=f(x);
        document.write(iter);
        document.write(a);
        document.write(Fa);
        document.write(b);
        document.write(Fb);
        document.write(x);
        document.write(Fx);
        document.write(DeltaX);
        if(Fa*Fx>0){
            a=x;Fa=Fx;
        }
        else{
            b=x;
        }
        DeltaX=DeltaX/2;
        iter++;
    }
    raiz=x;
    // Teste de Convergência
    if(DeltaX <= toler && math.abs(Fx)<toler){
        CondErro=0;
    }
    else{
        CondErro=1;
    }
}
