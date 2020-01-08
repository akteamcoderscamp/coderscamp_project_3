import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json'
    },
})

export const getAllRouteLogs = () => api.get('/routeLogs')
export const deleteRouteLogById = id => api.delete(`/routeLogs/${id}`)
export const insertRouteLog = payload => api.post('/routeLogs', payload)
export const updateRouteLogById = (id, payload) => api.put(`/routeLogs/${id}`, payload)
export const getRouteLogById = id => api.get(`/routeLogs/${id}`)

const routeApi = {
    getAllRouteLogs,
    deleteRouteLogById,
    insertRouteLog,
    updateRouteLogById,
    getRouteLogById,
}

export default routeApi
