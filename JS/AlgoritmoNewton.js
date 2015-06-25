/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Calcula o Valor da Raiz de uma função utilizando o metódo de Newton <--

function Derivada1(x0, funcao, grau)
{
   var grau = grau; // variavel que mostra o grau da funcao
   var cont = 0;   // contador
  
   var parcial = 0; // valor parcial da funcao
   var total = 0; // valor final da funcao
   
   grau = grau -1;
   
   do
   {
       for(x=0; x<grau-1; x++)
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
          
       }// FOR PRINCIPAL
    if(grau === 1)
    {
        soma = x0;
    }
    
    
    if(grau > 0) // Se o grau for > 0, significa que a variavel possui um coeficiente.
        {
            parcial = soma * (parseFloat(funcao[cont])*(grau+1) );
        }
     else // caso contrário não existe variavel, somente um numero real
     {
         parcial = parseFloat(funcao[cont]);
     }
        total   = total + parcial; 
        
     
        
    cont++;
    grau--;   
    soma = "";
    
   } while(grau>=0);
   
   return (total);
}


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

function Newton(x0, Toler, IterMax, funcao, grau) // Recebe x0 = Valor Inicial; Toler = Tolerância; IterMax = Max de Interações  
{

   var funcao = funcao;
   var grau   = grau;


   var Fx  = Funcao(x0, funcao, grau);
   var DFx = Derivada1(x0, funcao, grau);
   var x   = x0;
   var Iter= 0;
    
    document.write("<table border='1' cellpadding='0' cellspacing='0' style='border-collapse: collapse' width='100%' \n\
    id='table1'>");
    document.write("<tr><td>Interação</td><td>Valor X0</td><td>Valor DFX</td><td>Valor FX</td><td>Valor Delta X</td></tr>");
    
    do{
        if(Iter ===0)
        {
            document.write("<tr><td>"+Iter+"</td><td>"+x.toFixed(4)+"</td><td>"+DFx.toFixed(4)+"</td><td>"+Fx.toFixed(4)+"</td><td>0</td></tr>");
        }
        else
        {
        document.write("<tr><td>"+Iter+"</td><td>"+x.toFixed(4)+"</td><td>"+DFx.toFixed(4)+"</td><td>"+Fx.toFixed(4)+"</td><td>"+DeltaX.toFixed(4)+"</td></tr>");
        }
            var DeltaX  = (-Fx / DFx);
        x       = x + DeltaX;
        Fx      = Funcao(x, funcao, grau);
        DFx     = Derivada1(x, funcao, grau);
        Iter    = Iter + 1;
      
    }while(Iter < IterMax)
     document.write("</table>");
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