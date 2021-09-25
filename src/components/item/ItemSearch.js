import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { ItemContext } from "./ItemProvider"
// import { Icon } from 'semantic-ui-react'
import "./Item.css"

export const ItemSearch = () => {
    const { searchTerms, setSearchTerms } = useContext(ItemContext)
    console.log(searchTerms)
    const empty = () => {
        setSearchTerms("")
    } 

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
            onClick={empty}
            >Clear Search Results</Link>
        </div>
    </>
    )
}

/*
set the value to empty as

handleClick = () => {
        ReactDOM.findDOMNode(this.refs.form).value = "";
      }
and yes onClick expects a function or a value not a string. Also React.findDOMNode() is deprecated. You should use ReactDOM.findDOMNode();
*/ 