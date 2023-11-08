import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'c12a7dd749c5fded98fdcb1e86e57f02'

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {
    static getMovies(){
        return axios(withBaseUrl("movie/popular"))
    }

    static getMoviesDetails(id){
        return axios(withBaseUrl(`movie/${id}`))
    }

    static searchMovies(movie){
        return axios(withBaseUrl("search/movie") + `&query=${movie}`)
    }
}
