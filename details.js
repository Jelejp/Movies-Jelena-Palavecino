//IMPORTACIONES.
import {findMovieById, generateImage, createMovieTable, createTitle, createTagline, createGenres, createOverview, createMovieTable2 } from './function.js';
//CAPTURAS DEL DOM.
let containerImage = document.getElementById("containerImage");
let movieTable = document.getElementById("moviesTable");
let containerTitle = document.getElementById("containerTitle");
let containerTagline = document.getElementById("containerTagline");
let containerGenres = document.getElementById("containerGenres");
let containerOverview = document.getElementById("containerOverview");
let movieTable2 = document.getElementById("moviesTable2");

//creo un nuevo objeto URLSearchParams para acceder a los parametros de la url
let url = new URLSearchParams (location.search)
// obtengo el valor del parametro id
//metodo .get devuelve el primer valor asociado
let id = url.get('id')


containerImage.innerHTML = generateImage(findMovieById(id))
movieTable.innerHTML = createMovieTable(findMovieById(id))
containerTitle.innerHTML = createTitle(findMovieById(id))
containerTagline.innerHTML = createTagline(findMovieById(id))
containerGenres.innerHTML = createGenres(findMovieById(id))
containerOverview.innerHTML = createOverview(findMovieById(id))
movieTable2.innerHTML = createMovieTable2(findMovieById(id))