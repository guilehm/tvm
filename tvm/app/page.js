import { makeSearch } from "../src/services/api-service"
import HomePage from "../src/components/layouts/HomePage"


async function getMovies() {
  try {
    // TODO: make query and page dynamic
    return await makeSearch("search/movie", "ring", 1)
  } catch (err) {
    return []
  }
}

export default async function Home() {
  const movies = await getMovies()
  return <HomePage movies={movies} />
}
