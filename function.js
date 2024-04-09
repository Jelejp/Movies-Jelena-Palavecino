//FUNCIONES DE MOVIES.
//Creo un funcion que me itera sobre genres y por cada iteracion me crea un elemento option
//funcion para crear las opciones de generos.
export let createSelectOptions = (genresArray, filterElement ) => {
    genresArray.forEach(genres => {
        let option = document.createElement("option");
        option.value = genres;
        option.text = genres;
        filterElement.appendChild(option);
    });
    }
//Creo una funcion para crear la estructura de las cards con string
export let createCardMovies = movie => 
`<div class= " flex flex-col  w-72  p-1 shadow-lg rounded-xl bg-[#8b5cf6] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 hover:bg-[#9c75f5] duration-300" >
<img class = "h-[135px] object-cover  rounded-t-lg" src = ${movie.image} alt=${movie.title}>
<div class= "p-1 flex flex-col h-[70%]" > 
<h2 class = "text-center font-bold"> ${movie.title} </h2>
<p class = "pt-2 text-center" >${movie.tagline} </p>
<p id="overview" class = "pt-2 text-center flex-1" >${movie.overview} </p>
<a class = "p-2 mt-5 self-center  rounded text-white  hover:bg-[#8b5cf6] duration-300 sm:bg-[#8b5cf6]" href="./details.html?id=${movie.id}">Ver más</a>
</div>
</div>`

//Creo una funcion para subir las cards
//la funcion itera sobre movies y me añade cada iteracion con una card 
export let subirCardsMovies = movies =>{
    let template = ""
        for (let movie of movies) {
        template += createCardMovies(movie)
        }
        return template;
        }

//Creo una funcion para subir a mi contenedor segun corresponda el caso
export let generateCardsMovies = array => array.length === 0 ? contenedorMovies.innerHTML ="<h2 class= 'text-white text-center'>No results found</h2>": contenedorMovies.innerHTML = subirCardsMovies(array)
 //creo funcion para filtrar por genero
export let filterByGenres = (array , optionSelected) => optionSelected === "" ? array  : array.filter(movie => movie.genres.includes(optionSelected))
//creo funcion para filtrar por busqueda
export let filterBySearch = (array, nameInput) => array.filter(movie => movie.title.toLowerCase().includes(nameInput.trim().toLowerCase()))

//FUNCIONES DE DETAILS.
//creo una funcion que me busca una pelicula por su id
export let findMovieById = movieId => movies.find(movie => movie.id === movieId);
//creo una funcion que me devuelve una cadena de texto del elemento img
export let generateImage = movie => 
`<img class = "h-[200px] pt-5 " src = ${movie.image} alt=${movie.title}>`
//creo una funcion que me devuelve una cadena de texto del elemento table
export let createMovieTable = movie =>
    `<table class="border-collapse flex justify-center pt-2 md:mt-32">
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
//creo una funcion que me devuelve una cadena de texto del elemento h1 para el title
export let createTitle = movie => 
    `<h1 class="text-2xl font-bold text-white pt-5 text-center">${movie.title}</h1>`
//creo una funcion que me devuelve una cadena de texto del elemento p para el eslogan
export let createTagline = movie => 
    `<p class="text-white text-lg font-bold pl-5 pt-2">${movie.tagline}</p>`
//creo una funcion que me devuelve una cadena de texto del elemento p para el genres
export let createGenres = movie => 
    `<p class="text-[#8b5cf6] font-bold pl-5 pt-2">${movie.genres}</p>`
 //creo una funcion que me devuelve una cadena de texto del elemento p para la descripcion
export let createOverview = movie => 
    `<p class="text-white p-5 pt-2">${movie.overview}</p>`
//creo una funcion que me devuelve una cadena de texto del elemento table
export let createMovieTable2 = movie => 
`<table class="border-collapse flex justify-center pt-2 md:mt-2">
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