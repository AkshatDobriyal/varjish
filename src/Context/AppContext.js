import React, {createContext, useContext, useEffect, useState} from "react";


const AppContext = createContext();

function useApp() {

    return useContext(AppContext)
}


function AppProvider({children}) {

    const[localStorageData,SetLocalStorageData] = useState(null)
    const[loggedInData,setLoggedInData] = useState(null)


    function addLocalStorageData(data) {

        window.localStorage.setItem("userLoggedInData", JSON.stringify(data))

        console.log(data,'context')
    }


    const value = {addLocalStorageData,setLoggedInData,loggedInData};
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}

export {AppProvider, useApp};