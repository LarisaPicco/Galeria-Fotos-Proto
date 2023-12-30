
import dataFotos from './datos/fotos';
import { cargarImagen } from './galeria/cargarImagen';
//importo los datos de las fotos 

// Podríamos agregar un evento para cada categoria, pero es más eficiente agregar un evento directamente al contenedor de las categorias.
// Luego podemos detectar con la propagacion de eventos cuando demos click sobre cada una de las categorias (america, europa, africa, asia, etc)

//PRIMERO CREO AL CONTENEDOR
const contenedorCategorias = document.getElementById('categorias'); //lo traigo del html
const galeria = document.getElementById('galeria'); //traigo la galeria


                                                            
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();
    //aplicar el preventDefault evita el comportamiento que tiene por defecto el navegador de dirigirte para el top de la pagina.
    if (e.target.closest('a')){
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden'; //saco el scroll que tiene


        const categoriaActiva = e.target.closest('a').dataset.categoria;
        //aqui en categoriaActiva guardamos cual es la categoria a la que le damos click
        
        galeria.dataset.categoria = categoriaActiva;
        //le voy a decir que ese atributo personalizado sea la categoriaActiva




        const fotos = dataFotos.fotos[categoriaActiva];
        //para acceder a las fotos creo una variable fotos, y en ésta quiero que guarde solamente las fotos de la categoria a la que le damos click
        //entonces a la variable creada fotos, le guardo el acceso a dataFotos, la fuente de fotos que importé del otro archivos, y de dataFotos, entro al objeto fotos
        //Luego le tenemos que indicar cuál categoria quiero utilizar en el momento del click, que cargue las fotos de [categoriaActiva]

        const carousel = galeria.querySelector('.galeria__carousel-slides')
        //creo la variable carousel, y desde esta variable queremos acceder a la galeria y aplicarle querySelector al propio carousel


        carousel.innerHTML=''     //con estas comillas dejo en blanco el codigo html del carrousel, lo elimino
        //Asi, antes de cargar las fotos con el siguiente forEach, queremos acceder al carrousel,
        //eliminar su HTML interno y dejarlo en blanco, entonces lo eliminamos, y una vez que lo eliminamos 
        //cargamos las fotos con el siguiente forEach:

        //CARGAR LA RUTA DE CADA IMAGEN PARA QUE SEA UNA IMAGEN ACTIVA:
        const  {id, nombre, ruta, descripcion} = fotos[0]; //aca le digo: quiero extraer la informacion de la primera foto y quiero desestructurar, quiero extraer el nombre, id, ruta y descripcion de la primera foto

        cargarImagen(id, nombre, ruta, descripcion); //LE PASAMOS LA INFO A LA FUNCION Y LA FUNCION PUEDE UTILIZARLA
        //traigo la funcion que va a cargar la imagen activa, funcion que defini en el archivo cargarImagen.js 
        


        fotos.forEach((foto) => {
            const slide = `<a href="#" class="galeria__carousel-slide">      
            <img class="galeria__carousel-image" src="${foto.ruta}" data-id ="${foto.id}" alt="" />
        </a>`;  //creo slides                                            //aqui pongo este atributo para agregar el id de las fotos
        
        galeria.querySelector('.galeria__carousel-slides').innerHTML+= slide //por cada slide que estoy creando tambien lo voy a querer insertar
        });

        //trabajamos con forEach para recorrer el array
        //identifico cada foto poniendo foto en el argumento

        //por cada foto quiero construir un slide que voy a guardar dentro de esta nueva variable slide
        //voy a trabajar con backticks con esta variable slide, y pegaré entre backticks el código de html del slide

         //aplico querySelector a la galeria porque quiero que me busque dentro de la galeria el primer elemento que tenga la clase .galeria__carousel-slides
        //tengo el contenedor y quiero acceder a su código HTML, y quiero que sea igual al código que ya tiene más la nueva slide
        
        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active') 
        //con querySelector voy a buscar el primer elemento que tenga la clase slide
     
    };

}) //cuando haga click en un elemento que esté en el contenedor, se ejecutará este evento click, de abrir la galeria
//la función recibe el evento (e)