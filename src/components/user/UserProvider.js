import React, { createContext, useState } from "react"
import "./User.css"

const apiURL = "http://localhost:7001"
export const UserContext = createContext()


export const UserProvider = (props) => {
    const [ users, setUsers ] = useState([])

    const getUsers = () => {
        return fetch(`${apiURL}/users?_expand=region`)
        .then(res => res.json())
        .then(setUsers)
    }

    const updateUser = (user) => {
        return fetch((`${apiURL}/user/${user.id}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(getUsers)
    }
    
    return (
        <UserContext.Provider value={
            { users, getUsers, updateUser }
        }>
            {props.children}
        </UserContext.Provider>
    )

} // end of UserProvider