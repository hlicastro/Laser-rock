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
    verStock(){
        if (this.stock == 0){
            return false;
        } else{
            this.stock>0;
            this.stock--
            swal.fire("Agregaste con exito al carrito",`${this.titulo} de  ${this.artista}  por un valor de $ ${this.precio}`,"success")

            return true;
        }
    } 
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
const articulo1 = new Articulo(1, "La Renga", "Despedazados por mil partes","CD",1580, 2,1,"../imagenes/tapas/Despedazadopormilpartes.jpg")
const articulo2 = new Articulo(2, "Divididos", "La era de la boludez","CD",1450, 4,1, "../imagenes/tapas/La_Era_de_la_Boludez.jpg")
const articulo3 = new Articulo(3, "Las Pastillas del Abuelo", "2020","CD",1390,2,1,"../imagenes/tapas/Las pastillas del abuelo 2020.jpg")
const articulo4 = new Articulo(4, "The Rolling Stones", "On Air","CD",2120,5,1,"../imagenes/tapas/On air Roling Stones.jpg");
const articulo5 = new Articulo(5, "Los Piojos", "Ay, Ay, Ay","CD",1560,9,1,"../imagenes/tapas/piojos ayayay.jpg");
const articulo6 = new Articulo(6, "Spinetta", "No mires Atas","CD",2110,3,1,"../imagenes/tapas/Ya no mires atas Spinetta.jpg");
const articulo7 = new Articulo(7, "ACDC", "Back in Black","Vinilos",5850,2,1, "../imagenes/tapas/ACDC Back In Black 1.jpg");
const articulo8 = new Articulo(8, "La Renga", "El Hojo Del Huracan","DVD",3175,2,1,"../imagenes/tapas/Hojo del huracan 1.jpg");


stockTotal.addArtc(articulo1)
    stockTotal.addArtc(articulo2)
    stockTotal.addArtc(articulo3)
    stockTotal.addArtc(articulo4)
    stockTotal.addArtc(articulo5)
    stockTotal.addArtc(articulo6)
    stockTotal.addArtc(articulo7)
    stockTotal.addArtc(articulo8)



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
    console.log(carritoCompra.listaCompra)
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
$(".modal-header h5").append(` ${carritoCompra.usuario} Tu pedido esta compuesto: `);
function comprasass() {
    const lista = document.querySelector(".modal-body")
    for (const a of stockTotal.arrayArticulos) {
        const div = document.querySelector(`.articuloss`)
        if (div!=null){
            lista.removeChild(div)
        }
    }
        
for (const producto of carritoCompra.listaCompra) {
    $(".modal-body").append(`<div class="articuloss m-1 border  inline-block mx-auto" >
    <img style="width: 100px" src="${producto.imagen}">
    <h5> ${producto.artista} - ${producto.titulo}</h5>
    <h5> Con un valor unitario de $${producto.precio} Seleccionaste ${producto.stockVenta}</h5>
    <h5> El total de los productos seleccionados es de $ ${producto.precio* producto.stockVenta}</h5>
    </div>`);
}
carritoCompra.subTotalCalc()
$(".modal-footer div").append(`<h5> El total del pedido es de: ${carritoCompra.subTotal}             </h5> <br> `);

carritoCompra.subTotalCalc()
$(".modal-footer div h5").remove();
$(".modal-footer div").append(`<h5> El total del pedido es de: ${carritoCompra.subTotal} </h5> `);
}
