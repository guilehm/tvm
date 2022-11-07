"use-server"

const API_URL = "https://api.themoviedb.org/3/"
const API_ACCESS_TOKEN = process.env.API_ACCESS_TOKEN

class ApiService {
  constructor(url = API_URL, token = API_ACCESS_TOKEN) {
    this.baseUrl = url
    this.token = token
  }

  async handleResponse(response) {
    if (response.status === 200) {
      const data = await response.json()
      return data.results
    }
    return []
  }

  async makeSearch(endpoint, query = "", page = 1) {
    const params = new URLSearchParams({ query, page })
    const response = await fetch(`${this.baseUrl}${endpoint}?${params}`, {
      headers: {
        "ContentType": "application/json",
        "Authorization": `Bearer ${this.token} `
      },
    })
    return this.handleResponse(response)
  }
}


export default new ApiService()
