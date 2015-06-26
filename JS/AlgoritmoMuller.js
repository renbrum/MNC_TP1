/**
 * Esta é a nossa função que queremos descobrir a raíz.
 * Escreva a funcção aqui!
 * Função: x^2 - 2x + 3
 */
function f(x) {
    return (2 * x + 3);
}

function AlgoritmoMuller(a, c, toler, iterMax) {

    a = parseFloat(a);
    c = parseFloat(c);
    toler = parseFloat(toler);
    iterMax = parseFloat(iterMax);
    
    var fa = f(a);
    var fc = f(c);
    var b = 0;
    b = ((a + c) / 2);
    var fb = 0;
    fb = f(b);

    var x = b;
    var fx = fb;
    var deltaX = c - a;
    var iter = 0;

    var h1, h2, r, t, A, B, C, z;
    var raiz = 0;
    var condErro= 0;

    while (true) {
        h1 = c - b;
        h2 = b - a;
        r = h1 / h2;
        t = x;

        A = (fc - (r + 1) * fb + r * fa) / (h1 * (h1 + h2));
        B = (fc - fb) / h1 - A * h1;
        C = fb;

        if (A !== 0) {
            z = (-B + sinal(B) * Math.sqrt(B * B - 4 * A * C)) / (2 * A);
        } else {
            if (B !== 0) {
                z = (((-1) * C) / B);
            } else {
                z = ((-1) * C);
            }
        }

        if (isNaN(z)) {
            alert('A: ' + A + ' B: ' + B + ' C: ' + C);
            alert("Erro: z não é um numero real.");
            break;
        }

        x = b + z;
        deltaX = x - t;
        fx = f(x);

        if (((((Math.abs(deltaX)) <= (toler)) && (Math.abs(fx) <= toler))) || (iter >= iterMax)) {
            break;
        }
        if (x > b) {
            a = b;
            fa = fb;
        } else {
            c = b;
            fc = fb;
        }
        x = (a + c) / 2;
        b = x;
        fb = fx;
        iter = iter + 1;
    }

    raiz = x;
    if (Math.abs(deltaX) <= toler && Math.abs(fx) <= toler) {
        condErro = 0;
    } else {
        condErro = 1;
    }
    imprimirSaida(raiz, iter, condErro);
}

function sinal(x) {
    if (x >= 0) {
        return 1;
    } else {
        return -1;
    }
}


function imprimirSaida(raiz, iter, condErro) {
    document.write("\nRaiz: "+raiz+"\n");
    document.write("\nIteracao: "+iter+"\n");
    document.write("\nCondicao Erro: "+condErro+"\n");
}
;