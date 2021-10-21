import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ItemContext } from "./ItemProvider"
import "./Item.css"

export const ItemSearch = () => {
    const { searchTerms, setSearchTerms, placeholderWord, setPlaceHolder } = useContext(ItemContext)

    const empty = () => {
        setSearchTerms(" ")
        console.log("searchTerm in empty: " + searchTerms)
        setPlaceHolder('Search by keyword like "coral" or "blue"... ')
    }

    return (
        <>
            <div className="searchDiv">
                <input
                    type="text"
                    className="input--wide"
                    onKeyUp={(event) => {
                        setSearchTerms(event.target.value)
                        console.log("searchTerms " + searchTerms)
                    }}
                    placeholder={placeholderWord}
                />
                <i aria-hidden="true" className="search icon"></i>
            </div>

            <div className="clearLinkDiv">
                {/* <button
                    className="clearLink"
                    onClick={empty}
                    to={'/'}
                >
                    Clear Search Results
                </button> */}
                <Link
                    className="clearLink"
                    onClick={empty}
                    to={'/'}
                >
                    Clear Search Results
                </Link>
            </div>
        </>
    )
}