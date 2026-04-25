const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }
    return comision;
}

function calcular(){
    
    //let componenteSueldoBase=document.getElementById("txtSueldoBase");
   // let componenteVenta=document.getElementById("txtVentas");
    //let componentePrecio=document.getElementById("txtPrecio");

    //let sueldoBaseStr=componenteSueldoBase.value;
    //let numeroVentasStr=componenteVenta.value;
    //let precioProductoStr=componentePrecio.value;

    //let sueldoBaseStr=recupaerarTexto("txtSueldoBase")
    //let numeroVentasStr=recupaerarTexto("txtVentas")
    //let precioProductoStr=recupaerarTexto("txtPrecio")

    let sueldoBase=recuperarFloat("txtSueldoBase");
    let numeroVentas=recuperarFloat("txtVentas");
    let precioProducto=recuperarFloat("txtPrecio");

    let comision=calcularComision(numeroVentas, precioProducto);

    let total=sueldoBase+comision;

    let spSueldoBase=document.getElementById("spSueldoBase");
    let spComision=document.getElementById("spComision");
    let spTotal=document.getElementById("spTotal");

    spSueldoBase.textContent=sueldoBase;
    spComision.textContent=comision;
    spTotal.textContent=total;

}

