import { useEffect, useState } from 'react'
import './index.scss'
import { Link, useParams } from 'react-router-dom'
import { MovieService } from '../../../api/MovieService'

const MovieDetail = (searchValueProp) => {
  const [movie, setMovie] = useState([])
  const { id } = useParams()

  
  async function getMovie() {
    const { data } = await MovieService.getMoviesDetails(id)
    setMovie(data)
  }

  useEffect(() => {
    getMovie()
  }, [])

   

  return (
    <section className='moviedetail'>
        <img  src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title}/>
        <div>
          <h1>{movie.title}</h1>        
          <h4>{movie.overview}</h4>
          <button><Link to={'/'}>Voltar</Link></button>
        </div>
      
    </section>
  )
}

export default MovieDetail