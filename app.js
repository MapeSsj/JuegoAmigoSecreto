// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = ""; // Para dejar en blanco el input
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de renderizar

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpiar resultado previo

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Para mostrar el resultado en un alert
    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);

    alert(`🎉 El amigo secreto es: ${amigoSorteado}`);
}