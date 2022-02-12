//eventos de click con jquery
$('#btnBuscar').on('click', function () { 
    eliminarNodo()})
$('#btnRestaurar').on('click', function () {
    carritoDeCero()})
$('#btnComprar').on('click', function () {
    comprasCarrito()
})
$('#btnFinalizar').on('click', function () {
    if (carritoCompra.subTotal==0){
            swal.fire("Su carrito no tiene Articulos","","error")}
    else{
        swal.fire({
            title:"Muchas gracias por tu compra",
            text:"Tu pedido se gestiono satifactoriamente",
            icon:"success",
            timer:3000,
            position:"top",
            showConfirmButton:false,
        })
            carritoCompra.listaCompra=[]
            localStorage.setItem("comprarLista", JSON.stringify())
            localStorage.removeItem("carritoLista");            
            $(".modalCarrito").slideUp();    
            
        }
})
$('#btnCacncelar').on('click', function () {
    $('html, body').animate({scrollTop:0}, 'slow')
    $(".modalCarrito").delay(1000).slideUp()
}) 