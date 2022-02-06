const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=ea27c41cbd532d19174d71429927e158&language=en-US&sort_by=popularity.desc&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=ea27c41cbd532d19174d71429927e158&query="'

const main = document.querySelector('.main')
const form = document.getElementById('form')
const search = document.getElementById('search')


getMovies(API_URL)
async function getMovies(url) {
	const res = await fetch(url)
	const data = await res.json()

	showMovies(data.results)
}

function showMovies(movies) {
	main.innerHTML = ''

	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie

		const movieEl = document.createElement('div')
		movieEl.classList.add('movie')
		movieEl. innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
    <h4>Overview</h4>
    ${overview}
    </div>
    </div>`
		main.appendChild(movieEl)
	})

}

function getClassByRate(vote) {
	if (vote >= 8 ) {
		return 'green'
	} else if (vote >= 5) {
		return 'orange'
	} else {
		return 'red'
	}
}

form.addEventListener('submit', (ev => {
	ev.preventDefault()

	const searchTerm = search.value

	if(searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm)
		search.value = ''
	} else {
		window.location.reload()
	}
}))
