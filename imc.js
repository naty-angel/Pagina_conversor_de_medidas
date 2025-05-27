function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const imc = peso / (altura * altura);
    let clasificacion = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc < 24.9) {
        clasificacion = "Normal";
    } else if (imc < 29.9) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    const resultadoFinal = `IMC: ${imc.toFixed(1)} — ${clasificacion}`;
    document.getElementById("resultadoIMC").value = resultadoFinal;
}
