import axios from 'axios'

export async function getRoutesFromApi(from, to) {
    const baseURL = "/booking"
    let incoming = await axios.post(baseURL, { from, to })
    return incoming
}