import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ItemContext } from "./ItemProvider"
// import { Icon } from 'semantic-ui-react'
import "./Item.css"

export const ItemSearch = () => {
    const { searchTerms, setSearchTerms } = useContext(ItemContext)
    console.log(searchTerms)
    // const empty = ""

    return (
        <>
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
        <div className="clearLinkDiv">
            <Link 
            className="clearLink" 
            to={'/'} 
            // onClick={setSearchTerms(empty)}
            >Clear Search Results</Link>
        </div>
    </>
    )
}

