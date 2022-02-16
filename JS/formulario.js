const formulario = document.getElementById("formularioDeContacto")
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
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
})