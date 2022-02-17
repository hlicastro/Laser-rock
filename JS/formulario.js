const formulario = document.getElementById("formularioDeContacto")
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    if(formularioDeContacto.Nombre.value &&  formularioDeContacto.tel.value && formularioDeContacto.email.value && formularioDeContacto.comentario.value){
        //se envia a la planilla drive la informacion del mensaje
        fetch("https://sheet.best/api/sheets/8f9819ce-0373-4cc2-8504-38379dbd0fbc",{
            method:"POST",
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "Nombre" : formularioDeContacto.Nombre.value,
                "Apellido" : formularioDeContacto.Apellido.value,
                "Telefono" : formularioDeContacto.tel.value,
                "Email" : formularioDeContacto.email.value,
                "Consulta" : formularioDeContacto.comentario.value,

            })
        }
        )
        swal.fire(formularioDeContacto.Nombre.value,"Su mensaje se envio satifactoriamente","success")
        //se borra los datos del formulario
        formularioDeContacto.Nombre.value=""
        formularioDeContacto.Apellido.value=""
        formularioDeContacto.tel.value=""
        formularioDeContacto.email.value=""
        formularioDeContacto.comentario.value=""
    }
    else{swal.fire("Completa todos los campos para enviar el mensaje","","error")}
})