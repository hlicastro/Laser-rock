function ingresoValido(ingreso){
    if (ingreso == null){
        return true;
    } else{
        for (const articulo of stockTotal.arrayArticulos){
            if(ingreso == articulo.item){
                return true
            }
        }
    }
    return false;
} 
function verStock(ingresotemp){
    if (ingresotemp.stock == 0){
        return false;
    } else{
        ingresotemp.stock>0;
        ingresotemp.stock--
        swal.fire("Agregaste con exito al carrito",`${ingresotemp.titulo} de  ${ingresotemp.artista}  por un valor de $ ${ingresotemp.precio}`,"success")

        return true;
    }
} 
//Busca el producto ingresado 
function ingresoProducto (ingreso){
    for (const iterator of stockTotal.arrayArticulos) {
        if (ingreso ==iterator.item){
            return iterator
        }
    }
}
function modificarStockDom(ingresotemp){
    if (ingresotemp.stock==0) {
        $(".stockMod"+ingresotemp.item).text("Momentaneamente sin stock");

    }else{
        $(".stockMod"+ingresotemp.item).text("Hay en Stock: " + ingresotemp.stock);
    }
}

//elimina los elementos de la pantalla compras que no se ajustan a la busqueda
function limpiarPantalla() {
    const lista = document.querySelector(".accesorios")
    for (const a of stockTotal.arrayArticulos) {
        const div = document.querySelector(`.accesorios__elementos`)
        if (div!=null){
            lista.removeChild(div)
        }
    }
}

function buscadorArtista() {
    let pos =0
    let buscar = document.getElementById('buscador').value
    const lista = document.querySelector(".accesorios")
    if(buscar!=""){
    for (const a of stockTotal.arrayArticulos) {
        pos = pos +1
        if(buscar.toUpperCase()!=a.artista.toUpperCase()){
            const div = document.querySelector(`.accesorios__elementos:nth-child(${pos})`)
            lista.removeChild(div)
            pos = pos-1
        }
    }
    if (pos==0) {
        swal.fire("No ingresaste un artista valido\n Intente nuevamente con otro artista","","error")
        carritoDeCero() 
        clickCompra()
    }
    
}
}
//carga de 0 la pantalla del carrito
function carritoDeCero() {
    limpiarPantalla()
    iniciarCompra()
    clickCompra()
    mouseoverCompra()
}
//agrega item al carrito y actualiza el storage
function sumarArt(index) {
    ingreso = index+1 
    ingresotemp=ingresoProducto(ingreso)
    if(ingreso!=null){
        if(ingresoValido(ingreso)){
            if (verStock(ingresotemp)) {
                carritoCompra.cargarStock(ingresotemp)
                modificarStockDom(ingresotemp)
                localStorage.setItem("comprarLista", JSON.stringify(carritoCompra.listaCompra))         
                localStorage.setItem("stockLista", JSON.stringify(stockTotal.arrayArticulos))               
            }else{
                swal.fire("Momentaneamente este producto no tiene STOCK","Selecciona otro Articulo","error")        
            }
        }
    }
}

