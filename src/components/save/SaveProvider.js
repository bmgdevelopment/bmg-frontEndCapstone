import React, { createContext, useState } from "react";

const apiURL = "http://localhost:7001"
export const SaveContext = createContext()

export const SaveProvider = (props) => {
    const [saves, setSaves] = useState([])
    const [userSaves, setUserSaves] = useState([])
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))

    const getSaves = () => {
        return fetch(`${apiURL}/saves?_expand=user&_expand=item`)
            .then(res => res.json())
            .then(setSaves)
    }

    const getSavesByUserId = (userId) => {
        return fetch(`${apiURL}/saves?_expand=user&_expand=item`)
            .then(res => res.json())
            .then(savesArr => {
                return savesArr.filter(save => save.userId === userId)
            })
            .then(setUserSaves) 
    }

    const deleteSave = (saveId) => {
        return fetch((`${apiURL}/saves/${saveId}`), {
            method: "DELETE",
        })
            .then(getSaves)
            .then(getSavesByUserId(currentLoggedInUserId))
    }

    const saveItem = (save) => {
        return fetch(`${apiURL}/saves`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(save)
        })
        .then(getSaves)
        .then(getSavesByUserId(currentLoggedInUserId))
    }

    return (
        <SaveContext.Provider value={
            { saves, getSaves, userSaves, getSavesByUserId, saveItem, deleteSave }
        }>
            {props.children}
        </SaveContext.Provider>
    )

} // end of SaveProvider