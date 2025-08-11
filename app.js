let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre y apellido.');
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = '';
    mostrarAmigos();
}

function mostrarAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaHTML.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Necesitas agregar al menos un amigo para el sorteo.');
        return;
    }
    
    // Genera un índice aleatorio entre 0 y el número total de amigos.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtiene el nombre del amigo en esa posición aleatoria.
    let amigoSorteado = amigos[indiceAleatorio];

    // Muestra el resultado en la página.
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<p>¡El amigo secreto elegido es: ${amigoSorteado}!</p>`;
}

function reiniciar() {
    amigos = [];
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}