var operaciones = function (e) {
    var item1 = parseFloat(document.getElementById('item1').value);
    var item2 = parseFloat(document.getElementById('item2').value);
    var result = document.getElementById('resultado');
    var operacion = e.target.id

    if (operacion == 'suma') {
        var resultado = item1 + item2;
    }
    else if (operacion == 'resta') {
        var resultado = item1 - item2;
    }
    else if (operacion == 'mutiplica') {
        var resultado = item1 * item2;
    }
    else if (operacion == 'divide') {
        var resultado = item1 / item2;
    }
    result.innerHTML = resultado;
}
//Obtener evento click en cada boton
var btns = document.getElementById('btns');
btns.addEventListener('click', operaciones);
