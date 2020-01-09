import axios from 'axios'
import {getAllVehicles, deleteVehicleById, insertVehicle, updateVehicleById, getVehicleById} from './vehicle'
import {getAllRoutes, deleteRouteById, insertRoute, updateRouteById, getRouteById} from './route'
import {getAllUsers, deleteUserById, insertUser, updateUserById, getUserById, getUserEmails} from './user'
import {getAllRouteLogs, deleteRouteLogById, insertRouteLog, updateRouteLogById, getRouteLogById} from './routeLog'

export const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('key-jwt')
    },
})

const apis = {
    getAllVehicles,
    deleteVehicleById,
    insertVehicle,
    updateVehicleById,
    getVehicleById,
    getAllUsers,
    deleteUserById, 
    insertUser,
    updateUserById,
    getUserById,
    getUserEmails,
    getAllRoutes,
    deleteRouteById,
    insertRoute,
    updateRouteById,
    getRouteById,
    getAllRouteLogs,
    deleteRouteLogById,
    insertRouteLog,
    updateRouteLogById,
    getRouteLogById,
}

export default apis