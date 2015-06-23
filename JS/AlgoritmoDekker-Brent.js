/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Objetivo Calcular a raiz pelo metódo de van Wijngaarden-Dekker-Brent

function Funcao(x0, funcao, grau)
{
   var grau = grau; // variavel que mostra o grau da funcao
   var cont = 0;   // contador
  
   var parcial = 0; // valor parcial da funcao
   var total = 0; // valor final da funcao

    do
    {
       for(x=0; x <= (grau-2); x++) // grau - 2 para calcular corretamente pelo grau da funcao
       {
          if(grau >= 1)
          {
             if(x === 0)   // 1ª intereção somente;
             {
               var produto = x0 * x0;
               soma = produto;
             }
             else      // Restante das interações dependendo do grau da função
             {
               var soma = produto * x0;
               produto = soma;
             }
          }
          else
          {
              if (grau === 0)
              {
                  var produto = x0 * x0;
                  var soma = produto * x0;
              }
          }
       }
    if(grau === 1) // quando o grau for igual a 1, que dizer que a funçao tem o mesmo valor do coeficiente da variavel.
    {
        soma = x0;
    }  
     if(grau > 0) // Se o grau for > 0, significa que a variavel possui um coeficiente.
        {
            parcial = soma * parseFloat(funcao[cont]);
        }
     else // caso contrário não existe variavel, somente um numero real
     {
         parcial = parseFloat(funcao[cont]);
     }
        total   = total + parcial; 
    cont++;
    grau--;   
    soma = "";
    
    }while(grau >= 0);
    
    return (total);
   
}

// a        = limite inferior
// b        = limite superior
// Toler    = tolerância
// InterMax = Numero máximo de interações

function DekkerBrent(a,b, Toler, IterMax, funcao, grau) 
{
    var Fa = Funcao(a,funcao, grau);
    var Fb = Funcao(b,funcao, grau);
    
    alert("Deu certo 1");
    
    document.write("<br>Valor de Fa: ",Fa);
    document.write("<br>Valor de Fb: ",Fb);
    
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
    Fb   = Funcao(b,funcao, grau); // Avaliar a função em b ;
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