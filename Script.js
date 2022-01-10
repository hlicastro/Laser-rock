//Declaracion de variables
let ingreso=0;
let subtotal=0;
let cantidadProducto=0;

//Funciones
const calcularIva =(importe) =>{return(importe*1.21)}
const subtotales =(subtotal,producto) =>{return(subtotal+producto)}


function mostrarTotal(cantidadProducto,subtotal)  { 
    
    alert(`Su pedido tiene esta compuesto de: ${cantidadProducto} items \nSubtotal es de: $ ${subtotal} \nTotal IVA incluido: $${calcularIva(subtotal)}`)  
}
function comprobarStock(stock,subtotal,cantidadProducto,subtotal,imprimir) {
    
    if(stock == 0){alert("Este producto se encuentra sin STOCK elija otro articulo")}
        else{
        imprimir.getImprimirArticulo(subtotal,cantidadProducto)
        }
}


function descuento(cantidadProducto, subtotal) {
    if (cantidadProducto<3) {
        alert("No se aplica descuento")
        
        
    } else {
        alert("Por superar los 3 productos se aplica un 5% de descuento")
        subtotal*0.95
        mostrarTotal(cantidadProducto,subtotal)

    }
    
}

class articulo{
    constructor(item, artista, titulo, tipo, precio,stock) {
        this.item = item;
        this.artista   = artista;
        this.titulo  = titulo;
        this.tipo  = tipo;
        this.precio  = precio;
        this.stock  = stock;
    }
    getImprimirArticulo(subtotal,cantidadProducto){
        alert("Agregaste un: " +this.tipo+ " -" +this.titulo +" de "+this.artista +" por un valor de $" +this.precio + "\nSu pedido tiene: " + cantidadProducto  +"\nSubtotal es de:$ "+subtotal+ "\nSubtotal IVA incluido $" +calcularIva(subtotal))  
        this.stock =this.stock-1

    }
    

}
const articulo1 = new articulo(1, "La Renga", "Despedazados por mil partes","CD",1580, 2);
const articulo2 = new articulo(2, "Divididos", "La era de la boludez","CD",1450, 4);
const articulo3 = new articulo(3, "Las Pastillas del Abuelo", "2020","CD",1390,2);
const articulo4 = new articulo(4, "The Rolling Stones", "On Air","CD",2120,5);
const articulo5 = new articulo(5, "Los Piojos", "Ay, Ay, Ay","CD",1560,9);
const articulo6 = new articulo(6, "Spinetta", "No mires Atas","CD",2110,3);
const articulo7 = new articulo(7, "ACDC", "Back in Black","Vinilos",5850,1);
const articulo8 = new articulo(8, "La Renga", "El Hojo Del Huracan","DVD",3175,2);


//ingreso de productos
while (ingreso !=null) {
    
ingreso = prompt(`Ingrese el numero del producto deseado: o Precione Cancelar para Finalizar`)

switch (ingreso) {
    case "1":
        if(articulo1.stock == 0){alert("Este producto se encuentra sin STOCK elija otro articulo")}
        else{
        cantidadProducto++
        subtotal= subtotales(subtotal,articulo1.precio)
        articulo1.getImprimirArticulo(subtotal,cantidadProducto)}
    break;
    case "2":
        if(articulo2.stock == 0){alert("Este producto se encuentra sin STOCK elija otro articulo")}
        else{
        cantidadProducto++
        subtotal= subtotales(subtotal,articulo2.precio)
        articulo2.getImprimirArticulo(subtotal,cantidadProducto)}
    break;
    case "3":
        if(articulo3.stock == 0){alert("Este producto se encuentra sin STOCK elija otro articulo")}
        else{
        cantidadProducto++
        subtotal= subtotales(subtotal,articulo3.precio)
        articulo3.getImprimirArticulo(subtotal,cantidadProducto)}
    break;
    case "4":
        if(articulo4.stock == 0){alert("Este producto se encuentra sin STOCK elija otro articulo")}
        else{
        cantidadProducto++
        subtotal= subtotales(subtotal,articulo4.precio)
        articulo4.getImprimirArticulo(subtotal,cantidadProducto)}
    break;
    case "5":
        if(articulo5.stock == 0){alert("Este producto se encuentra sin STOCK elija otro articulo")}
        else{
        cantidadProducto++
        subtotal= subtotales(subtotal,articulo5.precio)
        articulo5.getImprimirArticulo(subtotal,cantidadProducto)}
    break;     
    case "6":
        if(articulo6.stock == 0){alert("Este producto se encuentra sin STOCK elija otro articulo")}
        else{
        cantidadProducto++
        subtotal= subtotales(subtotal,articulo6.precio)
        articulo6.getImprimirArticulo(subtotal,cantidadProducto)}
    break;   
    case "7":
        if(articulo7.stock == 0){alert("Este producto se encuentra sin STOCK elija otro articulo")}
        else{
        cantidadProducto++
        subtotal= subtotales(subtotal,articulo7.precio)
        articulo7.getImprimirArticulo(subtotal,cantidadProducto)}
    break;   
    case "8":
        if(articulo8.stock == 0){alert("Este producto se encuentra sin STOCK elija otro articulo")}
        else{
        cantidadProducto++
        subtotal= subtotales(subtotal,articulo8.precio)
        articulo8.getImprimirArticulo(subtotal,cantidadProducto)}
    break;    
    default:
        if (ingreso !=null) {alert("No ingreso un item valido, elija un nuevo item ") }

        break;
    
    }
    
}

mostrarTotal(cantidadProducto,subtotal)
subtotal=descuento(cantidadProducto, subtotal)
