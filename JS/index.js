class StockTotal {
    constructor() {
        this.arrayArticulos = []
        
    }
    addArtc(pedido) {
        this.arrayArticulos.push(pedido)
    
    }
    
    

}
class Articulo{
    constructor(item, artista, titulo, tipo, precio,stock,stockVenta , imagen) {
        this.item = item;
        this.artista   = artista;
        this.titulo  = titulo;
        this.tipo  = tipo;
        this.precio  = precio;
        this.stock  = stock;
        this.stockVenta = stockVenta;
        this.imagen = imagen;
    }
//verifica si el producti tiene stock
    
}
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

$.ajax({
    async: false,
    type: "GET",
    url: "../JS/articulos.json",
    success: function (response) {
        stockTotal.arrayArticulos=  response;
        
    },
    error: function () {
        alert("Error retrieving products");
    }
});
console.log(stockTotal.arrayArticulos)


const iniciarCompra = () => {
    // DOM 
    const lista = document.querySelector(".accesorios")
    stockTotal.arrayArticulos.map((pedido) => {
        const miniContenedor = document.createElement('div')
        const image = document.createElement('img')
        const artista = document.createElement("h3")
        const titulo = document.createElement('p')
        const importe = document.createElement('h3')
        const stock = document.createElement('p')
        const boton = document.createElement("button")

        miniContenedor.className = "accesorios__elementos"
        image.src = pedido.imagen
        artista.textContent = pedido.artista
        titulo.textContent = pedido.titulo
        importe.textContent = `$ ${pedido.precio}`
        stock.textContent = `Hay en Stock: ${pedido.stock}`
        stock.className ="stockMod"
        boton.className= "art"+pedido.item
        boton.textContent = "Comprar"

        lista.appendChild(miniContenedor)
        miniContenedor.appendChild(image)
        miniContenedor.appendChild(artista)
        miniContenedor.appendChild(titulo)
        miniContenedor.appendChild(importe)
        miniContenedor.appendChild(stock)
        miniContenedor.appendChild(boton)

    })
}

const iniciarComprad = () => {
    // DOM 
    const lista = document.querySelector(".modal-body")
    carritoCompra.listaCompra.map((pedido) => {
        const miniContenedor = document.createElement('div')
        const artista = document.createElement("h3")
        const titulo = document.createElement('p')
        const importe = document.createElement('p')
        const stock = document.createElement('h3')
        const image = document.createElement('img')

        

        miniContenedor.className = "itemPedido conteiner"
        artista.textContent = pedido.artista
        titulo.textContent = pedido.titulo
        importe.textContent = `Precio unitario $${pedido.precio}`
        stock.textContent = `total: $${pedido.stockVenta*pedido.precio}`
        stock.className ="stockMod"
        image.src = pedido.imagen
        image.width= "150"


        lista.appendChild(miniContenedor)
        miniContenedor.appendChild(artista)
        miniContenedor.appendChild(titulo)
        miniContenedor.appendChild(importe)
        miniContenedor.appendChild(stock)
        miniContenedor.appendChild(image)

    })
}

$(".modalHead").append(`<h4> ${carritoCompra.usuario} Tu pedido esta compuesto: </h4>`);

function comprasCarrito() {
    $('html, body').animate({scrollTop:0}, 'slow', function () {
        
    
    $(".modalCarrito").delay(1000).fadeIn('slow');
    const lista = document.querySelector(".modalBody")
    for (const a of stockTotal.arrayArticulos) {
        const div = document.querySelector(`.articuloModal`)
        if (div!=null){
            lista.removeChild(div)
        }
    }
        
for (const producto of carritoCompra.listaCompra) {
    $(".modalBody").append(`<div class="articuloModal m-1 border  inline-block mx-auto" >
    <img style="width: 100px" src="${producto.imagen}">
    <h6> ${producto.artista} - ${producto.titulo}</h6>
    <h5> Con un valor unitario de $${producto.precio} X ${producto.stockVenta} unidades = $${producto.precio* producto.stockVenta}</h5>
    </div>`);
}
carritoCompra.subTotalCalc()
$(".modalFooter").append(`<h5> El total del pedido es de: $${carritoCompra.subTotal}</h5> `);

carritoCompra.subTotalCalc()
$(".modalFooter h5").remove();
$(".modalFooter").append(`<h5> El total del pedido es de: $${carritoCompra.subTotal} </h5> `);
})}
