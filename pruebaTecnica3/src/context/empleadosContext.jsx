import { createContext, useContext, useState } from "react"

import { getEmpleadosRequest, createEmpleadoRequest, updateEmpleadoRequest, deleteEmpleadoRequest } from "../api/empleados.js"

const EmpleadoContext = createContext();

export const useEmpleados = () => {
    const context = useContext(EmpleadoContext);
    if(!context) {
        throw new Error('useEmpleados must be used within a EmpleadosProvider')
    }
    return context;
}

export function EmpleadosProvider({ children }){
    const [empleados, setEmpleados] = useState([]);

    const getEmpleados = async () => {
        try {
            const res = await getEmpleadosRequest();
            setEmpleados(res.data);
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    }

    const createEmpleados = async (nuevoEmpleados) => {
        try {
            const res = await createEmpleadoRequest(nuevoEmpleados);
            setEmpleados([...empleados,res.data])
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    }

    const updateEmpleado = async (empleadosId, updateData) => {
        try {
            const res = await updateEmpleadoRequest(empleadosId, updateData);
            setEmpleados(empleados.map(empleado => (empleado._id === empleadosId ? res.data : empleado)));
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    }

    const deleteEmpleado = async (empleadosId) => {
        try {
            const res = await deleteEmpleadoRequest(empleadosId);
            setEmpleados(empleados.filter(empleado => empleado.id !== empleadosId))
            console.log(res)

        } catch (error) {
            console.log
        }
    }

    return (
        <EmpleadoContext.Provider value={{
            empleados,
            getEmpleados,
            createEmpleados,
            updateEmpleado,
            deleteEmpleado
        }}>
            {children}
        </EmpleadoContext.Provider>
    )



}