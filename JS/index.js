//Genera el array con el stock de productos
class StockTotal {
    constructor() {
        this.arrayArticulos = []
        
    }
    addArtc(pedido) {
        this.arrayArticulos.push(pedido)
    
    }  

}
//Genera el array con el carrito de compras 
class CarritoDeCompras{
    constructor(){
        this.date = 1;
        this.usuario= JSON.parse(localStorage.getItem("usuario"));
        this.listaCompra= [];
        this.subTotal=0;
    }
    //Calcula el total
    subTotalCalc(){
        this.subTotal=0;
        for (const item of carritoCompra.listaCompra){
            this.subTotal += (item.precio*item.stockVenta);
        }
        return this.subTotal
    }
    //agrega stock al array carrito
    cargarStock(valor){
        if(carritoCompra.listaCompra.length==0){
            carritoCompra.listaCompra.push(ingresotemp)

        }
        else{
            let check =true
        for (const v of carritoCompra.listaCompra) {
            if(v.item == valor.item){
                v.stockVenta = v.stockVenta + 1
                check=false
                
            }
            
        }
        if(check){
            carritoCompra.listaCompra.push(ingresotemp)
            
        }
    }}
    //genera la lista final del pedido 
    armarlistaFinal(){
        let listaPedido= this.usuario +"\nTu pedido esta compusto por: "  + carritoCompra.listaCompra.length +" articulos, por un total de $" + carritoCompra.subTotal +"\n\nDETALLE \n"
            let i=1
            for (const listar of carritoCompra.listaCompra) {
            listaPedido += (`${i++}- ${listar.titulo} de  ${listar.artista}  por un valor de $ ${listar.precio} ${listar.stockVenta} \n`) 
        }
        return listaPedido 
    }
    
    
}

const carritoCompra = new CarritoDeCompras();
let  stockTotal = new StockTotal();
// importa datos del carrito de compras 
$.ajax({
    async:false,
    type: "GET",
    url: "../JS/articulos.json",
    success: function (response) {
        stockTotal.arrayArticulos=  response;
        
    },
    error: function () {
        alert("No se pudieron cargar los productos");
    }
});


