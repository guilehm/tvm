import { API_URL, API_ACCESS_TOKEN } from "../../../settings"

export default async function handler(req, res) {
  const url = req.url.slice(9)
  try {
    const response = await fetch(`${API_URL}${url}`, {
      headers: {
        "ContentType": "application/json",
        "Authorization": `Bearer ${API_ACCESS_TOKEN} `
      },
    })
    const data = await response.json()
    return res.status(200).json({ data })
  } catch {
    return res.status(response.status)
  }
}
