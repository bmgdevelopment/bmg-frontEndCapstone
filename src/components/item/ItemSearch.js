import React, { useContext } from "react"
import { ItemContext } from "./ItemProvider"
import { Input } from 'semantic-ui-react'
import "./Item.css"

export const ItemSearch = () => {
    const { setSearchTerms } = useContext(ItemContext)

    return (
        <div classname="searchDiv">
            <Input fluid
                type="text"
                className="input--wide"
                onKeyUp={(event) => setSearchTerms(event.target.value)}
                icon='search'
                placeholder='Search by keyword like "warm" or "snow" ' />
        </div>
    )
}