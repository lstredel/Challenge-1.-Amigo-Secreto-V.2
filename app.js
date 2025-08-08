let participantes = [];
let resultadosSorteo = new Map();

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre y apellido.');
        return;
    }

    if (participantes.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    participantes.push(nombre);
    inputAmigo.value = '';
    mostrarAmigos();
}

function mostrarAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.textContent = '';
    
    participantes.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo() {
    // Si el sorteo no ha sido preparado, lo hacemos ahora.
    if (resultadosSorteo.size === 0) {
        if (participantes.length < 2) {
            alert('Necesitas al menos dos amigos para el sorteo.');
            return;
        }

        // Realizamos el sorteo completo y válido en el fondo
        let nombresDisponibles = [...participantes];
        nombresDisponibles.sort(() => Math.random() - 0.5);

        for (let i = 0; i < participantes.length; i++) {
            if (participantes[i] === nombresDisponibles[i]) {
                console.log("Pre-sorteo fallido, reiniciando...");
                return sortearAmigo(); // Reinicia si alguien se eligió a sí mismo
            }
            resultadosSorteo.set(participantes[i], nombresDisponibles[i]);
        }
        
        document.getElementById('resultado').innerHTML = '<p>¡Sorteo listo! Ahora cada persona puede sortear su nombre.</p>';
        return;
    }

    // Si el sorteo ya está preparado, cada persona puede ver su resultado.
    let miNombre = prompt("Ingresa tu nombre para ver tu amigo secreto:");
    
    if (resultadosSorteo.has(miNombre)) {
        let amigoSecreto = resultadosSorteo.get(miNombre);
        document.getElementById('resultado').innerHTML = `<p>${miNombre} le regala a --> ${amigoSecreto}</p>`;
        resultadosSorteo.delete(miNombre);
    } else {
        alert('Tu nombre no se encuentra en la lista o ya has visto a tu amigo secreto.');
    }
}

function reiniciar() {
    participantes = [];
    resultadosSorteo.clear();
    document.getElementById('amigo').value = '';
    document.getElementById('listaAmigos').textContent = '';
    document.getElementById('resultado').innerHTML = '';
}
