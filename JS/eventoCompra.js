// itera constantemente en la busqueda de un click y suma el item al carrito el item correspondiente
function clickCompra() {
    for (let index = 0; index < stockTotal.arrayArticulos.length; index++) {
        let selector=".art"+(index+1)
        let botnind =document.querySelector(selector);
        botnind.onclick =()=> {
        sumarArt(index)
    }}
    
}
// itera constantemente en la busqueda de un click y suma el item al carrito el item correspondiente

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
    
