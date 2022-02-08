$(".modalHead").append(`<h4> ${carritoCompra.usuario} Tu pedido esta compuesto por: </h4>`);
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
            $(".modalBody").append(`<div class="articuloModal  mx-auto" >
            <img style="width: 100px" src="${producto.imagen}">
            <h5> ${producto.artista} - ${producto.titulo}</h5>
            <h5> Con un valor unitario de $${producto.precio} X ${producto.stockVenta} unidades = $${producto.precio* producto.stockVenta}</h5></div>`);
        }
        carritoCompra.subTotalCalc()
        $(".modalFooter").append(`<h5> El total del pedido es de: $${carritoCompra.subTotal}</h5> `);
        carritoCompra.subTotalCalc()
        $(".modalFooter h5").remove();
        $(".modalFooter").append(`<h5> El total del pedido es de: $${carritoCompra.subTotal} </h5> `);
    })
}
