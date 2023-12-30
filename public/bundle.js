'use strict';

// Base de datos 
var datos = {
	fotos: {
		america: [
			{
				id: 1,
				nombre: 'America 1',
				descripcion:
					'America 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/1.jpg',
			},
			{
				id: 2,
				nombre: 'America 2',
				descripcion:
					'America 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/2.jpg',
			},
			{
				id: 3,
				nombre: 'America 3',
				descripcion:
					'America 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/3.jpg',
			},
			{
				id: 4,
				nombre: 'America 4',
				descripcion:
					'America 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/4.jpg',
			},
			{
				id: 5,
				nombre: 'America 5',
				descripcion:
					'America 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/5.jpg',
			},
			{
				id: 6,
				nombre: 'America 6',
				descripcion:
					'America 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/6.jpg',
			},
			{
				id: 7,
				nombre: 'America 7',
				descripcion:
					'America 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/7.jpg',
			},
			{
				id: 8,
				nombre: 'America 8',
				descripcion:
					'America 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/8.jpg',
			},
			{
				id: 9,
				nombre: 'America 9',
				descripcion:
					'America 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/9.jpg',
			},
			{
				id: 10,
				nombre: 'America 10',
				descripcion:
					'America 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/america/10.jpg',
			},
		],
		europa: [
			{
				id: 11,
				nombre: 'Europa 1',
				descripcion:
					'Europa 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/1.jpg',
			},
			{
				id: 12,
				nombre: 'Europa 2',
				descripcion:
					'Europa 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/2.jpg',
			},
			{
				id: 13,
				nombre: 'Europa 3',
				descripcion:
					'Europa 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/3.jpg',
			},
			{
				id: 14,
				nombre: 'Europa 4',
				descripcion:
					'Europa 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/4.jpg',
			},
			{
				id: 15,
				nombre: 'Europa 5',
				descripcion:
					'Europa 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/5.jpg',
			},
			{
				id: 16,
				nombre: 'Europa 6',
				descripcion:
					'Europa 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/6.jpg',
			},
			{
				id: 17,
				nombre: 'Europa 7',
				descripcion:
					'Europa 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/7.jpg',
			},
			{
				id: 18,
				nombre: 'Europa 8',
				descripcion:
					'Europa 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/8.jpg',
			},
			{
				id: 19,
				nombre: 'Europa 9',
				descripcion:
					'Europa 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/9.jpg',
			},
			{
				id: 20,
				nombre: 'Europa 10',
				descripcion:
					'Europa 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/europa/10.jpg',
			},
		],

		africa: [
			{
				id: 21,
				nombre: 'África 1',
				descripcion:
					'África 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/1.jpg',
			},
			{
				id: 22,
				nombre: 'África 2',
				descripcion:
					'África 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/2.jpg',
			},
			{
				id: 23,
				nombre: 'África 3',
				descripcion:
					'África 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/3.jpg',
			},
			{
				id: 24,
				nombre: 'África 4',
				descripcion:
					'África 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/4.jpg',
			},
			{
				id: 25,
				nombre: 'África 5',
				descripcion:
					'África 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/5.jpg',
			},
			{
				id: 26,
				nombre: 'África 6',
				descripcion:
					'África 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/6.jpg',
			},
			{
				id: 27,
				nombre: 'África 7',
				descripcion:
					'África 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/7.jpg',
			},
			{
				id: 28,
				nombre: 'África 8',
				descripcion:
					'África 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/8.jpg',
			},
			{
				id: 29,
				nombre: 'África 9',
				descripcion:
					'África 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/9.jpg',
			},
			{
				id: 30,
				nombre: 'África 10',
				descripcion:
					'África 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/africa/10.jpg',
			},
		],
		asia: [
			{
				id: 31,
				nombre: 'Asia 1',
				descripcion:
					'Asia 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/1.jpg',
			},
			{
				id: 32,
				nombre: 'Asia 2',
				descripcion:
					'Asia 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/2.jpg',
			},
			{
				id: 33,
				nombre: 'Asia 3',
				descripcion:
					'Asia 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/3.jpg',
			},
			{
				id: 34,
				nombre: 'Asia 4',
				descripcion:
					'Asia 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/4.jpg',
			},
			{
				id: 35,
				nombre: 'Asia 5',
				descripcion:
					'Asia 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/5.jpg',
			},
			{
				id: 36,
				nombre: 'Asia 6',
				descripcion:
					'Asia 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/6.jpg',
			},
			{
				id: 37,
				nombre: 'Asia 7',
				descripcion:
					'Asia 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/7.jpg',
			},
			{
				id: 38,
				nombre: 'Asia 8',
				descripcion:
					'Asia 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/8.jpg',
			},
			{
				id: 39,
				nombre: 'Asia 9',
				descripcion:
					'Asia 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/9.jpg',
			},
			{
				id: 40,
				nombre: 'Asia 10',
				descripcion:
					'Asia 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/asia/10.jpg',
			},
		],
		oceania: [
			{
				id: 41,
				nombre: 'Oceania 1',
				descripcion:
					'Oceania 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/1.jpg',
			},
			{
				id: 42,
				nombre: 'Oceania 2',
				descripcion:
					'Oceania 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/2.jpg',
			},
			{
				id: 43,
				nombre: 'Oceania 3',
				descripcion:
					'Oceania 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/3.jpg',
			},
			{
				id: 44,
				nombre: 'Oceania 4',
				descripcion:
					'Oceania 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/4.jpg',
			},
			{
				id: 45,
				nombre: 'Oceania 5',
				descripcion:
					'Oceania 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/5.jpg',
			},
			{
				id: 46,
				nombre: 'Oceania 6',
				descripcion:
					'Oceania 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/6.jpg',
			},
			{
				id: 47,
				nombre: 'Oceania 7',
				descripcion:
					'Oceania 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/7.jpg',
			},
			{
				id: 48,
				nombre: 'Oceania 8',
				descripcion:
					'Oceania 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/8.jpg',
			},
			{
				id: 49,
				nombre: 'Oceania 9',
				descripcion:
					'Oceania 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/9.jpg',
			},
			{
				id: 50,
				nombre: 'Oceania 10',
				descripcion:
					'Oceania 10 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/oceania/10.jpg',
			},
		],
		antartida: [
			{
				id: 51,
				nombre: 'Antártida 1',
				descripcion:
					'Antártida 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/1.jpg',
			},
			{
				id: 52,
				nombre: 'Antártida 2',
				descripcion:
					'Antártida 2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/2.jpg',
			},
			{
				id: 53,
				nombre: 'Antártida 3',
				descripcion:
					'Antártida 3 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/3.jpg',
			},
			{
				id: 54,
				nombre: 'Antártida 4',
				descripcion:
					'Antártida 4 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/4.jpg',
			},
			{
				id: 55,
				nombre: 'Antártida 5',
				descripcion:
					'Antártida 5 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/5.jpg',
			},
			{
				id: 56,
				nombre: 'Antártida 6',
				descripcion:
					'Antártida 6 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/6.jpg',
			},
			{
				id: 57,
				nombre: 'Antártida 7',
				descripcion:
					'Antártida 7 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/7.jpg',
			},
			{
				id: 58,
				nombre: 'Antártida 8',
				descripcion:
					'Antártida 8 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/8.jpg',
			},
			{
				id: 59,
				nombre: 'Antártida 9',
				descripcion:
					'Antártida 9 - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id enim ac diam consectetur vulputate eget in magna. Sed fermentum, sapien nec vulputate bibendum, urna neque eleifend leo, at porta diam risus non ligula. Nulla ac venenatis augue. Morbi lobortis libero sit amet justo cursus, iaculis ultricies sapien lacinia.',
				ruta: './img/antartida/9.jpg',
			},
		],
	},
};

