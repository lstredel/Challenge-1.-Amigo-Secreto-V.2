# Challenge Amigo Secreto. Curso Alura Latam

# 🎁 Amigo Secreto V2 - El Challenge

Este es un juego interactivo para sortear un "Amigo Secreto" entre un grupo de participantes. El proyecto fue desarrollado como parte de un curso de programación, aplicando conceptos de lógica, estructura web y diseño.

## 🌟 Características Principales

Juego Interactivo: Permite a los usuarios agregar nombres y sortear un amigo secreto de forma aleatoria.

Diseño Moderno: Interfaz visualmente atractiva, diseñada con CSS moderno y colores vibrantes.

Validaciones Robustas: Evita nombres duplicados, comprueba la longitud de los nombres y valida la cantidad de participantes antes del sorteo.

Efectos Visuales: Incluye una animación de confeti para celebrar al amigo sorteado, mejorando la experiencia del usuario.

Persistencia de Datos: Los nombres cargados y sorteados se guardan automáticamente en el navegador, para que la lista no se borre al recargar la página.

## ⚙️Tecnologías Utilizadas
HTML5: Para la estructura y el contenido de la página.

CSS3: Para el diseño, los estilos y la disposición de los elementos.

JavaScript: Para la lógica del juego y la interacción del usuario.

## 🔧 Funciones del Código

El código JavaScript está organizado en varias funciones, cada una con una responsabilidad específica:

agregar(): Agrega un nuevo nombre a la lista de participantes, aplicando diversas validaciones.

sortear(): Es la función principal que ejecuta la lógica del sorteo, elige un ganador, lo mueve a la lista de sorteados y activa el confeti.

reiniciar(): Restablece el juego, vaciando las listas de participantes y sorteados.

guardarDatos(): Se encarga de guardar el estado de las listas en la memoria del navegador (localStorage).

window.onload: Carga los datos guardados del navegador al iniciar la página para recuperar el estado del juego.

## 🚀 Cómo Jugar

Abre el archivo index.html en tu navegador web.

Escribe el nombre de un participante en el campo de texto y haz clic en "Añadir".

Repite el proceso hasta tener a todos los participantes en la lista.

Haz clic en "Sortear Amigo" para elegir al azar a uno de los participantes.

Haz clic en "Reiniciar" para vaciar las listas y empezar un nuevo juego.

## 📸 Vista Previa

<img width="2553" height="1255" alt="image" src="https://github.com/user-attachments/assets/cbd8349d-b15a-4cf9-a213-4cb9c72fc861" />


## 📝 Licencia
Este proyecto está bajo la Licencia MIT.
