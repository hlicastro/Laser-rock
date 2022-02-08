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

        miniContenedor.className = `accesorios__elementos cont${pedido.item}`
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