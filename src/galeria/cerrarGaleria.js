const galeria = document.getElementById('galeria')

const cerrarGaleria = () => {
    galeria.classList.remove('galeria--active');
    document.body.style.overflow = '';   //agrego en la funcion, que al cerrar la galeria se aparezca el scroll de nuevo. Sin ésto quedaría desaparecido el scroll incluso habiendo cerrado la galeria
}


export default cerrarGaleria; 
//exporto esta funcion asi la agrego en el codigo del addEventListener al clickear el boton de cerrar. se encuentra en el archivo eventosGaleria.js