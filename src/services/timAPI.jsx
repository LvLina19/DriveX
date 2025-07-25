import axios from 'axios'

const API_URL = "https://smdpmxflyphhvjjatrls.supabase.co/rest/v1/products"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtZHBteGZseXBoaHZqamF0cmxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzNTY5NTMsImV4cCI6MjA2NjkzMjk1M30.1YWbYCSy3Yfx_gZ0h4ConwgeTCqeENMTLV-WVGW8_Ao"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const timAPI = {
    async fetchTims() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createTim(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },
    async deleteTim(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },
    async updateTim(id, data) {
        const response = await axios.patch(`${API_URL}?id=eq.${id}`, data, { headers })
        return response.data
    }
}