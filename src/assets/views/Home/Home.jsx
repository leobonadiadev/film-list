import { useEffect, useState } from 'react'
import './index.scss'
import { MovieService } from "../../../api/MovieService.js"
import MovieCard from '../../components/MovieCard/MovieCard.jsx'

const Home = ({searchValueProp}) => {
    const [movies, setMovies] = useState([])

    async function getMovies() {
        const { data: { results } } = await MovieService.getMovies()        
        
        setMovies(results)
    }

    useEffect(() => {
        getMovies()
    }, [])

    useEffect(() => {
        console.log(searchValueProp)
    })


    async function getMoviesSeacrch(movieString) {
        const { data: { results } } = await MovieService.searchMovies(movieString)

        setMovies(results)
    }

    useEffect(() => {
        if (searchValueProp) {
            getMoviesSeacrch(searchValueProp)
        } if (searchValueProp === '') {
            getMovies()
        }
    }, [searchValueProp])

    return (
        <section className='Home'>
            {
                movies.map(movie => (
                    <div key={movie.id}>
                        <MovieCard movieProp={movie} />
                    </div>
                ))
            }
        </section>
    )
}

export default Home