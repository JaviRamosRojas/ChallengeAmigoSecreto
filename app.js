//Variables
let amigo = [];

function agregarAmigo(){
    let ingresarAmigo = document.getElementById("amigo");
    let nombreAmigo = ingresarAmigo.value;

    if(!nombreAmigo){
        alert("Favor ingresar el nombre de alguno de tus amigos");
        return;
    }
    amigo.push(nombreAmigo);
   // console.log(amigo);
   ingresarAmigo.value = "";
   ingresarAmigo.focus();
   renderizarAmigos();

}

function renderizarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    for(let i = 0; i < amigo.length; i++){
        let nombre = document.createElement("li");
        nombre.textContent = amigo[i];
        listaAmigos.appendChild(nombre);

    }
}

function sortearAmigo() {
    if(amigo.length === 0){
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}