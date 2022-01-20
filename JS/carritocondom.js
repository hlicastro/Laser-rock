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


function eliminarNodo() {
    let lista = document.querySelector(".accesorios")
    alert("asdadasd")
    lista.jQueryempty(".accesorios")
}
