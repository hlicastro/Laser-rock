//eventos de click 
let btnBuscar =document.getElementById(`btnBuscar`);
btnBuscar.onclick =()=> {
    eliminarNodo()
}
let btnRestaurar =document.getElementById(`btnRestaurar`);
    btnRestaurar.onclick =()=> {
        carritoDeCero()
    }
let btnComprar =document.getElementById(`btnComprar`);
    btnComprar.onclick =()=> {
        comprasass()
    }
let btnFinalizar =document.getElementById(`btnFinalizar`);
    btnFinalizar.onclick =()=> {
        if (carritoCompra.subTotal==0){
            swal.fire("Su carrito no tiene Articulos","","error")}
        else{
                  //uso el alert comun porque no me muestra en lista el detalle del pedido por el metodo en que se genera
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
                
                        
                }
            }
            
    
    






    
