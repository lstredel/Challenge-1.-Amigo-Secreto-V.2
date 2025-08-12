// Estado de la lista de amigos
const amigos = [];

function renderListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  if (!lista) return;
  lista.innerHTML = "";
  amigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function agregarAmigo() {
  const input = document.getElementById("amigo");
  if (!input) return;

  const nombre = input.value.trim();
  if (!nombre) {
    alert("Por favor, escribe un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  renderListaAmigos();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Agrega al menos un nombre antes de sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  const resultado = document.getElementById("resultado");
  if (!resultado) return;

  resultado.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = `¡El amigo sorteado es: ${elegido}!`;
  resultado.appendChild(li);

  // Limpiar la lista de nombres (estado y UI) después del sorteo
  amigos.length = 0;
  renderListaAmigos();
}

// Exponer funciones para los atributos onclick del HTML
window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;