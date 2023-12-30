import dataCategorias from './datos/categorias';

const {categorias} = dataCategorias;
//defino un array llamado categorias
const contenedorCategorias = document.getElementById('categorias');


//Usaremos un forEach para que por cada una de las categorias, me haga un elemento que va a ser un enlace,va a ser una etiqueta tipo <a> que va a tener esa imagen de fondo, va a tener tal texto e información

//accedo al array categorias, le aplico el forEach porque quiero que me ejecute una función por cada una de las categorias. La función que quiero aplicar consta de agregar a la página la información de las categorias en forma de enlace

categorias.forEach((categoria) => {
    

     const nuevaCategoria = document.createElement('a');
     const plantilla = `<img class="categoria__img" src="${categoria.imagenPortada}" />
     <div class="categoria__datos">
         <p class="categoria__nombre">${categoria.nombre}</p>
         <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
     </div>`;

     nuevaCategoria.innerHTML = plantilla
     //Al codigo html que esta dentro de plantilla, quiero agregarlo con la tecnica innerHTML a la etiqueta <a> creada y guardada en la variable nuevaCategoria. AQUI JUNTAMOS LOS DOS ELEMENTOS, <a> Y LA PLANTILLA DE DIV DEL HTML

     //AGREGO ATRIBUTOS A LA NUEVA ETIQUETA <a> CREADA:
     nuevaCategoria.classList.add('categoria'); //agrego una clase del css
     nuevaCategoria.href = '#'; //le agrego a donde va dirigido el enlace, ya que se trata de una etiqueta <a>
     nuevaCategoria.dataset.categoria = categoria.id;

     //el dataset contiene todas las propiedades personalizadas que queremos agregar. ej: este atributo personalizado que se va a llamar categoria, 
     // y quiero que el atributo personalizado llamado categoria, tenga como valor categoria.id (esta categoria sale del argumento de la función) y así por cada categoria que recorra el forEach, va a modificar la ruta, el nombre y el número de fotos (primero america, luego europa, africa, etc)

     contenedorCategorias.append(nuevaCategoria) //agregamos la etiqueta <a> como nodo al contenedor
} );


//al argumento de esta funcion flecha, le podemos pasar como parametro cómo queremos identificar cada elemento
//Cada uno de estos elementos va a ser una categoria

//Quiero crear un enlace e insertarlo dentro de mi página:
//Para crear elementos se siguen estos pasos:
// - crear el elemento Qué tipo de elemento va a ser? en este caso etiqueta <a> 
//   se escribe document.createElement('a')
// - guardamos el nuevo elemento que estamos creando en una variable así: const nuevaCategoria = document.createElement('a')
// - copio y pego el codigo para este div que esta en el html. Copio y pego el div contenedor de la img y el div de texto descriptivo, porque QUIERO PODER CREARLO DENTRO DEL ENLACE:
// puedo crearlo dentro del enlace asi: - defino una variable llamada plantilla, pego el codigo html del div entre backticks``
//PERO a lo que copié del html le cambio la ruta, el nombre y el n° de fotos, y le agrego ${} para que pueda acceder a esa información para cada categoria (america, europa, africa, etc) desde la fuente de datos categorias.js
// - agregar los atributos a la nueva etiqueta <a> creada


//RESUMEN: CREAMOS UN ELEMENTO <a>
//         CREAMOS UNA PLANTILLA
//         JUNTAMOS LOS DOS ELEMENTOS
//         LO AGREGAMOS AL DOM