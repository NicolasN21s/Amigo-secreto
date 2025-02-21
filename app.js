// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = '';
        input.focus();
    }
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        document.getElementById('resultado').textContent = 'Necesitas al menos 2 nombres para sortear.';
        return;
    }
    const shuffled = [...amigos].sort(() => 0.5 - Math.random());
    const resultado = shuffled.map((nombre, index) => `${nombre} le regala a ${shuffled[(index + 1) % shuffled.length]}`).join(', ');
    document.getElementById('resultado').textContent = resultado;
}

document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
