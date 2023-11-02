import axios from 'axios'

export const getEmpleadosRequest = () => axios.get(`/empleado`)
export const createEmpleadoRequest = (empleado) => axios.post(`/empleados`, empleado)
export const updateEmpleadoRequest = (empleado) => axios.put(`/empleados/${empleado._id}`, empleado)
export const deleteEmpleadoRequest = (id) => axios.delete(`/empleados/${id}`) 