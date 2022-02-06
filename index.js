const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=ea27c41cbd532d19174d71429927e158&language=en-US&sort_by=popularity.desc&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=ea27c41cbd532d19174d71429927e158&query="'

const form = document.getElementById('form')
getMovies(API_URL)
async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()
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
