//FUNCIONES DE MOVIES.
//funcion para obtener los generos
export function getGenres (movies){
    let allGenres = movies.reduce((a, movie) => a.concat(movie.genres), []); 
 let uniqueGenres = Array.from(new Set(allGenres));
 return uniqueGenres ;
}
//funcion para crear las opciones del select
export function createSelectOptions (arrayGenres, container ) {
arrayGenres.forEach(genres => {
    let option = document.createElement("option");
    option.value = genres;
    option.text = genres;
    container.appendChild(option);
});
}
//funcion para crear la estructura de las cards con string
export function renderMovies( array, container, favoriteIds){
    container.innerHTML = ''
    let template = ''
    array.forEach(movie => {

        template += `
    <div class= " flex flex-col  w-72  p-1 shadow-lg rounded-xl bg-[#8b5cf6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 hover:bg-[#9c75f5] duration-300 relative" >
        <img class = "h-[135px] object-cover  rounded-t-lg" src="https://moviestack.onrender.com/static/${movie.image}" alt="${movie.title}">
       
<div class= "p-1 flex flex-col h-[70%]" > 
<h2 class = "text-center font-bold"> ${movie.title} </h2>
<p class = "pt-2 text-center" >${movie.tagline} </p>
<p id="overview" class = "pt-2 text-center flex-1" >${movie.overview} </p>
<a class = "p-2 mt-5 self-center  rounded text-white  hover:bg-[#8b5cf6] duration-300 sm:bg-[#8b5cf6]" href="./details.html?id=${movie.id}">See more</a>
</div>
         ${!favoriteIds.includes(movie.id) ?
        `
         <button class = "absolute -top-4 -right-4" data-movie-id = "${movie.id}" >
    <img src="./Assets/icons8-heart-32 vacio.png" alt="Add to favorites" data-movie-id = "${movie.id}">
</button>`
        :
        `
        <button class = "absolute -top-4 -right-4" data-movie-id = "${movie.id}">
    <img src="./Assets/icons8-heart-32.png" alt="Added to favourites" data-movie-id = "${movie.id}">
</button> `
        }
     </div>`


    });
     array.length === 0 ? ctn.innerHTML = "<h2 class='text-white text-center'>No results found</h2>" : container.innerHTML = template
}
//funcion para filtrar por titulo
export function filterBySearch (array, nameInput){
    let filtered = array.filter(movie => movie.title.toLowerCase().includes(nameInput.trim().toLowerCase()))
return filtered
}
//funcion para filtrar por genero
export function filterByGenres (array, optionSelected){
    let filtered = optionSelected === '' ? array : array.filter(movie =>
    movie.genres.includes(optionSelected))
    return filtered
}
//funcion para filtrar cruzado
export let crossFilters = (array, nameInput, optionSelected) => {
    let filterSearch = filterBySearch(array, nameInput)
    let filtersBySearchAndGenres = filterByGenres(filterSearch, optionSelected)
    return filtersBySearchAndGenres
}

//FUNCIONES DE FAVORITOS.
// Función para renderizar las películas favoritas en la página de favoritos
export let renderFavoriteMovies = (movies, container, favoriteIds) => {
    container.innerHTML = '';
    let favoriteMovies = movies.filter(movie => favoriteIds.includes(movie.id));
    renderMovies(favoriteMovies, container, favoriteIds);
}

//FUNCIONES DE DETAILS.
//funcion que me devuelve una cadena de texto del elemento img
export let generateImage = movie => 
`<img class = "h-[200px] " src="https://moviestack.onrender.com/static/${movie.image}" alt=${movie.title}>`
//funcion que me devuelve una cadena de texto del elemento table
export let createMovieTable = movie =>
    `<table class="border-collapse flex justify-center pt-2 md:mt-3">
        <thead class="bg-gray-800 divide-y divide-gray-700">
                <tr>
                <th class="border px-4 py-2 text-white">Original Language</th>
                </tr>
                <tr>
                <th class="border px-4 py-2 text-white">Release Date</th>
                </tr>
                <tr>
                <th class="border px-4 py-2 text-white">Runtime</th>
                </tr>
                <tr>
                <th class="border px-4 py-2 text-white">Status</th>
                </tr>
        </thead>
        <tbody class="bg-gray-800 divide-y divide-gray-700 ">
                <tr>
                <td class="border px-4 py-2 text-white">${movie.original_language}</td>
                </tr>
                <tr>
                <td class="border px-4 py-2 text-white ">${movie.release_date}</td>
                </tr>
                <tr>
                <td class="border px-4 py-2 text-white">${movie.runtime}</td>
                </tr>
                <tr>
                <td class="border px-4 py-2 text-white">${movie.status}</td>
                </tr>
        </tbody>
    </table>`
//funcion que me devuelve una cadena de texto del elemento h1 para el title
export let createTitle = movie => 
    `<h1 class="text-2xl font-bold text-white pt-2 text-center">${movie.title}</h1>`
//funcion que me devuelve una cadena de texto del elemento p para el eslogan
export let createTagline = movie => 
    `<p class="text-white text-lg font-bold pl-5 pt-2">${movie.tagline}</p>`
//funcion que me devuelve una cadena de texto del elemento p para el genres
export let createGenres = movie => 
    `<p class="text-[#8b5cf6] font-bold pl-5 pt-2">${movie.genres}</p>`
 //funcion que me devuelve una cadena de texto del elemento p para la descripcion
export let createOverview = movie => 
    `<p class="text-white p-5 pt-2">${movie.overview}</p>`
//funcion que me devuelve una cadena de texto del elemento table
export let createMovieTable2 = movie => 
`<table class="border-collapse flex justify-center pt-2 lg:-mt-[87.5px]">
    <thead class="bg-gray-800 divide-y divide-gray-700">
            <tr>
            <th class="border px-4 py-2 text-white">Vote Average</th>
            </tr>
            <tr>
            <th class="border px-4 py-2 text-white">Budget</th>
            </tr>
            <tr>
            <th class="border px-4 py-2 text-white">Revenue</th>
            </tr>
    </thead>
    <tbody class="bg-gray-800 divide-y divide-gray-700 ">
            <tr>
            <td class="border px-4 py-2 text-white">${movie.vote_average}</td>
            </tr>
            <tr>
            <td class="border px-4 py-2 text-white">${movie.budget}</td>
            </tr>
            <tr>
            <td class="border px-4 py-2 text-white">${movie.revenue}</td>
            </tr>
    </tbody>`