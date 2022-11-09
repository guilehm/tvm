import axios from "axios"

import { BASE_PROXY_URL, BASE_SITE_URL } from "../../settings"


const client = axios.create({ baseURL: BASE_PROXY_URL })

export async function fetcher(...args) {
  const response = await client.get(...args)
  return response.data.results
}

export function makeUrl(endpoint, query = "", page = 1) {
  const params = new URLSearchParams({ query, page })
  return `${endpoint}?${params}`
}

export function getImageUrl(path) {
  return `${BASE_SITE_URL}t/p/w300${path}`
}
