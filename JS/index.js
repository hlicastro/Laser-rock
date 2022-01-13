let ingreso = ""
//solicita el nombre para realizar el pedido
let usuario =prompt("ingrese su nombre")
//verifica que el valor ingresado sea valido
function ingresoValido(ingreso){
    if (ingreso == null){
        return true;
    } else{
        for (const articulo of stockTotal.arrayArticulos){
            if(ingreso == articulo.item){
                return true
            }
        }
    }
    return false;
} 
//Busca el producto ingresado 
function ingresoProducto (ingreso){
    for (const iterator of stockTotal.arrayArticulos) {
        if (ingreso ==iterator.item){
            return iterator
            
        }
    }
}

//Se crea articulos
class Articulo{
    constructor(item, artista, titulo, tipo, precio,stock,stockVenta) {
        this.item = item;
        this.artista   = artista;
        this.titulo  = titulo;
        this.tipo  = tipo;
        this.precio  = precio;
        this.stock  = stock;
        this.stockVenta = stockVenta
    }
    
    //verifica si el producto esta en Stock
    verStock(){
        if (this.stock == 0){
            return false;
        } else{
            this.stock>0;
            this.stock--
            alert(`agregaste con exito al carrito\n${this.titulo} de  ${this.artista}  por un valor de $ ${this.precio}`)

            return true;
        }
    } 
    
    
}
class StockTotal{
    constructor (){
        this.arrayArticulos = [];
    }
    

}
//Proceso de compras
class CarritoDeCompras{//ok
    constructor(usuario){
        this.date = 1;
        this.usuario = usuario;
        this.listaCompra= [];
        this.subTotal=0;
    }
    //Calcula el total
    subTotalCalc(){
        this.subTotal=0;
        for (const item of carritoCompra.listaCompra){
            this.subTotal += item.precio;
        }
    }
    //genera la lista final del pedido 
    armarlistaFinal(){
        let listaPedido= usuario +"\nTu pedido esta compusto por: "  + carritoCompra.listaCompra.length +" articulos, por un total de $" + carritoCompra.subTotal +"\n\nDETALLE \n"
            let i=1
            for (const listar of carritoCompra.listaCompra) {
            listaPedido += (`${i++}- ${listar.titulo} de  ${listar.artista}  por un valor de $ ${listar.precio} \n`) 
        }
        return listaPedido
    }
    //genera la lista que se muestra antes de ingresar un articulo
    armarlistaStock(){
        let listaPedido="ingrese el codigo del producto que desea agregar al carrito o precione cancelar para finalizar el pedido\n\n"
            let i=1
            for (const listar of stockTotal.arrayArticulos) {
            listaPedido += (`${i++}- ${listar.titulo} de  ${listar.artista}  por un valor de $ ${listar.precio} quedan en Stock: "${listar.stock}". \n`) 
        }
        return listaPedido
    }
}
//Se carga el Stock en el Array 
const articulo1 = new Articulo(1, "La Renga", "Despedazados por mil partes","CD",1580, 0,1);
const articulo2 = new Articulo(2, "Divididos", "La era de la boludez","CD",1450, 4,1);
const articulo3 = new Articulo(3, "Las Pastillas del Abuelo", "2020","CD",1390,2,1);
const articulo4 = new Articulo(4, "The Rolling Stones", "On Air","CD",2120,5,1);
const articulo5 = new Articulo(5, "Los Piojos", "Ay, Ay, Ay","CD",1560,9,1);
const articulo6 = new Articulo(6, "Spinetta", "No mires Atas","CD",2110,3,1);
const articulo7 = new Articulo(7, "ACDC", "Back in Black","Vinilos",5850,1,1);
const articulo8 = new Articulo(8, "La Renga", "El Hojo Del Huracan","DVD",3175,2,1);
const stockTotal = new StockTotal();
const carritoCompra = new CarritoDeCompras(usuario);

//se ingresan desordenados solo con el objeto de acomodar los mismos mendiante el sort
stockTotal.arrayArticulos.push(articulo2);
stockTotal.arrayArticulos.push(articulo4);
stockTotal.arrayArticulos.push(articulo5);
stockTotal.arrayArticulos.push(articulo7);
stockTotal.arrayArticulos.push(articulo3);
stockTotal.arrayArticulos.push(articulo1);
stockTotal.arrayArticulos.push(articulo8);
stockTotal.arrayArticulos.push(articulo6);

//Ordena el array para evitar que se encuentren desordenados los items 
stockTotal.arrayArticulos.sort((a,b)=>{return a.item-b.item})

//INGRESO DE DATOS

do {
    ingreso = prompt( carritoCompra.armarlistaStock() )
    ingresotemp=ingresoProducto(ingreso)
    if(ingreso!=null){
    if  (ingresoValido(ingreso)){
        if (ingresotemp.verStock()) {
            carritoCompra.listaCompra.push(ingresotemp)
        }else{
            alert("Momentaneamente este producto no tiene STOCK")

        }
    }else{alert("el codigo de producto ingresado es incorrecto")}
    }
}while (ingreso!=null);
//se muestra el pedido final
carritoCompra.subTotalCalc()
alert(carritoCompra.armarlistaFinal() )



