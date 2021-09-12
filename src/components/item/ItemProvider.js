import React, { createContext, useState } from "react"
import { useEffect } from "react/cjs/react.development"

const apiURL = "http://localhost:7001"
export const ItemContext = createContext()

export const ItemProvider = (props) => {
    const [items, setItems] = useState([])
    const [ searchTerms, setSearchTerms] = useState("")

    useEffect(() => {
        console.log(searchTerms)
    }, [searchTerms])

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
            { items, getItems, updateItem, deleteItem, getItemById, searchTerms, setSearchTerms }
        }>
            {props.children}
        </ItemContext.Provider>
    )

}// end of ItemProvider