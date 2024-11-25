/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== Light and Dark Mode ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';
const headerImage = document.getElementById('header-img'); // Seleccionamos el img con id header-img

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

// Set default theme to dark if no preference is stored
if (!selectedTheme) {
    document.body.classList.add(darkTheme); // Activar modo oscuro por defecto
    themeButton.classList.add(iconTheme);
    headerImage.src = './assets/img/nv-blanco.png';
    headerImage.src = '../assets/img/nv-blanco.png';// Imagen modo oscuro por defecto
    localStorage.setItem('selected-theme', 'dark');
    localStorage.setItem('selected-icon', 'bx-moon');
} else {
    // Apply stored theme preferences
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);

    // Cambiar la imagen según el tema almacenado
    headerImage.src = selectedTheme === 'dark' 
        ? './assets/img/nv-blanco.png' 
        : './assets/img/nv-negro.png';
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // Cambiar la imagen según el tema actual
    if (document.body.classList.contains(darkTheme)) {
        headerImage.src = './assets/img/nv-blanco.png';
    } else {
        headerImage.src = './assets/img/nv-negro.png';
    }

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});


/*==================== Show Top Scroll ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== Scroll sections active link ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== Scroll Reveal Animation ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

// Lista de emojis
const emojis = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '☹️', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '😬', '😰', '😱', '😳', '🤪', '😵', '😡', '😠']; 
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
    document.title = '| DJ-Nv |';
});


// Mostrar el cuadro emergente al cargar la página
window.onload = function() {
    document.getElementById("popup").style.display = "flex";
}

// Cerrar el cuadro emergente cuando se haga clic en la X
document.getElementById("close-btn").onclick = function() {
    document.getElementById("popup").style.display = "none";
}
