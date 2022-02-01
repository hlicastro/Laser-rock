//Carga los datos del localstorage
if (localStorage.getItem("stockLista")!=null || localStorage.getItem("stockLista") != undefined){
    let stockJason = JSON.parse(localStorage.getItem("stockLista"));
    for (const i of stockJason) {
        for (const z of stockTotal.arrayArticulos) {
            if (i.item==z.item) {
                z.stock=i.stock
                carritoDeCero()
            }
        }
    }
}
//verifica que el srtorage tenga un valor valido
if ( localStorage.getItem("comprarLista").length > 60){
    carritoCompra.listaCompra = JSON.parse(localStorage.getItem("comprarLista"));
    
} 