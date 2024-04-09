//IMPORTACIONES
import {createSelectOptions, generateCardsMovies, filterByGenres, filterBySearch } from './function.js';

//CAPTURAS DEL DOM
let contenedorMovies = document.getElementById("contenedorMovies");
contenedorMovies.className = "flex flex-wrap gap-10 justify-center pt-5 "
 let filterOfGenres = document.getElementById("filterOfGenres");
 let  search = document.getElementById("search");

//VARIABLES
//Combino todos los generos en un solo arreglo
let allGenres = movies.reduce((a, movie) => a.concat(movie.genres), []); 
//Creo un Set para eliminar los duplicados y convierto el Set en un arreglo
let uniqueGenres = Array.from(new Set(allGenres));
console.log(uniqueGenres);
//declaro variable con string vacios
let optionSelected = ""
let nameInput = ""

//LLAMADO A FUNCIONES
createSelectOptions(uniqueGenres, filterOfGenres); //crea y añade las opciones de genero al select.
generateCardsMovies(movies) //genera y muestra las cards.

//EVENT LISTENER
//escucha mi select mediante el change (cuando el usuario confirma algo)
filterOfGenres.addEventListener("change", e =>{
    optionSelected = e.target.value     
    contenedorMovies.innerHTML= generateCardsMovies(filterBySearch(filterByGenres(movies, optionSelected),nameInput) )
    })
//escucha mi busqueda mediante el keyup(cuando el usuario suelta la tecla)
search.addEventListener("keyup", e =>{
    nameInput = e.target.value
    contenedorMovies.innerHTML = generateCardsMovies(filterBySearch(filterByGenres(movies, optionSelected), nameInput))      
    })