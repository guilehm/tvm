"use client"

import { useState, useRef } from "react"
import { makeSearch, getImageUrl } from "../services/api-service"
import ImageContainer from "./commons/ImageContainer"


export default function MovieList() {
  const [value, setValue] = useState("")
  const [movieList, setMovieList] = useState([])

  const timeout = useRef()

  const handleSearch = (e) => {
    setValue(e.target.value)
    clearTimeout(timeout.current)
    timeout.current = setTimeout(async () => {
      const data = await makeSearch("search/movie", value, 1)
      setMovieList(data.results)
    }, 600)
  }


  return (
    <>
      <label htmlFor="movie-search">Search the movie:</label>
      <input
        type="search"
        value={value}
        id="movie-search"
        name="movie-search"
        onChange={handleSearch} />

      {movieList.length > 0 &&
        (<ul>
          {movieList.map((movie) =>
            <li key={movie.id}>
              <section>
                <h2>{movie.original_title}</h2>
                {movie.poster_path &&
                  <ImageContainer
                    src={getImageUrl(movie.poster_path)}
                    alt={movie.original_title}
                    fill />}
              </section>
            </li>
          )}
        </ul>)}

    </>
  )
}
