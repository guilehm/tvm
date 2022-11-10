import { API_URL, API_ACCESS_TOKEN } from "../../../../settings"
import MovieDetail from "../../../../src/components/layouts/MovieDetail"
import { makeRequest } from "../../../../src/services/api-service"


async function getMovie(id) {
  const response = await makeRequest(`${API_URL}movie/${id}`)
  return response.json()
}


export default async function MovieDetailPage({ params }) {
  const data = await getMovie(params.id)
  return <MovieDetail data={data} />
}
