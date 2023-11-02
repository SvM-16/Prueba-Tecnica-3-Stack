import { createContext, useContext, useState } from "react";

import { getAreasRequest } from "../api/areas";

const AreasContext = createContext();

export const useAreas = () => {
    const context = useContext(AreasContext);
    if(!context){
        throw new Error('useAreas must be used within a AreasProvider')
    
    }
    return context;

}

export function AreasProvider({ children }){
    const [areas, setAreas] = useState([]);

    const getAreas = async () => {
        try {
            const res = await getAreasRequest();
            const areasId = res.data.map((area) => ({ id: area.id, nombre: area.nombre }))
            setAreas(areasId)
            console.log(res)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AreasContext.Provider value={{
            areas,
            getAreas
        }}>
            {children}
        </AreasContext.Provider>
    )

}