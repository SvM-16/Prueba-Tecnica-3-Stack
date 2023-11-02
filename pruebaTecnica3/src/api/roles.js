import axios from './axios.js'

export const getRolesRequest = () => axios.get(`/roles`)