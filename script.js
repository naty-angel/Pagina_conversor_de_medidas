function convertir() {
    const valor = parseFloat(document.getElementById("valor").value);
    const entrada = document.getElementById("unidadEntrada").value;
    const salida = document.getElementById("unidadSalida").value;
    if (isNaN(valor) || entrada === "" || salida === "") {
        alert("Por favor, complete todos los campos correctamente.");
        return;
    }
    const aMetros = {
        mm: v => v / 1000,
        cm: v => v / 100,
        m: v => v,
        km: v => v * 1000
    };
    const desdeMetros = {
        mm: v => v * 1000,
        cm: v => v * 100,
        m: v => v,
        km: v => v / 1000
    };

    const enMetros = aMetros[entrada](valor);
    const resultado = desdeMetros[salida](enMetros);
    const resultadoFormateado = Number.isInteger(resultado) ? resultado : resultado.toFixed(3);
    document.getElementById("resultado").value = resultadoFormateado + " " + salida;
}