// Simulacion de una base de datos
//Estamos simulando de que el servidor nos va a responder con un objeto
// Dentro de este objeto tenemos la propiedad categorias que es un array donde cada 
// uno de los elementos de este array va a ser la informacion de una categoria, cada uno un objeto

//quiero importar la data del archivo fotos que se encuentra en la misma carpeta.

const fotos = datos.fotos;  
    // del objeto fotos quiero extraer data
    //ASI OBTENEMOS EL OBJETO QUE ESTABAMOS IMPORTANDO
var dataCategorias = {
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

};

const {categorias} = dataCategorias;
//defino un array llamado categorias
const contenedorCategorias$1 = document.getElementById('categorias');


//Usaremos un forEach para que por cada una de las categorias, me haga un elemento que va a ser un enlace,va a ser una etiqueta tipo <a> que va a tener esa imagen de fondo, va a tener tal texto e información

//accedo al array categorias, le aplico el forEach porque quiero que me ejecute una función por cada una de las categorias. La función que quiero aplicar consta de agregar a la página la información de las categorias en forma de enlace

categorias.forEach((categoria) => {
    

     const nuevaCategoria = document.createElement('a');
     const plantilla = `<img class="categoria__img" src="${categoria.imagenPortada}" />
     <div class="categoria__datos">
         <p class="categoria__nombre">${categoria.nombre}</p>
         <p class="categoria__numero-fotos">${categoria.numeroFotos} fotos</p>
     </div>`;

     nuevaCategoria.innerHTML = plantilla;
     //Al codigo html que esta dentro de plantilla, quiero agregarlo con la tecnica innerHTML a la etiqueta <a> creada y guardada en la variable nuevaCategoria. AQUI JUNTAMOS LOS DOS ELEMENTOS, <a> Y LA PLANTILLA DE DIV DEL HTML

     //AGREGO ATRIBUTOS A LA NUEVA ETIQUETA <a> CREADA:
     nuevaCategoria.classList.add('categoria'); //agrego una clase del css
     nuevaCategoria.href = '#'; //le agrego a donde va dirigido el enlace, ya que se trata de una etiqueta <a>
     nuevaCategoria.dataset.categoria = categoria.id;

     //el dataset contiene todas las propiedades personalizadas que queremos agregar. ej: este atributo personalizado que se va a llamar categoria, 
     // y quiero que el atributo personalizado llamado categoria, tenga como valor categoria.id (esta categoria sale del argumento de la función) y así por cada categoria que recorra el forEach, va a modificar la ruta, el nombre y el número de fotos (primero america, luego europa, africa, etc)

     contenedorCategorias$1.append(nuevaCategoria); //agregamos la etiqueta <a> como nodo al contenedor
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

const galeria$4 = document.getElementById('galeria');



const cargarImagen = (id, nombre, ruta, descripcion) => { //lo que quiero es recibir la ruta de cada imagen y cargarla como la imagen activa, reemplazando la imagen anterior por la nueva ruta de la nueva imagen
    //armé la funcion slideClick() para obtener esta información en el argumento

    galeria$4.querySelector('.galeria__imagen').src = ruta ;    
    //aplico querySelector a la galeria, para que busque el primer elemento que tenga la clase 
    //galeria__imagen (que serán las imagenes), y le VOY A INDICAR QUE SOLO QUIERO MODIFICAR SU ATRIBUTO SRC, Y LE VOY A DECIR QUE ÉSTE SRC VA A SER IGUAL AL QUE NOSOTROS LE PASEMOS A LA FUNCION EN EL PARAMETRO ruta

    //Cómo podemos acceder a esta informacion de la primera imagen?
    //en el archivo eventoCategorias apliqué const  {id, nombre, ruta, descripcion} = fotos[0] para extraer la info de las fotos. Aqui describo la funcion y en el archivo eventoCategorias aplico esta función que utilizará estos datos
    
    galeria$4.querySelector('.galeria__imagen').dataset.idImagen = id; 


    //AHORA QUIERO ACCEDER AL TITULO, ENTONCES NO ACCEDERE A ESA INFO DESDE EL CONTENEDOR DE IMAGEN .galeria__imagen, SI NO DESDE EL CONTENEDOR DEL TITULO .galeria__titulo

    galeria$4.querySelector('.galeria__titulo').innerText = nombre;
    //accedo así al titulo de cada imagen y le cambio su innerText, y le digo que ahora sea igual al que dice en el nombre
    galeria$4.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;


    //CAMBIAR EL BORDE BLANCO AL SLIDE ACTIVO:
    //para hacerlo necesitamos el id, la categoria actual y las fotos
    //ya tenemos el id, ahora necesitamos la categoria y las fotos: creamos las variables correspondientes para guardarlas y buscamos obtenerlas a cada una

    const categoriaActual = galeria$4.dataset.categoria;

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
    if(galeria$4.querySelectorAll('.galeria__carousel-slide').length > 0){

        //eliminar el borde blanco del slide que no está activo para que no estén seleccionadas varias:
    galeria$4.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');

    galeria$4.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
        //y de todas las img del carousel, quiero obtener la que tiene el indexImagenActual, y le aplico con classList la clase para ponerle el borde blanco

}
 
             
    
};


const cargarAnteriorSiguiente =(direccion) =>{ //en el argumento de esta funcion yo quiero recibir la información sobre la direccion de la imagen, si yo quiero cargar la siguiente o la anterior

    const categoriaActual = galeria$4.dataset.categoria;
    const fotos = datos.fotos[categoriaActual]; //aqui voy a obtener las fotos de solamente la categoria que esté activa
    const idImagenActual = parseInt(galeria$4.querySelector('.galeria__imagen').dataset.idImagen); //aqui obtengo el id de la imagen actual, con parseInt para transformar ese dato string en numeros

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
};

//Esta funcion puedo utilizarla para dos cosas: para abrir la primera imagen con su informacion, es decir para abrir la galeria, y para abrir cualquier otra imagen sobre la que dé click una vez abierta la galeria

//ABRIR CUALQUIER IMAGEN A LA QUE CLICKEE:
//Cómo hago para identificar la foto a la que dimos un click?
//A CADA IMAGEN LE PONGO UN ID
//Una vez que obtengo el id de la foto, obtengo tambien el nombre, ruta, descripcion
//También tengo que identificar cual es la categoría activa de la img que estoy clickeando

//importo los datos de las fotos 

// Podríamos agregar un evento para cada categoria, pero es más eficiente agregar un evento directamente al contenedor de las categorias.
// Luego podemos detectar con la propagacion de eventos cuando demos click sobre cada una de las categorias (america, europa, africa, asia, etc)

//PRIMERO CREO AL CONTENEDOR
const contenedorCategorias = document.getElementById('categorias'); //lo traigo del html
const galeria$3 = document.getElementById('galeria'); //traigo la galeria


                                                            
contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();
    //aplicar el preventDefault evita el comportamiento que tiene por defecto el navegador de dirigirte para el top de la pagina.
    if (e.target.closest('a')){
        galeria$3.classList.add('galeria--active');
        document.body.style.overflow = 'hidden'; //saco el scroll que tiene


        const categoriaActiva = e.target.closest('a').dataset.categoria;
        //aqui en categoriaActiva guardamos cual es la categoria a la que le damos click
        
        galeria$3.dataset.categoria = categoriaActiva;
        //le voy a decir que ese atributo personalizado sea la categoriaActiva




        const fotos = datos.fotos[categoriaActiva];
        //para acceder a las fotos creo una variable fotos, y en ésta quiero que guarde solamente las fotos de la categoria a la que le damos click
        //entonces a la variable creada fotos, le guardo el acceso a dataFotos, la fuente de fotos que importé del otro archivos, y de dataFotos, entro al objeto fotos
        //Luego le tenemos que indicar cuál categoria quiero utilizar en el momento del click, que cargue las fotos de [categoriaActiva]

        const carousel = galeria$3.querySelector('.galeria__carousel-slides');
        //creo la variable carousel, y desde esta variable queremos acceder a la galeria y aplicarle querySelector al propio carousel


        carousel.innerHTML='';     //con estas comillas dejo en blanco el codigo html del carrousel, lo elimino
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
        
        galeria$3.querySelector('.galeria__carousel-slides').innerHTML+= slide; //por cada slide que estoy creando tambien lo voy a querer insertar
        });

        //trabajamos con forEach para recorrer el array
        //identifico cada foto poniendo foto en el argumento

        //por cada foto quiero construir un slide que voy a guardar dentro de esta nueva variable slide
        //voy a trabajar con backticks con esta variable slide, y pegaré entre backticks el código de html del slide

         //aplico querySelector a la galeria porque quiero que me busque dentro de la galeria el primer elemento que tenga la clase .galeria__carousel-slides
        //tengo el contenedor y quiero acceder a su código HTML, y quiero que sea igual al código que ya tiene más la nueva slide
        
        galeria$3.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active'); 
        //con querySelector voy a buscar el primer elemento que tenga la clase slide
     
    }
}); //cuando haga click en un elemento que esté en el contenedor, se ejecutará este evento click, de abrir la galeria
//la función recibe el evento (e)

