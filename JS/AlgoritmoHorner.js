function AlgoritmoHorner(grau, coefFunc, a) {
    var y = 0;
    y = parseFloat(coefFunc[0]);
    for (var i = 1; i <= this.grau; i++) {
        y = ((y * a) + parseFloat(coefFunc[i]));
    }
    return y;
}