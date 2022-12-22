import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthContextProvider =({children})=>{
    const [user, SetUser]  = useState(false);

    const value = {user, SetUser};
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}