function recuperarTexto(idComponente) {
    let componente = document.getElementById(idComponente);
    let valor = componente.value;
    return valor;
}

function recuperarFloat(idComponente) {
    let valorTexto = recuperarTexto(idComponente);
    let valorFloat = parseFloat(valorTexto);
    return valorFloat;
}

function mostrarPantalla(idComponente, mensaje) {
    let spMensaje = document.getElementById(idComponente); 
    let cmptxt = spMensaje.textContent = mensaje;
   
}