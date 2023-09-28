import './App.css'
import Movie from './components/Movie'
import { useState, useEffect } from 'react'

function App() {
  const API_KEY = 'AT6RB72-1ZAMEV4-HQEEMGP-S4DWRPB'
  const API_URL_RANDOM = 'https://api.kinopoisk.dev/v1.3/movie/random'
  const API_URL_TOP = 'https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&top10=%21null'
  const API_URL_SEARCH = 'https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=10&query=inception'


  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(API_URL_TOP, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      }
    })
      .then(res => res.json())
      .then(res => setMovie(res.docs))
  }, [])

  return (
    <>
      <header className='header'>
        <div className='header__content'>
          <a href='/' className='header__logo'>Cinema</a>
          <input className='header__search' type='text' placeholder='Search' />
        </div>
      </header>

      <div className='container'>
        <div className='movies'>
          {movie.map((elem) => <Movie key={elem.id} {...elem} />)}
        </div>
      </div>
    </>
  );
}

export default App;
