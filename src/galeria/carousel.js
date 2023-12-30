const galeria = document.getElementById('galeria')

const carousel = (direccion) => { //queremos identificar si debemos ir adelante o atras en el carousel

    const opciones = {   
        
        root: document.querySelector('.galeria__carousel'),   //definir la parte donde quiero aplicar el observador. Sólo al carousel, no a toda la pantalla. El criterio va a ser observar cuales imagenes entran en el y cuales salen del carousel
        rootMargin: '0px',
        threshold: 0.9,  //define cuánto porcentaje consideramos a la imagen como dentro, es decir visible
           
    }


    const observer = new IntersectionObserver((entradas)=>{ //esta funcion se va a ejecutar cada vez que haya cambios en los elementos que estamos observando en el carousel
                  //funcion que se va a ejecutar dependiendo de si los elementos entran o salen de la página
                    //tiene el argumento entradas, que va a contener todos los elementos que estamos viendo, para acceder a ellos vamos a tener que recibirlos en este argumento entradas

                   const slidesVisibles = entradas.filter((entrada)=>{//el metodo filter filtra el array entradas y nos devuelve un array con las slides visibles. Filter ejecutará esta función a cada elemento del array (a cada elemento lo quiero conocer como entrada)
                                if(entrada.isIntersecting === true){
                                                                 //me va a devolver un array que va a  contener solo las entradas/slides que tengan intersect true
                                      return entrada;                           
                                }
                                       

                   }); 
                 
                   //una vez que tengo hecho el array slideVisible de elementos visibles, quiero que calcule el index del último elemento visible:
                   if(direccion === 'atras'){
                        const primerSlideVisible = slidesVisibles[0] //de todos los slides visibles quiero obtener el primero, que tiene el index 0
                        const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);
                       if(indexPrimerSlideVisible >= 1){
                        entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                            behavior: 'smooth',
                            inline: 'start'

                            })
                            //le digo que tome el primer elemento de la izquierda que está oculto(entradas[indexPrimerSlideVisible - 1]) y queremos que le haga scroll
                        }
                   } else if(direccion === 'adelante'){ //si la direccion es adelante queremos obtener el último slide visible, y queremos saber su index
                       const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1]//-1 porque el index es la cantidad total de elementos/length, menos 1
                       const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);
                              //aplico indexOf en el array entradas para revisar todos los index de todos los elementos incluidos los que no se ven, y éstos estan todos en el array padre entradas

                      if(entradas.length - 1 > indexUltimoSlideVisible){        
                        entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                            behavior: 'smooth',
                            inline: 'start'
                        }) //+1 porque es el index del ultimo slide visible mas uno, el siguiente
                           //scrollIntoView es un metodo que nos permite hacer scroll y ponerlo dentro de la vista
                           //trabajo con scrollIntoView con un objeto {} de opciones
                           //dentro de las opciones behavior indica cual va a ser el comportamiento
                           //inline indica donde va a ubicarse el nuevo elemento visible por scroll, start indica que al principio
                   }
                }



              const slides = galeria.querySelectorAll('.galeria__carousel-slide');
              slides.forEach((slide)=>{ //esta sirve para que por cada slide quiero que lo deje de observar

                        observer.unobserve(slide)   //el metodo unobserve me permite dejar de observar los slides           
                   })
    }, opciones);
    
     //FUNCION PARA OBTENER TODOS LOS SLIDES DEL CAROUSEL
     const slides = galeria.querySelectorAll('.galeria__carousel-slide');//quiero que me obtenga de la galeria todos los slides, y a cada uno de ellos lo vamos a observar    
     slides.forEach((slide)=>{
                    //para obtenerlos usamos su clase


         observer.observe(slide)              //por cada slide quiero que me ejecutes la función, de aplicarle el observer      //ahora vamos a obtener las entradas/elementos que estamos vigilando
    })

}  //clickeo el boton siguiente del carousel, me observa el elemento con el forEach, y me ejecuta la función del observador de los slides para detectar cuales están visibles, PERO DESPUES DE ÉSTO QUIERO DEJAR DE OBSERVAR, por eso aplico otro forEach con el metodo unobserve

export default carousel;

