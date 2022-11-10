import axios from "axios"

import { BASE_PROXY_URL, API_ACCESS_TOKEN } from "../../settings"


const client = axios.create({ baseURL: BASE_PROXY_URL })

export async function fetcher(...args) {
  const response = await client.get(...args)
  return response.data.results
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
