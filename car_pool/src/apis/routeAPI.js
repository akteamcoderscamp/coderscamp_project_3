import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json'
    },
})

export const getAllRoutes = () => api.get('/routes')
export const deleteRouteById = id => api.delete(`/routes/${id}`)
export const insertRoute = payload => api.post('/routes', payload)
export const updateRouteById = (id, payload) => api.put(`/routes/${id}`, payload)
export const getRouteById = id => api.get(`/routes/${id}`)

const routeApi = {
    getAllRoutes,
    deleteRouteById,
    insertRoute,
    updateRouteById,
    getRouteById,
}

export default routeApi
