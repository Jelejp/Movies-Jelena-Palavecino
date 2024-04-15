//IMPORTACIONES
import { renderFavoriteMovies } from "./function.js"

//CAPTURA DEL DOM
let favoriteContainer = document.getElementById("favorite-container");

//VARIABLES
let arrayFavorites = []
let lSArray = JSON.parse(localStorage.getItem('Favorites'))
if(lSArray){
    arrayFavorites = lSArray
}
//Lógica para renderizar películas favoritas
fetch('https://moviestack.onrender.com/api/movies', {
    headers: {
        'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
})
.then(res => res.json())
.then(data => {
     let movies = data.movies;
     renderFavoriteMovies(movies, favoriteContainer, arrayFavorites);
     favoriteContainer.addEventListener('click', e => {
        let datasetMovieId = e.target.dataset.movieId
        if (datasetMovieId) {
            console.log('es un boton')
            console.log(datasetMovieId)
            if (!arrayFavorites.includes(datasetMovieId)) {
                arrayFavorites.push(datasetMovieId)

            } else {
                arrayFavorites = arrayFavorites.filter(id => id != datasetMovieId)
            }
            localStorage.setItem('Favorites', JSON.stringify(arrayFavorites))
        }
    })
    
})