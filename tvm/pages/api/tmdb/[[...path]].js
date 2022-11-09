import { API_URL, API_ACCESS_TOKEN } from "../../../settings"

export default async function handler(req, res) {
  const response = await fetch(`${API_URL}${req.url.slice(9)}`, {
    headers: {
      "ContentType": "application/json",
      "Authorization": `Bearer ${API_ACCESS_TOKEN} `
    },
  })
  if (response.status !== 200) return res.status(response.status).end(response.statusText)
  const data = await response.json()
  return res.status(response.status).json(data)
}
