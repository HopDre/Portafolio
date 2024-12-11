// Selecciona todas las secciones
const secciones = document.querySelectorAll('.seccion');

// Función para verificar si una sección está visible
function mostrarSecciones() {
  const triggerPoint = window.innerHeight * 0.8; // Punto de activación
  
  secciones.forEach(seccion => {
    const posicion = seccion.getBoundingClientRect().top;
    if (posicion < triggerPoint) {
      seccion.classList.add('visible'); // Agrega clase cuando es visible
    }
  });
}

// Detectar scroll
window.addEventListener('scroll', mostrarSecciones);
