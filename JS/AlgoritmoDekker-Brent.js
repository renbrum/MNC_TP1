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
       
       if (abs(e) >= Tol || abs(Fa) > abs(Fb) )
       {
           var s = Fb/Fa;
           if(a === c) // Interpolação Linear
           {
               var p = 2*z*s;
               var q = 1-s;
            }
            else // Interpolação Inversa Quadrática
            {
                q   = Fa/Fc;
            var r   = Fb/Fc;
                p   = s*(2*z*q*(q-r)-(b-a)*(r-1));
                q   = (q-1)*(r-1)*(s-1);
            }
            if(p>0)
            {
                q = -q;
            }
            else
            {
                p = -p;
            }
            if((2*p)< min(3*z*q-abs(Tol*q), abs(e*q) )) // Aceita Interpolação
            {
                e = d;
                d = p/q;
            }
            else // usa bisseção devido a falha na interpolação
            {
                d = z;
                e = z;
            }
        
       }
       else
       {
          d = z;
          e = z; 
       }
       
    a = b;
    Fa = Fb;
    
    if(abs(d) > Tol)
    {
        b = b+d;
    }
    else
    {
        b = b+ sinal(z)* Tol;
    }
    Iter = Iter+1;
    Fb   = Funcao(b); // Avaliar a função em b ;
   }while(a>0)
    
    var Raiz = b;

    if(abs(z) <= Tol || Fb === 0)
    {
        var CondErro = 0;
    }
    else
    {
        var CondErro = 1;
    }
        
}