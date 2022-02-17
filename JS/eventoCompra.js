// itera constantemente en la busqueda de un click y suma el item al carrito el item correspondiente
function clickCompra() {
    for (let index = 0; index < stockTotal.arrayArticulos.length; index++) {
        let selector=".art"+(index+1)
        let botnind =document.querySelector(selector);
        botnind.onclick =()=> {
        sumarArt(index)
    }}
    
}
// Verifica si pasan el mouse sobre las tarjetas de la seccion compras
function mouseoverCompra() { 
    for (let index = 0; index < stockTotal.arrayArticulos.length; index++) {
        let selector=".cont"+(index+1)
        $(selector).mouseover(function () { 
            $(selector).css("opacity", 1);
            $(selector).css("border", "solid 4px gray");

        });
        $(selector).mouseout(function () { 
            $(selector).css( "opacity", 0.7);
            $(selector).css("border", "solid 1px gray")
        });
    }
}
function clickBorrarArticulo() {
    for (let index = 0; index <= stockTotal.arrayArticulos.length; index++) {
        let selector = "#btnQuitarArt"+index
        $(selector).click(function (e) { 
            e.preventDefault();
            for (const iterator of carritoCompra.listaCompra) {
                if (iterator.item==index) {
                    stockTotal.arrayArticulos[index-1].stock= stockTotal.arrayArticulos[index-1].stock+iterator.stockVenta
                    carritoCompra.listaCompra.splice(carritoCompra.listaCompra.indexOf(iterator),1)
                    comprasCarrito()
                    modificarStockDom(iterator)
                    localStorage.setItem("comprarLista", JSON.stringify(carritoCompra.listaCompra))         
                    localStorage.setItem("stockLista", JSON.stringify(stockTotal.arrayArticulos))     
                }
            }
        });
    }
}
        


