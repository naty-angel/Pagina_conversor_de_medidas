function calcularIMC() {
    // Obtiene los valores de peso y altura desde los inputs
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Valida que los valores sean numéricos y positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    // Calcula el IMC usando la fórmula peso / (altura^2)
    const imc = peso / (altura * altura);
    let clasificacion = "";

    // Clasifica el IMC según rangos establecidos
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 24.9) {
        clasificacion = "Normal";
    } else if (imc < 29.9) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    // Muestra el resultado final con 1 decimal y la clasificación
    const resultadoFinal = `IMC: ${imc.toFixed(1)} — ${clasificacion}`;
    document.getElementById("resultadoIMC").value = resultadoFinal;
}
