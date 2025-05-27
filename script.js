function convertir() {
    // Obtiene el valor numérico y las unidades seleccionadas
    const valor = parseFloat(document.getElementById("valor").value);
    const entrada = document.getElementById("unidadEntrada").value;
    const salida = document.getElementById("unidadSalida").value;

    // Valida que todos los campos estén completos y correctos
    if (isNaN(valor) || entrada === "" || salida === "") {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }

    // Conversión de unidades a metros
    const aMetros = {
        mm: v => v / 1000,
        cm: v => v / 100,
        m: v => v,
        km: v => v * 1000
    };

    // Conversión de metros a la unidad de salida
    const desdeMetros = {
        mm: v => v * 1000,
        cm: v => v * 100,
        m: v => v,
        km: v => v / 1000
    };

    // Realiza la conversión completa
    const enMetros = aMetros[entrada](valor);
    const resultado = desdeMetros[salida](enMetros);

    // Formatea el resultado (sin decimales innecesarios)
    const resultadoFormateado = Number.isInteger(resultado) ? resultado : resultado.toFixed(3);
    document.getElementById("resultado").value = resultadoFormateado + " " + salida;
}
