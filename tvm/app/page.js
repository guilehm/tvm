import HomePage from "./HomePage"

async function getMovies() {
  // const response = await fetch("")
  // const movies = await response.json()
  // return movies
  return []
}

export default async function Home() {
  const movies = await getMovies()
  return <HomePage movies={movies} />
}