const galeria$2 = document.getElementById('galeria');

const cerrarGaleria = () => {
    galeria$2.classList.remove('galeria--active');
    document.body.style.overflow = '';   //agrego en la funcion, que al cerrar la galeria se aparezca el scroll de nuevo. Sin ésto quedaría desaparecido el scroll incluso habiendo cerrado la galeria
};
//exporto esta funcion asi la agrego en el codigo del addEventListener al clickear el boton de cerrar. se encuentra en el archivo eventosGaleria.js

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
});
//AHORA SÍ TENGO LISTA ESTA INFORMACIÓN PARA APLICAR LA FUNCION cargarImagen, YA QUE LA FUNCION cargarImagen NECESITA ESTOS DATOS EN SU ARGUMENTO: cargarImagen(ruta, nombre, descripcion) => {}

cargarImagen(id, nombre, ruta, descripcion); //esta funcion me pide estos datos para su argumento, para cambiarlos cada vez que haga click en otra imagen

};

const galeria$1 = document.getElementById('galeria');

const carousel = (direccion) => { //queremos identificar si debemos ir adelante o atras en el carousel

    const opciones = {   
        
        root: document.querySelector('.galeria__carousel'),   //definir la parte donde quiero aplicar el observador. Sólo al carousel, no a toda la pantalla. El criterio va a ser observar cuales imagenes entran en el y cuales salen del carousel
        rootMargin: '0px',
        threshold: 0.9,  //define cuánto porcentaje consideramos a la imagen como dentro, es decir visible
           
    };


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
                        const primerSlideVisible = slidesVisibles[0]; //de todos los slides visibles quiero obtener el primero, que tiene el index 0
                        const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);
                       if(indexPrimerSlideVisible >= 1){
                        entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                            behavior: 'smooth',
                            inline: 'start'

                            });
                            //le digo que tome el primer elemento de la izquierda que está oculto(entradas[indexPrimerSlideVisible - 1]) y queremos que le haga scroll
                        }
                   } else if(direccion === 'adelante'){ //si la direccion es adelante queremos obtener el último slide visible, y queremos saber su index
                       const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1];//-1 porque el index es la cantidad total de elementos/length, menos 1
                       const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);
                              //aplico indexOf en el array entradas para revisar todos los index de todos los elementos incluidos los que no se ven, y éstos estan todos en el array padre entradas

                      if(entradas.length - 1 > indexUltimoSlideVisible){        
                        entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                            behavior: 'smooth',
                            inline: 'start'
                        }); //+1 porque es el index del ultimo slide visible mas uno, el siguiente
                           //scrollIntoView es un metodo que nos permite hacer scroll y ponerlo dentro de la vista
                           //trabajo con scrollIntoView con un objeto {} de opciones
                           //dentro de las opciones behavior indica cual va a ser el comportamiento
                           //inline indica donde va a ubicarse el nuevo elemento visible por scroll, start indica que al principio
                   }
                }



              const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
              slides.forEach((slide)=>{ //esta sirve para que por cada slide quiero que lo deje de observar

                        observer.unobserve(slide);   //el metodo unobserve me permite dejar de observar los slides           
                   });
    }, opciones);
    
     //FUNCION PARA OBTENER TODOS LOS SLIDES DEL CAROUSEL
     const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');//quiero que me obtenga de la galeria todos los slides, y a cada uno de ellos lo vamos a observar    
     slides.forEach((slide)=>{
                    //para obtenerlos usamos su clase


         observer.observe(slide);              //por cada slide quiero que me ejecutes la función, de aplicarle el observer      //ahora vamos a obtener las entradas/elementos que estamos vigilando
    });

};  //clickeo el boton siguiente del carousel, me observa el elemento con el forEach, y me ejecuta la función del observador de los slides para detectar cuales están visibles, PERO DESPUES DE ÉSTO QUIERO DEJAR DE OBSERVAR, por eso aplico otro forEach con el metodo unobserve

//Podriamos agregar un evento por cada botón, pero es más optimo hacer una propagación de eventos para agregar un evento solo a toda la galeria y luego detectar cuando le demos click sobre un botón
//Si doy click sobre la cruz, quiero detectar si es el botón de cerrar o si es otro botón



const galeria = document.getElementById('galeria');

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
  cargarAnteriorSiguiente('siguiente');
}

//ANTERIOR IMAGEN
if(boton?.dataset?.accion === 'anterior-imagen'){
   cargarAnteriorSiguiente('anterior');
}


//CARROUSEL IMAGEN
if(boton?.dataset?.accion === 'siguiente-slide'){
   carousel('adelante');
 }
 
 //CARROUSEL IMAGEN
 if(boton?.dataset?.accion === 'anterior-slide'){
   carousel('atras');
 }

});
