// Simulacion de una base de datos
//Estamos simulando de que el servidor nos va a responder con un objeto
// Dentro de este objeto tenemos la propiedad categorias que es un array donde cada 
// uno de los elementos de este array va a ser la informacion de una categoria, cada uno un objeto

//QUEREMOS ESTA INFORMACION PARA CONSTRUIR LA PÁGINA DE INICIO

import data from './fotos';
//quiero importar la data del archivo fotos que se encuentra en la misma carpeta.

const fotos = data.fotos;  
    // del objeto fotos quiero extraer data
    //ASI OBTENEMOS EL OBJETO QUE ESTABAMOS IMPORTANDO
export default{
    categorias:[
        {
            id: 'america', 
            nombre: 'America', 
            numeroFotos: fotos['america'].length,
            imagenPortada: './img/america.jpg',
        },
            //Quiero tener una propiedad que se llame numeroFotos y aqui quiero guardar cuantas tiene.
            //Asi que creo la propiedad numeroFotos, entonces podemos acceder al objeto fotos, luego accedemos a la propiedad america
        
        //Entonces hice un objeto, para la categoria america (id: 'america'), que tiene de nombre 'America' (nombre: 'America'), tiene una propiedad numeroFotos que va a contar cuantas fotos tenemos en el archivo fotos.js (fotos.america), y que va a contar con la propiedad de tener esa imagen de portada.

        //Ésta es la información de una sola categoría: america.
 
        {
            id: 'europa', 
            nombre: 'Europa', 
            numeroFotos: fotos['europa'].length,
            imagenPortada: './img/europa.jpg',
        },
              //categoria europa

        {
            id: 'africa', 
            nombre: 'Africa', 
            numeroFotos: fotos['africa'].length,
            imagenPortada: './img/africa.jpg',
        },

        {
            id: 'asia', 
            nombre: 'Asia', 
            numeroFotos: fotos['asia'].length,
            imagenPortada: './img/asia.jpg',
        },

        {
            id: 'oceania', 
            nombre: 'Oceania', 
            numeroFotos: fotos['oceania'].length,
            imagenPortada: './img/oceania.jpg',
        },

        {
            id: 'antartida', 
            nombre: 'Antartida', 
            numeroFotos: fotos['antartida'].length,
            imagenPortada: './img/antartida.jpg',
        }
    ]

}