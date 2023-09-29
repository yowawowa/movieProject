import './App.css'
import Movie from './components/Movie'
import NotFound from './components/NotFound'
import SpinnerItem from './components/Spinner'
import { useState, useEffect } from 'react'


function App() {
  const API_KEY = 'AT6RB72-1ZAMEV4-HQEEMGP-S4DWRPB' // not safe
  const API_URL_RANDOM = 'https://api.kinopoisk.dev/v1.3/movie/random'
  const API_URL_TOP = 'https://api.kinopoisk.dev/v1.3/movie?page=1&limit=10&top10=%21null'
  const API_URL_SEARCH = 'https://api.kinopoisk.dev/v1.2/movie/search?page=1&limit=5&query='


  const [movie, setMovie] = useState([])
  const [term, setTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    MovieFetch(API_URL_TOP)
  }, [])

  const onHandleTerm = (e) => {
    setTerm(e.target.value)
  }

  const MovieFetch = (API) => {
    fetch(API, {
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.docs.length !== 0) {
          setMovie(res.docs)
          setError(false)
        } else { setError(true) }
        setLoading(false)
      })
  }

  const onHandleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    MovieFetch(API_URL_SEARCH + term)
    setTerm('')
  }

  const onNotFound = () => {
    setLoading(true)
    MovieFetch(API_URL_TOP)
  }

  return (
    <>
      <header className='header'>
        <div className='header__content'>
          <a href='/' className='header__logo'>Cinema</a>
          <form action='submit' onSubmit={onHandleSearch}>
            <input className='header__search' type='text' placeholder='Search' value={term} onChange={onHandleTerm} />
          </form>
        </div>
      </header>
      <div className='container'>
        <div className='movies'>
          {error ? <NotFound onNotFound={onNotFound} /> :
            (loading ? <SpinnerItem /> : movie.map((elem) => <Movie key={elem.id} {...elem} />))
          }
        </div>
      </div>
    </>
  );
}

export default App;
