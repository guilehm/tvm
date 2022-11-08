import { API_URL, API_ACCESS_TOKEN, BASE_SITE_URL } from "../../settings"


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
  const response = await fetch(`${API_URL}${endpoint}?${params}`, {
    headers: {
      "ContentType": "application/json",
      "Authorization": `Bearer ${API_ACCESS_TOKEN} `
    },
  })
  return handleResponse(response)
}


export function getImageUrl(path) {
  return `${BASE_SITE_URL}t/p/w300${path}`
}
