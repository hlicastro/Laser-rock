function comprasCarrito() {
    $('html, body').animate({scrollTop:0}, 'slow', function () {    
        $(".modalCarrito").delay(600).fadeIn('slow');
        const lista = document.querySelector(".modalBody")
        for (const a of stockTotal.arrayArticulos) {
            const div = document.querySelector(`.articuloModal`)
            if (div!=null){
                lista.removeChild(div)
            }
        }
        if ($(".modalBody")){$(".modalBody h5").remove();}
        if ( carritoCompra.subTotalCalc()==0 ) {
            if ($(".modalFooter")){$(".modalFooter h5").remove();}
            $(".modalBody").append(`<h5>Su Carrito no tiene ningun articulo, haga click en cerrar para seguir comprando </h5> `);        }else{
        let position=0
        for (const producto of carritoCompra.listaCompra) {
            //cambiooo
            $(".modalBody").append(`<div" class="articuloModal  articuloModal${producto.item}" mx-auto" >
            <img style="width: 100px" src="${producto.imagen}">
            <h5> ${producto.artista} - ${producto.titulo}   </h5>
            <button type="button" id="btnQuitarArt${producto.item}" >X</button>
            <h5> Con un valor unitario de $${producto.precio} X ${producto.stockVenta} unidades = $${producto.precio* producto.stockVenta}</h5>
            </div>`);
            position = position + 1
        }
        carritoCompra.subTotalCalc()
        if ($(".modalHead")){$(".modalHead h4").remove();}
        $(".modalHead").append(`<h4> ${carritoCompra.usuario} Tu pedido esta compuesto por: </h4>`);
        if ($(".modalFooter")){$(".modalFooter h5").remove();}
        $(".modalFooter").append(`<h5> El total del pedido es de: $${carritoCompra.subTotal} </h5> `);
        clickBorrarArticulo()

    }})
}
