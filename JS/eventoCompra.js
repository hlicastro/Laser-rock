function clickCompra() {
    for (let index = 0; index < stockTotal.arrayArticulos.length; index++) {
        let selector=".art"+(index+1)
        let botnind =document.querySelector(selector);
        botnind.onclick =()=> {
        sumarArt(index)
    }}
    
}
