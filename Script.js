//Declaracion de variables
let cantidadProducto = 0;
let ingreso=0;
let subtotal=0;
const item1 =4560;
const item2 =5000;
const item3 =6000;
const item4 =8000;
const item5 =3000;

//Funciones
const calcularIva =(importe) =>{return(importe*1.21)}
const subtotales =(subtotal,producto) =>{return(subtotal+producto)}

function mostrarTotal(cantidadProducto,subtotal)  { 
    
    alert(`Su pedido tiene esta compuesto de: ${cantidadProducto} items \nSubtotal es de: $ ${subtotal} \nTotal IVA incluido: $${calcularIva(subtotal)}`)  
}

function imprimir(descripcion,importe, cantidadProducto,subtotal) {
    alert(`Agregaste ${descripcion} por un valor de $ ${importe} \nSu pedido tiene: ${cantidadProducto} items \nSubtotal es de:$ ${subtotal} \n Subtotal IVA incluido ${calcularIva(subtotal)} `)  
}
function descuento(cantidadProducto, subtotal) {
    if (cantidadProducto<3) {
        alert("No se aplica descuento")
        
        
    } else {
        alert("Por superar los 3 productos se aplica un 5% de descuento")
        return subtotal*0.95
        
    }
    
}

//ingreso de productos
while (ingreso !="ESC" ) {
    ingreso = prompt(`Ingrese el numero del producto deseado: \n1_ Agregaste Prover Altaperformance 20kg por un valor de $ ${item1} \n2_ Pro Plan 15kg por un valor de $ ${item2} \n3_ Vital Can 20kg por un valor de $ ${item3} \n4_ Agregaste Total Balance 20kg por un valor de $ ${item4} \n5_ Raza perro adulto 21kg por un valor de $ ${item5} \nESC para finalizar la compra`)

switch (ingreso) {
    case "1":
        cantidadProducto++
        subtotal= subtotales(subtotal,item1)
        imprimir("Prover Alta performance 20kg",item1,cantidadProducto,subtotal)
    break;
    case "2":
        cantidadProducto++
        subtotal= subtotales(subtotal,item2)
        imprimir("Pro Plan 15kg",item2,cantidadProducto,subtotal)
    break;
    case "3":
        cantidadProducto++
        subtotal= subtotales(subtotal,item3)
        imprimir("Vital Can 20kg",item3,cantidadProducto,subtotal)
    break;
    case "4":
        cantidadProducto++
        subtotal= subtotales(subtotal,item4)
        imprimir("Total Balance 20kg",item4,cantidadProducto,subtotal)

    break;
    case "5":
        cantidadProducto++
        subtotal= subtotales(subtotal,item5)
        imprimir("Raza perro adulto 21kg",item4,cantidadProducto,subtotal)

    break;      
    default:
        if (ingreso !="ESC") {alert("No ingreso un item valido, elija un nuevo item ") }

        break;
    
    }
    
}
mostrarTotal(cantidadProducto,subtotal)
subtotal=descuento(cantidadProducto, subtotal)
mostrarTotal(cantidadProducto,subtotal)



