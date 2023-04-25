const botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", convertirMoneda);

function convertirMoneda() {
    const montoOrigen = parseFloat(document.getElementById("monto-origen").value);
    const monedaOrigenElemento = document.querySelector("input[name='moneda-origen']:checked");
    const monedaDestinoElemento = document.querySelector("input[name='moneda-destino']:checked");
    
    if (!montoOrigen) {
        alert("Por favor, ingrese un valor para el monto.");
        return;
    }
    
    if (!monedaOrigenElemento) {
        alert("Por favor, seleccione una moneda de origen.");
        return;
    }
    
    if (!monedaDestinoElemento) {
        alert("Por favor, seleccione una moneda de destino.");
        return;
    }
    
    const monedaOrigen = monedaOrigenElemento.id;
    const monedaDestino = monedaDestinoElemento.id;
    let resultado = 0;

    if (monedaOrigen === "dolar" && monedaDestino === "soles") {
        resultado = montoOrigen * 3.97;
    } else if (monedaOrigen === "dolar" && monedaDestino === "euros") {
        resultado = montoOrigen * 0.83;
    } else if (monedaOrigen === "soles" && monedaDestino === "dolar") {
        resultado = montoOrigen * 0.25;
    } else if (monedaOrigen === "soles" && monedaDestino === "euros") {
        resultado = montoOrigen * 0.21;
    } else if (monedaOrigen === "euros" && monedaDestino === "dolar") {
        resultado = montoOrigen * 1.21;
    } else if (monedaOrigen === "euros" && monedaDestino === "soles") {
        resultado = montoOrigen * 4.82;
    }

    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerText = `El monto cambiado es: ${resultado.toFixed(2)} ${monedaDestino.toUpperCase()}`;
}



