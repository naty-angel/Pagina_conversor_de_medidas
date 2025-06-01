function calcularIMC() {
    const pesoInput = document.getElementById("peso").value.replace(",",".");
    const alturaInput = document.getElementById("altura").value.replace(",",".");
    const peso =parseFloat(pesoInput);
    let altura = parseFloat(alturaInput);
// Validación inicial
    if (isNaN(peso) || isNaN(altura)){
        alert("Por favor, ingrese valores válidos para peso y altura.");
        return;
    }
// Peso no pude ser negativo ni cero 
    if (peso <=0){
        alert( "El peso debe ser mayor que cero.")
        return;
    }
    //Si la altura parece estar en centimetros, convertir a metros 
    if (altura >= 100 && altura <=299){
        altura = altura /100;
    }
    //Altura válida en metros 
    if (altura < 0.1 || altura >=3){
        alert ("La estatura debe estar entre 0.1 m y 2.99 m ");
        return;
    }
    //Calculo del IMC
    const imc = peso / (altura*altura);
    let clasificacion ="";

    if (imc< 18.5){
        clasificacion = "Bajo peso";
    }else if (imc < 24.9){
        clasificacion = "Normal";
    } else if (imc < 29.9){
        clasificacion = "SObrepeso";
    }else {
        clasificacion= "obesidad";
    }
    const resultadoFinal = `IMC: ${imc.toFixed(1)}- ${clasificacion}`;
    document.getElementById("resultadoIMC").value = resultadoFinal;
}
