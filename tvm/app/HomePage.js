"use-client"

export default function HomePage({ movies }) {
  return (
    <div>
      <div>
        <main>
          <h1>Welcome to TVM</h1>

          <p>
            Movies and TV Shows
          </p>

        </main>
        {/* {movies.map((movie) => (
          <div key={movie.id}>{movie.title}</div>
        ))} */}
      </div>
    </div>

  )
}
