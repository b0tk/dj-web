// Función para alternar el menú desplegable en pantallas pequeñas
function toggleNavbar() {
    const navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}

// Lista de emojis
const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '☺️', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠']; // Puedes añadir más emojis según necesites
let currentEmojiIndex = 0;

    function changeEmoji() {
        // Obtener el elemento del encabezado
        const header = document.getElementById('dj-nv-header');

        // Cambiar el emoji
        header.innerHTML = `DJ-NV | ${emojis[currentEmojiIndex]}`;

        // Incrementar el índice para obtener el próximo emoji
        currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
    }

    // Cambiar el emoji cada 2 segundos (2000 milisegundos)
    setInterval(changeEmoji, 200);

    var audio = document.getElementById('audio');

    function playAudio() {
        audio.volume = 0.1; // Establece el volumen inicial
        audio.play();
    }

    document.getElementById('minimize-button').addEventListener('click', function() {
        var audioPlayer = document.getElementById('audio-player');
        var restoreButton = document.getElementById('restore-button');
        audioPlayer.style.display = 'none';
        restoreButton.style.display = 'block';
        var audio = document.getElementById('audio');
        audio.pause();
    });

    document.getElementById('restore-button').addEventListener('click', function() {
        var audioPlayer = document.getElementById('audio-player');
        var restoreButton = document.getElementById('restore-button');
        audioPlayer.style.display = 'block';
        restoreButton.style.display = 'none';
    });

    document.addEventListener('DOMContentLoaded', function() {
    // Obtén el elemento del div
    const divEstadoBot = document.getElementById('estado-bot');

    // URL de la API de Discord para obtener el estado del bot
    const urlAPI = 'https://discord.com/api/v10/users/ID_DEL_BOT';

    // Realiza una solicitud a la API de Discord
    fetch(urlAPI)
        .then(response => response.json())
        .then(data => {
            const estado = data['presence']['status'];
            // Verifica el estado del bot y actualiza el div en consecuencia
            if (estado === 'online') {
                divEstadoBot.textContent = 'El bot está en línea';
                divEstadoBot.style.color = 'green';
            } else {
                divEstadoBot.textContent = 'El bot está fuera de línea';
                divEstadoBot.style.color = 'red';
            }
        })
        .catch(error => console.error('Error:', error));
});
