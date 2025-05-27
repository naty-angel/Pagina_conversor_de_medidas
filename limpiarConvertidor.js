function limpiarConvertidor() {
    // Limpia el campo donde se ingresa el valor numérico
    document.getElementById("valor").value = "";

    // Reinicia la unidad de entrada seleccionada
    document.getElementById("unidadEntrada").value = "";

    // Reinicia la unidad de salida seleccionada
    document.getElementById("unidadSalida").value = "";

    // Borra el resultado mostrado
    document.getElementById("resultado").value = "";
}
