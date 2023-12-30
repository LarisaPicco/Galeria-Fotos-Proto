import datos from "./../datos/fotos"

import { cargarImagen } from "./cargarImagen";

//FUNCION sideClick() PARA OBTENER LOS DATOS DE LA IMAGEN A LA QUE LE DIMOS CLICK, QUE SERVIRA PARA LUEGO PASARLE ESOS DATOS A LA FUNCION cargarImagen()

const slideClick = (e) => { //aqui la funcion recibe el evento y así podemos extraer la información
                            //y de esta información queremos obtener el id:

let ruta, nombre, descripcion; //defino variables para guardar esos valores que extraiga de las fotos

const id = parseInt(e.target.dataset.id); //aplico parseInt para convertir el valor del id en un numero y que no quede como string (está escrito como string en la fuente de datos de fotos)
const galeria = document.getElementById('galeria');
const categoriaActiva = galeria.dataset.categoria;
//de la galeria quiero extraer su categoriaActiva


//--categoríaActiva

//Quiero obtener la imagen que tenga id=1, cómo accedo? Tengo que recorrerlo
datos.fotos[categoriaActiva].forEach((foto) => {

    if(foto.id === id){
       ruta = foto.ruta;
       nombre = foto.nombre;
       descripcion = foto.descripcion;
    }
})
//AHORA SÍ TENGO LISTA ESTA INFORMACIÓN PARA APLICAR LA FUNCION cargarImagen, YA QUE LA FUNCION cargarImagen NECESITA ESTOS DATOS EN SU ARGUMENTO: cargarImagen(ruta, nombre, descripcion) => {}

cargarImagen(id, nombre, ruta, descripcion); //esta funcion me pide estos datos para su argumento, para cambiarlos cada vez que haga click en otra imagen

}

export default slideClick;