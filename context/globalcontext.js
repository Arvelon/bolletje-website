import React, { useState, useEffect } from 'react'

export const GlobalContext = React.createContext({})

function GlobalContextFunction({ children }) {

    const [data, setData] = useState({
        menuState: { menu: false }
    });

    useEffect(() => console.log(data), [data])

    return <GlobalContext.Provider value={{ data, setData }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContextFunction