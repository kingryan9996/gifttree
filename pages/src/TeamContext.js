import { createContext } from "react";
export const TeamC = createContext(null)

const TeamContext = ({ children }) => {

    let abc = 1900;

    return (<TeamC.Provider value={{ abc }}>
        {children}
    </TeamC.Provider>)
}

export default TeamContext