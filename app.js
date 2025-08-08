// Paso 1: Inicializar los arrays
// Usaremos estos arrays para manejar los datos
let participantes = [];
let nombresDisponibles = [];

// Paso 2: Función para agregar un participante
// Esta función se llama cada vez que se presiona el botón "Agregar"
function agregarParticipante() {
    let input = document.getElementById('nombreParticipante');
    let nombreCompleto = input.value.trim(); // Obtiene el valor y elimina espacios en blanco

    // Valida que el campo no esté vacío
    if (nombreCompleto === "") {
        alert("Por favor, ingresa un nombre y apellido.");
        return;
    }

    // Agrega el nuevo participante a la lista principal
    participantes.push({ nombreCompleto: nombreCompleto, amigoSecreto: null });
    
    // Agrega el nombre a la lista de nombres disponibles para el sorteo
    nombresDisponibles.push(nombreCompleto);

    // Muestra la lista actualizada en la página
    mostrarParticipantesEnLista();
    
    // Limpia el campo de texto para el siguiente nombre
    input.value = "";
}

// Función para mostrar la lista de participantes en el HTML
function mostrarParticipantesEnLista() {
    let listaHTML = document.getElementById('listaParticipantes');
    listaHTML.innerHTML = ""; // Limpia la lista antes de volver a llenarla
    
    participantes.forEach(p => {
        let li = document.createElement('li');
        li.textContent = p.nombreCompleto;
        listaHTML.appendChild(li);
    });
}

// Paso 3: Función para realizar el sorteo
// Esta función se llama cuando se presiona el botón "Realizar Sorteo"
function realizarSorteo() {
    // Valida que haya al menos dos participantes para el sorteo
    if (participantes.length < 2) {
        alert("Debes agregar al menos dos participantes para el sorteo.");
        return;
    }

    // Copia de los nombres disponibles para el sorteo de cada persona
    let nombresParaSortear = [...nombresDisponibles];

    // Recorre cada participante y asigna un amigo secreto
    participantes.forEach(p => {
        let opcionesDeSorteo = nombresParaSortear.filter(nombre => nombre !== p.nombreCompleto);
        
        // Si ya no hay opciones, podría haber un problema de asignación
        if (opcionesDeSorteo.length === 0) {
            alert("Hubo un problema con la asignación. Reinicia el sorteo.");
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * opcionesDeSorteo.length);
        let amigoSecretoElegido = opcionesDeSorteo[indiceAleatorio];

        p.amigoSecreto = amigoSecretoElegido;

        // Elimina el nombre del sorteado de la lista de opciones para el siguiente participante
        nombresParaSortear = nombresParaSortear.filter(nombre => nombre !== amigoSecretoElegido);
    });

    // Muestra los resultados en la página web
    mostrarResultadosEnPagina();
}

// Función para mostrar los resultados en la página
function mostrarResultadosEnPagina() {
    let resultadosHTML = document.getElementById('resultadoSorteo');
    resultadosHTML.innerHTML = ""; // Limpia el área antes de mostrar los nuevos resultados

    participantes.forEach(p => {
        let pElement = document.createElement('p');
        pElement.textContent = `${p.nombreCompleto} le regala a --> ${p.amigoSecreto}`;
        resultadosHTML.appendChild(pElement);
    });
}