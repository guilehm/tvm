import HomePage from "./HomePage"
import ApiService from "../src/services/api-service"

async function getMovies() {
  try {
    // TODO: make query and page dynamic
    return await ApiService.makeSearch("search/movie", "ring", 1)
  } catch (err) {
    return []
  }
}

export default async function Home() {
  const movies = await getMovies()
  return <HomePage movies={movies} />
}
