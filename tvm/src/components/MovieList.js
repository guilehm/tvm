"use client"

import Link from "next/link"
import { useRef, useState } from "react"
import useSWR from "swr"
import { getImageUrl, getMovieDetailUrl } from "../helpers"
import { fetcher, makeUrl } from "../services/api-service"
import ImageContainer from "./commons/ImageContainer"

export default function MovieList() {
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)

  const url = makeUrl("search/movie", value, 1)
  const { data, error: reqError } = useSWR(value ? url : null, fetcher)
  if (!error && reqError) {
    setError(true)
  }
  const movieList = data?.results

  const timeout = useRef()
  const handleSearch = (e) => {
    setError(false)
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

      {error && (
        <div>Failed to load movies</div>
      )}

      {!error && movieList?.length &&
        (<ul>
          {movieList.map((movie) =>
            <li key={movie.id}>
              <section>
                <Link href={getMovieDetailUrl(movie.id, movie.original_title)}>
                  <h2>{movie.original_title}</h2>
                  {movie.poster_path &&
                    <ImageContainer
                      src={getImageUrl(movie.poster_path)}
                      alt={movie.original_title}
                      fill />}
                </Link>
              </section>
            </li>
          )}
        </ul>)}
    </>
  )
}
