//IMPORTACIONES
import { getGenres, createSelectOptions, renderMovies, crossFilters } from "./function.js"

//CAPTURAS DEL DOM
let ctn = document.getElementById("ctn")
let filterOfGenres = document.getElementById("filterOfGenres")
let ctnSearch = document.getElementById("ctn-search")

//VARIABLES
let optionSelected = ""
let nameInput = ""
let arrayFavorites = []
let lSArray = JSON.parse(localStorage.getItem('Favorites'))
if (lSArray) {
    arrayFavorites = lSArray
}

//API
fetch('https://moviestack.onrender.com/api/movies', {
    headers: {
        'x-api-key': '0ff70d54-dc0b-4262-9c3d-776cb0f34dbd'
    }
})
    .then(res => res.json())
    .then(data => {
        let movies = data.movies
        console.log(movies)
        renderMovies(movies, ctn, arrayFavorites)

        let uniqueGenres = getGenres(movies)
        createSelectOptions(uniqueGenres, filterOfGenres)

        ctnSearch.addEventListener('keyup', e => {
            nameInput = e.target.value
            console.log(nameInput)
            let filterSearch = crossFilters(movies, nameInput, optionSelected)
            renderMovies(filterSearch, ctn, arrayFavorites)
            console.log(filterSearch)
        })

        filterOfGenres.addEventListener('change', e => {
            optionSelected = e.target.value
            console.log(optionSelected)
            let filterGenres = crossFilters(movies, nameInput, optionSelected)
            renderMovies(filterGenres, ctn, arrayFavorites)
            console.log(filterGenres)
        })

        ctn.addEventListener('click', e => {
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

            console.log(arrayFavorites)
            renderMovies(movies, ctn, arrayFavorites)
        })

    })