import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ItemContext } from "./ItemProvider"
// import { Icon } from 'semantic-ui-react'
import "./Item.css"

export const ItemSearch = () => {
    const { searchTerms, setSearchTerms } = useContext(ItemContext)
    // const [ inputValue, setInputValue ] = useState("")
    console.log(searchTerms)
    
    // useEffect(() => {
    //     if (searchTerms) {
    //     }
    // }, [searchTerms])

    const empty = () => {
        // event.target.value = ""
        setSearchTerms("")
        // setInputValue("")
    }

    return (
        <>
            <div className="searchDiv">
                <input
                    type="text"
                    // value={searchTerms}
                    className="input--wide"
                    onKeyUp={(event) => {
                        setSearchTerms(event.target.value)
                        console.log("searchTerms " + searchTerms)
                    }}
                    placeholder='Search by keyword like "coral" or "blue"... '
                />
                <i aria-hidden="true" className="search icon"></i>
            </div>
           
            <div className="clearLinkDiv">
                <Link
                    className="clearLink"
                    onClick={empty}
                    to={'/'}
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