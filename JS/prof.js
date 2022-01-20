const PERSONAS = 'personas'

class Mundo {
    constructor() {
        this.personas = []
        this.edadesTotales = 0
    }
    addPerson(persona) {
        this.personas.push(persona)
    }
    calcularEdades() {
        this.edadesTotales = 0
        this.personas.map((v) => {
            this.edadesTotales = v.edad + this.edadesTotales
        })
        return this.edadesTotales
    }

}
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        this.image = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
    }
}


let miMundo = new Mundo()
const persona1 = new Persona('Alex Paredes', 25)
const persona2 = new Persona('Pepe el pollo', 30)
const persona3 = new Persona('Jose Jose', 60)
miMundo.addPerson(persona1)
miMundo.addPerson(persona2)
miMundo.addPerson(persona3)



const initMundo = () => {
    /* Init data */
    const tempMundo = JSON.parse(localStorage.getItem(PERSONAS))
    if (tempMundo == null || tempMundo == undefined) {
        localStorage.setItem(PERSONAS, JSON.stringify(miMundo.personas))
    } else {
        miMundo.personas = tempMundo;
    }

    console.log(tempMundo);
    console.log(miMundo);


    /* Init html */
    const lista = document.querySelector(".contenedor")
    miMundo.personas.map((person) => {
        const miniContenedor = document.createElement('div')

        const name = document.createElement("h1")
        const age = document.createElement('span')
        const image = document.createElement('img')

        miniContenedor.className = "person-item"

        name.textContent = `Nombre: ${person.nombre}`
        age.textContent = `Edad: ${person.edad}`
        image.src = person.image
        image.width = 300
        image.height = 300

        lista.appendChild(miniContenedor)

        miniContenedor.appendChild(name)
        miniContenedor.appendChild(age)
        miniContenedor.appendChild(image)
    })
}


initMundo()

function search() {
    let inputValue = document.getElementById('buscador').value
    let person = miMundo.personas.find(element => element.nombre.includes(inputValue));
    if (person) {
        alert(`El nombre es correcto: ${person.nombre}`)
    } else {
        alert('Intente nuevamente')
    }
}

function eliminarNodo() {
    const lista = document.querySelector(".contenedor")
    const pos = prompt('Ingrese la posicion a eliminar')
    const div = document.querySelector(`.person-item:nth-child(${pos})`)
    lista.removeChild(div)
    miMundo.personas.splice(pos - 1, 1)
    localStorage.setItem(PERSONAS, JSON.stringify(miMundo))
}

function calcularEdades() {
    let total = miMundo.calcularEdades()
    alert(`La suma de las edades es: ${total}`)
}

function agregarNodo() {
    /* Add js */
    const nombre = prompt('Ingrese el nombre')
    const edad = parseInt(prompt('Ingrese edad'))
    const persona = new Persona(nombre, edad)
    miMundo.addPerson(persona)
    localStorage.setItem(PERSONAS, JSON.stringify(miMundo.personas))
    addHtmlElement(persona)
    /* Add html */
    // const lista = document.querySelector(".contenedor")
    // const miniContenedor = document.createElement('div')
    // const name = document.createElement("h1")
    // const age = document.createElement('span')
    // const image = document.createElement('img')

    // miniContenedor.className = "person-item"

    // name.textContent = `Nombre: ${nombre}`
    // age.textContent = `Edad: ${edad}`
    // image.src = persona.image
    // image.width = 300
    // image.height = 300

    // lista.appendChild(miniContenedor)

    // miniContenedor.appendChild(name)
    // miniContenedor.appendChild(age)
    // miniContenedor.appendChild(image)
}
/* 
    document.createElement() permite crear elementos
    ducoment.appendChild() agrega un nuevo nodo a un nodo padre
*/



function getRootContainer() {
    return document.querySelector(".contenedor")
}
function addNewElemet(tag) {
    return document.createElement(tag)
}

function addHtmlElement(persona) {
    const container = getRootContainer()
    const childContainer = addNewElemet('div')
    const name = addNewElemet('h1')
    const age = addNewElemet('span')
    const image = addNewElemet('img')
    childContainer.className = "person-item"
    name.textContent = persona.nombre
    age.textContent = persona.edad
    image.src = persona.image
    image.width = 300
    image.height = 300
    container.appendChild(childContainer)
    childContainer.appendChild(name)
    childContainer.appendChild(age)
    childContainer.appendChild(image)
}