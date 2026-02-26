const botonTema = document.querySelector('#boton-tema');
const cuerpoDoc = document.body;

const temaGuardado = localStorage.getItem('tema-oscuro');

if (temaGuardado === 'activado') {
    cuerpoDoc.classList.add('dark-mode');
    botonTema.textContent = 'Sol';
}
botonTema.addEventListener('click', () => {
    cuerpoDoc.classList.toggle('dark-mode');
    
    if (cuerpoDoc.classList.contains('dark-mode')) {
        botonTema.textContent = 'Sol';
        localStorage.setItem('tema-oscuro', 'activado');
    } else {
        botonTema.textContent = 'Luna';
        localStorage.setItem('tema-oscuro', 'desactivado');
    }
});

const listaTareas = document.querySelector('#lista-tareas');

