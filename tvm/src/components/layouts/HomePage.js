"use client"

import Footer from "../Footer/Footer"
import MovieList from "../MovieList"

export default function HomePage() {
  return (
    <>
      <div>

        <main>
          <h1>Welcome to TVM</h1>
          <p>Movies and TV Shows</p>
          <MovieList />
        </main>

      </div>
      <Footer />
    </>
  )
}
