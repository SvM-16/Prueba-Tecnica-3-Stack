import axios from './axios.js'

export const getEmpleadosRequest = () => axios.get(`/empleado`)
export const createEmpleado = (empleado) => axios.post('/empleados',empleado);
export const updateEmpleadoRequest = (empleado) => axios.put(`/empleados/${empleado._id}`, empleado)
export const deleteEmpleadoRequest = (id) => axios.delete(`/empleados/${id}`) 