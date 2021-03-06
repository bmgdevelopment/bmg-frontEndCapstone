import React, { createContext, useState } from "react"

const apiURL = "http://localhost:7001"
export const RegionContext = createContext()

export const RegionProvider = (props) => {
const  [ regions, setRegions ] = useState([])

const getRegions = () => {
    return fetch(`${apiURL}/regions`)
    .then(res => res.json())
    .then(setRegions)
}

return (
    <RegionContext.Provider value={
        { regions, getRegions }
    }>
        { props.children }
    </RegionContext.Provider>
)

} // end of Region Provider