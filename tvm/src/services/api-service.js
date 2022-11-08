import { BASE_SITE_URL } from "../../settings"


export async function handleResponse(response) {
  if (response.status === 200) {
    const data = await response.json()
    return data.results
  }
  return []
}


// TODO: add cache
export async function makeSearch(endpoint, query = "", page = 1) {
  const params = new URLSearchParams({ query, page })
  const response = await fetch(`/api/tmdb/${endpoint}?${params}`)
  return handleResponse(response)
}


export function getImageUrl(path) {
  return `${BASE_SITE_URL}t/p/w300${path}`
}
