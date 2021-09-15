import React, { createContext, useState } from "react"

const apiURL = "http://localhost:7001"
export const ItemContext = createContext()

export const ItemProvider = (props) => {
    const [items, setItems] = useState([])
    const [ searchTerms, setSearchTerms] = useState("")

    const getItems = () => {
        return fetch(`${apiURL}/items?_expand=user&_expand=region`)
            .then(res => res.json())
            .then(setItems)
    }

    const updateItem = (item) => {
        return fetch((`${apiURL}/items/${item.id}`), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
            .then(getItems)
    }

    const addItem = (itemObj) => {
        return fetch(`${apiURL}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemObj)
        })
        .then(getItems)
    }

    const getItemById = (itemId) => {
        return fetch(`${apiURL}/items/${itemId}`)
            .then(res => res.json())
    }

    const deleteItem = (itemId) => {
        return fetch((`${apiURL}/items/${itemId}`), {
            method: "DELETE"
        })
            .then(getItems)
    }

    return (
        <ItemContext.Provider value={
            { items, getItems, addItem, updateItem, deleteItem, getItemById, searchTerms, setSearchTerms }
        }>
            {props.children}
        </ItemContext.Provider>
    )

}// end of ItemProvider