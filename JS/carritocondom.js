const STOCKARTICULOS = 'arrayArticulos'

class StockTotal {
    constructor() {
        this.arrayArticulos = []
        
    }
    addArtc(persona) {
        if (persona.stock>0){
        this.arrayArticulos.push(persona)
        }
    }
    

}
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
}
class CarritoDeCompras{//ok
    constructor(usuario){
        this.date = 1;
        this.usuario = usuario;
        this.listaCompra= [];
        this.subTotal=0;
    }
    //Calcula el total
    subTotalCalc(){
        this.subTotal=0;
        for (const item of carritoCompra.listaCompra){
            this.subTotal += (item.precio*item.stockVenta);
        }
    }
    cargarStock(valor){
        alert(carritoCompra.listaCompra.length)
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
        let listaPedido= usuario +"\nTu pedido esta compusto por: "  + carritoCompra.listaCompra.length +" articulos, por un total de $" + carritoCompra.subTotal +"\n\nDETALLE \n"
            let i=1
            for (const listar of carritoCompra.listaCompra) {
            listaPedido += (`${i++}- ${listar.titulo} de  ${listar.artista}  por un valor de $ ${listar.precio} ${listar.stockVenta} \n`) 
        }
        return listaPedido
    }
    //genera la lista que se muestra antes de ingresar un articulo
    armarlistaStock(){
        let listaPedido="ingrese el codigo del producto que desea agregar al carrito o precione cancelar para finalizar el pedido\n\n"
            let i=1
            for (const listar of stockTotal.arrayArticulos) {
            listaPedido += (`${i++}- ${listar.titulo} de  ${listar.artista}  por un valor de $ ${listar.precio} quedan en Stock: "${listar.stock}". \n`) 
        }
        return listaPedido
    }
}

let  stockTotal = new StockTotal();
const articulo1 = new Articulo(1, "La Renga", "Despedazados por mil partes","CD",1580, 2,1,"./imagenes/tapas/Despedazadopormilpartes.jpg")
const articulo2 = new Articulo(2, "Divididos", "La era de la boludez","CD",1450, 4,1, "./imagenes/tapas/La_Era_de_la_Boludez.jpg")
const articulo3 = new Articulo(3, "Las Pastillas del Abuelo", "2020","CD",1390,2,1,"./imagenes/tapas/Las pastillas del abuelo 2020.jpg")
const articulo4 = new Articulo(4, "The Rolling Stones", "On Air","CD",2120,5,1,"./imagenes/tapas/On air Roling Stones.jpg");
const articulo5 = new Articulo(5, "Los Piojos", "Ay, Ay, Ay","CD",1560,9,1,"./imagenes/tapas/piojos ayayay.jpg");
const articulo6 = new Articulo(6, "Spinetta", "No mires Atas","CD",2110,3,1,"./imagenes/tapas/Ya no mires atas Spinetta.jpg");
const articulo7 = new Articulo(7, "ACDC", "Back in Black","Vinilos",5850,0,1, "./imagenes/tapas/ACDC Back In Black 1.jpg");
const articulo8 = new Articulo(8, "La Renga", "El Hojo Del Huracan","DVD",3175,2,1,"./imagenes/tapas/Hojo del huracan 1.jpg");
stockTotal.addArtc(articulo1)
stockTotal.addArtc(articulo2)
stockTotal.addArtc(articulo3)
stockTotal.addArtc(articulo4)
stockTotal.addArtc(articulo5)
stockTotal.addArtc(articulo6)
stockTotal.addArtc(articulo7)
stockTotal.addArtc(articulo8)



const iniciarCompra = () => {
    /* Init data */
    const tempMundo = JSON.parse(sessionStorage.getItem(STOCKARTICULOS))
    if (tempMundo == null || tempMundo == undefined) {
        sessionStorage.setItem(STOCKARTICULOS, JSON.stringify(stockTotal.arrayArticulos))
    } else {
        stockTotal.arrayArticulos = tempMundo;
    }




    /* Init html */
    const lista = document.querySelector(".accesorios")
    stockTotal.arrayArticulos.map((person) => {
        const miniContenedor = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement("h3")
        const age = document.createElement('p')
        const importe = document.createElement('h3')
        const stock = document.createElement('p')


        miniContenedor.className = "accesorios__elementos"
        image.src = person.imagen
        name.textContent = person.artista
        age.textContent = person.titulo
        importe.textContent = `$ ${person.precio}`
        stock.textContent = `Hay en Stock: ${person.stock}`

        image.width = 300

        lista.appendChild(miniContenedor)
        miniContenedor.appendChild(image)
        miniContenedor.appendChild(name)
        miniContenedor.appendChild(age)
        miniContenedor.appendChild(importe)
        miniContenedor.appendChild(stock)

    })
}


iniciarCompra()
do {
    ingreso = prompt( carritoCompra.armarlistaStock() )
    ingresotemp=ingresoProducto(ingreso)
    if(ingreso!=null){
    if  (ingresoValido(ingreso)){
        if (ingresotemp.verStock()) {
            carritoCompra.cargarStock(ingresotemp)
           // carritoCompra.listaCompra.push(ingresotemp)

        }else{
            alert("Momentaneamente este producto no tiene STOCK")

        }
    }else{alert("el codigo de producto ingresado es incorrecto")}
    }
}while (ingreso!=null);
//se muestra el pedido final
carritoCompra.subTotalCalc()
alert(carritoCompra.armarlistaFinal() )
let elementosCarrito = document.getElementById("")
let pos
iniciarCompra()
function eliminarNodo() {
    let pos =0
    let buscar = document.getElementById('buscador').value
    const lista = document.querySelector(".accesorios")
    for (const a of stockTotal.arrayArticulos) {
        pos = pos +1
        if(buscar!=a.artista){
            const div = document.querySelector(`.accesorios__elementos:nth-child(${pos})`)
            lista.removeChild(div)
            pos = pos -1

        }
    }
    
}



