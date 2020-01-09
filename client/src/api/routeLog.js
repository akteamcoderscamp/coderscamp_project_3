import {api} from './index'

export const getAllRouteLogs = () => api.get('/routeLogs')
export const deleteRouteLogById = id => api.delete(`/routeLogs/${id}`)
export const insertRouteLog = payload => api.post('/routeLogs', payload)
export const updateRouteLogById = (id, payload) => api.put(`/routeLogs/${id}`, payload)
export const getRouteLogById = id => api.get(`/routeLogs/${id}`)