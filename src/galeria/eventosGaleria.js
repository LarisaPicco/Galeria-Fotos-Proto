//Podriamos agregar un evento por cada botón, pero es más optimo hacer una propagación de eventos para agregar un evento solo a toda la galeria y luego detectar cuando le demos click sobre un botón
//Si doy click sobre la cruz, quiero detectar si es el botón de cerrar o si es otro botón



const galeria = document.getElementById('galeria')

import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import { cargarAnteriorSiguiente } from "./cargarImagen";
import carousel from "./carousel";

galeria.addEventListener('click', (e) => { //dentro de esta funcion queremos acceder a la inform del evento (e), por eso en el argumento pongo el e
   const boton = e.target.closest('button'); //con closest me buscará el elemento más cercano donde haga click, lo buscará de abajo hacia arriba en el html, y en este caso especifico que sea un botón, el botón mas cercano de abajo hacia arriba, desde el svg del button que está especificado en el html 

   //ahora quiero comprobar si el boton al que le doy click tiene tal data-accion, propiedad personalizada que está como atributo en esa etiqueta button en el HTML:
   //lo compruebo con un if:
   if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
   }
   //se lee: si el boton que encuentra por closest, tiene ademas un dataset tipo accion (data-accion como atributo en el HTML), quiero que me 
   
   //le agrego signo ? para decirle: quiero que me busques e boton, que compruebes si tiene la propiedad dataset, y si no hay botón no pasa nada, y si está pero no tiene dataset no pasa nada. Si no pongo esta condición con el signo ?, me marcará un error cuando clickee en algo que no sea el boton con dataset accion. Como le doy la opcion de que si no lo encuentra entonces no pasa nada, no lo marcará como un error. Esta ejecucion funcionará solo si encuentra el boton con dataset de accion
   //agrego === para decirle que en caso que sea así, que encuentre un boton y que encima tenga dataset, sea estrictamente el de cerrar-galeria, y que ahí se ejecute este código 




//Ahora quiero ejecutar código al hacer click en cualquiera de las imágenes
//después de cargar el atributo id en el fragmento de código de html del archivo eventoCategorias.js, 
// y de asociar: galeria.dataset.categoria = categoriaActiva (le voy a decir que ese atributo personalizado sea la categoriaActiva),

//---CARROUSEL SLIDE CLICK

//Quiero buscar el dataset.id del elemento al que le dí click
//y quiero comprobar si el elemento al que le dí click tiene el valor dataset.id:

if(e.target.dataset.id){  //en caso de que sí tenga un dataset.id, quiero cargar la imagen
     
   //quiero que la siguiente función busque la información de la fotografía
   //entonces defino esta funcion slideClick en el archivo slideClick.js
     slideClick(e);
     //cómo detecto a cual slide hice click?
     //el evento e tiene información de a cual elemento le hicimos un click

}

//SIGUIENTE IMAGEN
if(boton?.dataset?.accion === 'siguiente-imagen'){
  cargarAnteriorSiguiente('siguiente')
}

//ANTERIOR IMAGEN
if(boton?.dataset?.accion === 'anterior-imagen'){
   cargarAnteriorSiguiente('anterior')
}


//CARROUSEL IMAGEN
if(boton?.dataset?.accion === 'siguiente-slide'){
   carousel('adelante');
 }
 
 //CARROUSEL IMAGEN
 if(boton?.dataset?.accion === 'anterior-slide'){
   carousel('atras');
 }

}) 