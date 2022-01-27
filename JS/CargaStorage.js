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
if (localStorage.getItem("comprarLista")!=null && localStorage.getItem("comprarLista") != undefined){
    carritoCompra.listaCompra = JSON.parse(localStorage.getItem("comprarLista"));
    
} 