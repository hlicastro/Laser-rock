//Verifica si el usuario esta ingresado para solicitar el usuario o saludarlo
if (localStorage.getItem("usuario")!=null && localStorage.getItem("usuario") != undefined){
    if (JSON.parse(sessionStorage.getItem("ingreso")!=1)) {
        sessionStorage.setItem("ingreso", JSON.stringify(1))
        Swal.fire("Que bueno volver a verte:",JSON.parse(localStorage.getItem("usuario")))
    }
    
    
}else{
    (async()=>{
        const {value:usuario} = await Swal.fire({
            title: "Bienvenido",
            text: "Ingresa tu nombre para empezar a comprar",
            icon: "info",
            position:"top",
            input: "text",
            inputvalue:"usuario",
            inputPlaceholder:"ingresa tu nombre "       
        });
        localStorage.setItem("usuario", JSON.stringify(usuario))
        sessionStorage.setItem("ingreso", JSON.stringify(1))
    })()
}