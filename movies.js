let contenedor = document.getElementById("contenedor");
contenedor.className = "flex flex-wrap gap-10 justify-center pt-5 "
let CreateCardsMovies = movie => 
     `<div class= " flex flex-col  w-72  p-1 shadow-lg rounded-xl bg-[#5723c0b8] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-100 hover:bg-[#8b5cf6] duration-300" >
        <img class = "h-[135px] object-cover brightness-50 rounded-t-lg" src = ${movie.image} alt=${movie.title}>
        <div class= "p-1" > 
        <h2 class = "text-center font-bold"> ${movie.title} </h2>
        <p class = "pt-2 text-center" >${movie.tagline} </p>
        <p class = "pt-2 text-center" >${movie.overview} </p>
        </div>
    </div>
    `

let generateLettersMovies = movies =>{
    let arrayMovies = []
    for (let movie of movies) {
        arrayMovies.push(movie)
    }
    for (let i of arrayMovies) {
        contenedor.innerHTML += CreateCardsMovies(i)
    }
}
generateLettersMovies(movies)

