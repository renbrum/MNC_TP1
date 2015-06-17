/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Objetivo Calcular a raiz pelo metódo de van Wijngaarden-Dekker-Brent

function Funcao()
{
    
   
}

// a        = limite inferior
// b        = limite superior
// Toler    = tolerância
// InterMax = Numero máximo de interações

function DekkerBrent(a,b, Toler, IterMax) 
{
    var Fa = Funcao(a);
    var Fb = Funcao(b);
    
   if ((Fa * Fb)> 0)
   {
       alert("A função não muda de sinal nos extremos do intervalo dado");
       
       // criar uma saida
   }
   
   var c = b;
   var Fc = Fb;
   var Iter = 0;
   
   do
   {
       if(( Fb * Fc)> 0)
       {
              c    = a;
              Fc   = Fa;
          var d    = b -a;
          var e    = d;   
       }
       if(abs(Fc) < abs(Fb))
       {
               a    = b;
               b    = c;
               c    = a;
               Fa   = Fb;
               Fb   = Fc;
               Fc   = Fa;
       }
       
       var Tol = 2* Toler * max(abs(b),1);
       var z   = ( c - b )/2;
       
       //imprimir os valores de Iter, a,c,b,Fb,z
       
       
       // teste de convergência
       
       if((abs(z) <= Tol) || (Fb === 0) || (Iter >= IterMax))
       {
           // Interrompa !!! Escolha entre Interpolação e Bisseção
       }
       
   }while(a>0)
    
    
    
}