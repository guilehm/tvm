import { API_URL, API_ACCESS_TOKEN } from "../../../settings"
import { makeRequest } from "../../../src/services/api-service"

export default async function handler(req, res) {
  const response = await makeRequest(`${API_URL}${req.url.slice(9)}`)
  if (response.status !== 200) return res.status(response.status).end(response.statusText)
  const data = await response.json()
  return res.status(response.status).json(data)
}
