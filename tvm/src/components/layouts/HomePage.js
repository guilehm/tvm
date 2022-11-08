"use client"

import MovieList from "../MovieList"


export default function HomePage({ movies }) {
  return (
    <div>

      <main>
        <h1>Welcome to TVM</h1>
        <p>Movies and TV Shows</p>
        <MovieList movies={movies} />
      </main>

    </div>
  )
}
