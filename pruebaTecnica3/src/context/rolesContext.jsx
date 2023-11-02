import { createContext, useContext, useState } from "react";

import { getRolesRequest } from "../api/roles";

const RolesContext = createContext();

export const useRoles = () => {
    const context = useContext(RolesContext);
    if(!context) {
        throw new Error ('useRoles must be used within a RolesProvider')
    }
    return context;
}

export function RolesProvider({ children }) {
    const [roles, setRoles] = useState([]);

    const getRoles = async () => {
        try {
            const res = await getRolesRequest();
            setRoles(res.data);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <RolesContext.Provider value={{
            roles,
            getRoles
        }}>
            {children}
        </RolesContext.Provider>
    )
}