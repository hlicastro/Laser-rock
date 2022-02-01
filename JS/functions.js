
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
//Busca el producto ingresado 
function ingresoProducto (ingreso){
    for (const iterator of stockTotal.arrayArticulos) {
        if (ingreso ==iterator.item){
            return iterator
            
        }
    }
}
function modificarStockDom(pos,ingresotemp){
    let stockModificar = document.getElementsByClassName("stockMod")
    stockModificar[pos-1].textContent= "Hay en Stock: " + ingresotemp.stock

}
iniciarComprad()
iniciarCompra()
function comprar() {
//se muestra el pedido final
    carritoCompra.subTotalCalc()
    if (carritoCompra.subTotal==0){
        swal.fire("Su carrito no tiene Articulos","","error")}
    else{
        Swal.fire({
            title: '¿Queres finalizar tu compra?',
            icon: 'question',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Finalizar ',
            denyButtonText: `Ver carrito`,
        }).then((result) => {
            if (result.isConfirmed) {
    //uso el alert comun porque no me muestra en lista el detalle del pedido por el metodo en que se genera
                alert(carritoCompra.armarlistaFinal())
                swal.fire({
                    title:"Muchas gracias por tu compra",
                    text:"Tu pedido se gestiono satifactoriamente",
                    icon:"success",
                    timer:3000,
                    position:"top",
                    showConfirmButton:false,
                })
                carritoCompra.listaCompra=[]
                localStorage.setItem("comprarLista", JSON.stringify())
                localStorage.removeItem("carritoLista");            
            }else if (result.isDenied) {
    //uso el alert comun porque no me muestra en lista el detalle del pedido por el metodo en que se genera
                alert(carritoCompra.armarlistaFinal())
                    
            }
        })
        

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

function eliminarNodo() {
    let pos =0
    let buscar = document.getElementById('buscador').value
    const lista = document.querySelector(".accesorios")
    if(buscar!=""){
    for (const a of stockTotal.arrayArticulos) {
        pos = pos +1
        if(buscar!=a.artista){
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

}
//agrega item al carrito y actualiza el storage
function sumarArt(index) {
    ingreso = index+1 
    ingresotemp=ingresoProducto(ingreso)
    if(ingreso!=null){
    if  (ingresoValido(ingreso)){
        if (ingresotemp.verStock()) {
            carritoCompra.cargarStock(ingresotemp)
            modificarStockDom(ingreso,ingresotemp)
            localStorage.setItem("comprarLista", JSON.stringify(carritoCompra.listaCompra))         
            localStorage.setItem("stockLista", JSON.stringify(stockTotal.arrayArticulos))         

        }else{
            swal.fire("Momentaneamente este producto no tiene STOCK","Selecciona otro Articulo","error")

        }
    }
    }
    
}


clickCompra()




