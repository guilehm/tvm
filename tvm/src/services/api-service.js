import { BASE_PROXY_URL, API_ACCESS_TOKEN } from "../../settings"

export async function fetcher(url) {
  const response = await fetch(`${BASE_PROXY_URL}${url}`)
  const res = await response.json()
  return res
}

export function makeUrl(endpoint, query = "", page = 1) {
  const params = new URLSearchParams({ query, page })
  return `${endpoint}?${params}`
}

export async function makeRequest(url) {
  return await fetch(url, {
    headers: {
      "ContentType": "application/json",
      "Authorization": `Bearer ${API_ACCESS_TOKEN}`,
    },
    next: { revalidate: 60 },
  })
}
