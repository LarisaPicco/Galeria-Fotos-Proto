const galeria = document.getElementById('galeria')
import fotos from "./../datos/fotos";
import datos from "./../datos/fotos"



const cargarImagen = (id, nombre, ruta, descripcion) => { //lo que quiero es recibir la ruta de cada imagen y cargarla como la imagen activa, reemplazando la imagen anterior por la nueva ruta de la nueva imagen
    //armé la funcion slideClick() para obtener esta información en el argumento

    galeria.querySelector('.galeria__imagen').src = ruta ;    
    //aplico querySelector a la galeria, para que busque el primer elemento que tenga la clase 
    //galeria__imagen (que serán las imagenes), y le VOY A INDICAR QUE SOLO QUIERO MODIFICAR SU ATRIBUTO SRC, Y LE VOY A DECIR QUE ÉSTE SRC VA A SER IGUAL AL QUE NOSOTROS LE PASEMOS A LA FUNCION EN EL PARAMETRO ruta

    //Cómo podemos acceder a esta informacion de la primera imagen?
    //en el archivo eventoCategorias apliqué const  {id, nombre, ruta, descripcion} = fotos[0] para extraer la info de las fotos. Aqui describo la funcion y en el archivo eventoCategorias aplico esta función que utilizará estos datos
    
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id; 


    //AHORA QUIERO ACCEDER AL TITULO, ENTONCES NO ACCEDERE A ESA INFO DESDE EL CONTENEDOR DE IMAGEN .galeria__imagen, SI NO DESDE EL CONTENEDOR DEL TITULO .galeria__titulo

    galeria.querySelector('.galeria__titulo').innerText = nombre;
    //accedo así al titulo de cada imagen y le cambio su innerText, y le digo que ahora sea igual al que dice en el nombre
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;


    //CAMBIAR EL BORDE BLANCO AL SLIDE ACTIVO:
    //para hacerlo necesitamos el id, la categoria actual y las fotos
    //ya tenemos el id, ahora necesitamos la categoria y las fotos: creamos las variables correspondientes para guardarlas y buscamos obtenerlas a cada una

    const categoriaActual = galeria.dataset.categoria;

    const fotos = datos.fotos[categoriaActual];



    
    let indexImagenActual;
    fotos.forEach( (foto, index) => {
        if(foto.id === id){
            indexImagenActual = index;
        }
    });

    //le aplico un forEach al array de las fotos y le voy a decir que me ejecute una función por cada foto.
    //por cada foto quiero acceder a su info y su index
    //si/ if la foto tiene un id igual a id, se guardará el index en la nueva variable que creamos indexImagenActual

    
    

    //Ahora tengo que obtener los elementos del carrousel:

    //le tengo que preguntar si hay algun slide antes de intentar acceder a él.
    //Entonces quiero acceder a la galeria, quiero que me busque todos los slides, y si los slides tienen un tamaño mayor a 0, o sea, si hay algun slide, asociando el index del slide actual quiero que me ejecute este código donde agrega la clase para el borde blanco:
    if(galeria.querySelectorAll('.galeria__carousel-slide').length > 0){

        //eliminar el borde blanco del slide que no está activo para que no estén seleccionadas varias:
    galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');

    galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
        //y de todas las img del carousel, quiero obtener la que tiene el indexImagenActual, y le aplico con classList la clase para ponerle el borde blanco

}
 
             
    
};


const cargarAnteriorSiguiente =(direccion) =>{ //en el argumento de esta funcion yo quiero recibir la información sobre la direccion de la imagen, si yo quiero cargar la siguiente o la anterior

    const categoriaActual = galeria.dataset.categoria;
    const fotos = datos.fotos[categoriaActual]; //aqui voy a obtener las fotos de solamente la categoria que esté activa
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen); //aqui obtengo el id de la imagen actual, con parseInt para transformar ese dato string en numeros

    //ahora quiero recorrer las imagenes en busca de la que tiene el id de la img actual y así obtener su index/posición, para saber cual es la imagen que le sigue: Aplico forEach
    let indexImagenActual;

    fotos.forEach((foto, index) =>{ //por cada foto quiero que me ejecute este if/condicional
       if(foto.id === idImagenActual){ //vamos a comprobar si la foto que estoy recorriendo actualmente tiene id igual al id de la imagen actual.
        //Si es igual, es la imagen que estoy buscando, entonces ahora tomo su index que necesito
          indexImagenActual = index;
       }

    });

     if(direccion === 'siguiente'){
        if(fotos[indexImagenActual + 1]){
      const {id, nombre, ruta, descripcion} = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion); }

     } else if(direccion === 'anterior'){
        if(fotos[indexImagenActual - 1]){
        const {id, nombre, ruta, descripcion} = fotos[indexImagenActual - 1];
        cargarImagen(id, nombre, ruta, descripcion);
     }
    }
}
//Cuando presione el boton de siguiente quiero detectar cual es la imagen actual, cómo?:
//Cuando presione el boton quiero obtener el valor id de la foto y cual es la categoria actual(data-categoria) para que en el archivo de fotos sepamos en cual categoría buscar, y luego obtendremos el id de la foto que estamos buscando



export {cargarImagen, cargarAnteriorSiguiente};

//Esta funcion puedo utilizarla para dos cosas: para abrir la primera imagen con su informacion, es decir para abrir la galeria, y para abrir cualquier otra imagen sobre la que dé click una vez abierta la galeria

//ABRIR CUALQUIER IMAGEN A LA QUE CLICKEE:
//Cómo hago para identificar la foto a la que dimos un click?
//A CADA IMAGEN LE PONGO UN ID
//Una vez que obtengo el id de la foto, obtengo tambien el nombre, ruta, descripcion
//También tengo que identificar cual es la categoría activa de la img que estoy clickeando

