import {api} from './index'

export const getAllRoutes = () => api.get('/routes')
export const deleteRouteById = id => api.delete(`/routes/${id}`)
export const insertRoute = payload => api.post('/routes', payload)
export const updateRouteById = (id, payload) => api.put(`/routes/${id}`, payload)
export const getRouteById = id => api.get(`/routes/${id}`)