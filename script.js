const botonTema = document.querySelector('#boton-tema');
const cuerpoDoc = document.body;

botonTema.addEventListener('click', () => {
    cuerpoDoc.classList.toggle('dark-mode');
    
    if (cuerpoDoc.classList.contains('dark-mode')) {
        botonTema.textContent = 'Sol';
    } else {
        botonTema.textContent = 'Luna';
    }
});