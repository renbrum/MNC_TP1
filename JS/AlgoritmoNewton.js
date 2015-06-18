/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Calcula o Valor da Raiz de uma função utilizando o metódo de Newton <--

function Derivada1()
{
    
}

function Derivada2()
{
    
}

function Funcao()
{
    
}

function Newton(x0, Toler, IterMax) // Recebe x0 = Valor Inicial; Toler = Tolerância; IterMax = Max de Interações  
{
   var Fx  = Funcao(x0);
   var DFx = Derivada1(x0);
   var x   = x0;
   var Iter= 0;
    
    do{
        var DeltaX  = (-Fx / DFx);
        x       = x + DeltaX;
        Fx      = Funcao(x);
        DFx     = Derivada1(x);
        Iter    = Iter + 1;
         
    }while((DeltaX < Toler && Fx < Toler) || (DFx === 0) || (Iter > IterMax))
    
    var Raiz = x; 
    
    if((DeltaX <= Toler) && Fx <= Toler)
    {
        var CondErro = 0;
    }
    else
    {
        var CondErro = 1;
    }
}