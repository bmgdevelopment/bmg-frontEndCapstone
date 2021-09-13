import React, { useContext } from "react"
import { ItemContext } from "./ItemProvider"
// import { Icon } from 'semantic-ui-react'
import "./Item.css"

export const ItemSearch = () => {
    const { setSearchTerms } = useContext(ItemContext)

    return (
        <div className="searchDiv">
            {/* <Input fluid
                type="text"
                className="input--wide"
                onSearchChange={(event) => setSearchTerms(event.target.value)}
                icon='search'
                placeholder='Search by keyword like "warm" or "snow" ' />  */}

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

//<div class="ui icon input"><input type="text" placeholder="Search..."/><i aria-hidden="true" class="search icon"></i></div> 