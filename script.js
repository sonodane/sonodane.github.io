// Effetto di animazione sul titolo "Benvenuto nel Mio Sito"
document.addEventListener('DOMContentLoaded', () => {
    const welcomeTitle = document.getElementById('welcome-title');
    welcomeTitle.style.opacity = 0;
    welcomeTitle.style.transition = 'opacity 2s';
    setTimeout(() => {
        welcomeTitle.style.opacity = 1;
    }, 500);
});

// Scroll automatico alle sezioni della pagina
const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Cambio colore del titolo al passaggio del mouse
const title = document.getElementById('welcome-title');
title.addEventListener('mouseover', () => {
    title.style.color = '#ff5722'; // Cambia colore
});
title.addEventListener('mouseout', () => {
    title.style.color = ''; // Ripristina il colore originale
});
