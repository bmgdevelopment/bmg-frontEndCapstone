import React, { createContext, useState } from "react"
import "./User.css"

const apiURL = "http://localhost:7000"
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
/*
MAY NOT DELETE USERS
    const deleteUser = (userId) => {
        return fetch((`${apiURL}/users/${userId}`), {
            method: "DELETE"
        })
        .then(getUsers)
    }
*/
    return (
        <UserContext.Provider value={
            { users, getUsers, updateUser }
        }>
            {props.children}
        </UserContext.Provider>
    )

} // end of UserProvider