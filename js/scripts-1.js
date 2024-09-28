// Lista de emojis
const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '☺️', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠']; 
let currentEmojiIndex = 0;

// Función para cambiar el emoji en el encabezado
function changeEmoji() {
    const header = document.getElementById('dj-nv-header');
    header.innerHTML = `DJ-NV | ${emojis[currentEmojiIndex]}`;
    currentEmojiIndex = (currentEmojiIndex + 1) % emojis.length;
}

// Cambiar el emoji cada 2 segundos (2000 milisegundos)
setInterval(changeEmoji, 200);

// Cambiar el título de la página al entrar o salir
window.addEventListener('focus', function() {
    document.title = `| ⏪⏯️⏩🔁 |`;
});

window.addEventListener('blur', function() {
    document.title = '| DJ-NV beta |';
});

const muteButton = document.getElementById('mute-button');
const radio = document.getElementById('radio');

// Función para mutear/desmutear el audio
muteButton.addEventListener('click', () => {
    if (radio.paused) {
        radio.play().catch(error => {
            console.error('Error al intentar reproducir la radio:', error);
        });
        muteButton.textContent = "🔇 Mute";
    } else {
        radio.pause();
        muteButton.textContent = "🔊 Unmute";
    }
});

// Reproducir automáticamente la radio al cargar la página
window.addEventListener('load', () => {
    radio.play().catch(error => {
        console.log('Autoplay was prevented. Necesitas hacer clic en el botón para reproducir:', error);
    });
});

