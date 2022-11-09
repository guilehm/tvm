"use client"

import { useRef, useState } from "react"
import useSWR from "swr"
import { fetcher, getImageUrl, makeUrl } from "../services/api-service"
import ImageContainer from "./commons/ImageContainer"


export default function MovieList() {
  const [value, setValue] = useState("")
  const url = makeUrl("search/movie", value, 1)
  // TODO: handle error
  const { data: movieList } = useSWR(value ? url : null, fetcher)

  const timeout = useRef()
  const handleSearch = (e) => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setValue(e.target.value)
    }, 600)
  }

  return (
    <>
      <label htmlFor="movie-search">Search the movie:</label>
      <input
        type="search"
        id="movie-search"
        name="movie-search"
        onChange={handleSearch} />

      {movieList?.length &&
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
