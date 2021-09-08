import React, { createContext, useState } from "react";

const apiURL = "http://localhost:7001"
export const SaveContext = createContext()

export const SaveProvider = (props) => {
    const [saves, setSaves] = useState([])

    const getSaves = () => {
        return fetch(`${apiURL}/saves?_expand=user&_expand=item`)
            .then(res => res.json())
            .then(setSaves)
    }

    const deleteSave = (saveId) => {
        return fetch((`${apiURL}/saves/${saveId}`), {
            method: "DELETE",
        })
            .then(getSaves)
    }

    return (
        <SaveContext.Provider value={
            { saves, getSaves, deleteSave }
        }>
            {props.children}
        </SaveContext.Provider>
    )

} // end of SaveProvider