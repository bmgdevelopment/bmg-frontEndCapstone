import React, { createContext, useState} from "react"
import "./Item.css"

const apiURL = "http://localhost:7000"
export const ItemContext = createContext()

export const ItemProvider = (props) => {
    const [items, setItems] = useState([])

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

    const deleteItem = (itemId) => {
        return fetch((`${apiURL}/items/${itemId}`), {
            method: "DELETE"
        })
        .then(getItems)
    }


    return (
        <ItemContext.Provider value={
            { items, getItems, updateItem, deleteItem}
        }>

        </ItemContext.Provider>
    )

}// end of ItemProvider