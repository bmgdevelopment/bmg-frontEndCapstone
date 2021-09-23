import React, { useContext } from "react"
import { ItemContext } from "./ItemProvider"
// import { Icon } from 'semantic-ui-react'
import "./Item.css"

export const ItemSearch = () => {
    const { searchTerms, setSearchTerms } = useContext(ItemContext)

    console.log(searchTerms)
    
    return (
        <div className="searchDiv">
                <input 
                type="text"
                className="input--wide"
                onKeyUp={(event) => {
                    setSearchTerms(event.target.value)}
                } 
                placeholder='Search by keyword like "coral" or "blue"... '
                />
                <i aria-hidden="true" className="search icon"></i>
        </div>
    )
}

