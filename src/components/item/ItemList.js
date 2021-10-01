import React, { useEffect, useContext, useState } from "react"
import { useLocation } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { ItemContext } from "./ItemProvider"
import { SaveContext } from "../save/SaveProvider"
import "./Item.css"

function useQuery() {
    return new URLSearchParams(useLocation().search);
  } 

export const ItemList = () => {
    // const { users, getUsers } = useContext(UserContext)
    const { items, getItems, searchTerms, setSearchTerms } = useContext(ItemContext)
    const { userSaves, getSavesByUserId } = useContext(SaveContext)
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))
    const [filteredItems, setFiltered] = useState([])

    const query = useQuery() //using URL from browser
    const keywordSearchTerm = query.get('keywordSearchTerm') || ""
    useEffect(() => {
        getItems()
        getSavesByUserId(currentLoggedInUserId)
        // console.log(userSaves)
    }, [])

    useEffect(() => {
        if (searchTerms !== "" ) {
            const subset = items.filter(item => item.descriptiveWords.includes(searchTerms))
            // const subset = items.filter(item => item.descriptiveWords.toLowerCase().includes(searchTerms.toLowerCase())  )
            setFiltered(subset)
        } else if (keywordSearchTerm) {
            const subset = items.filter(item => item.descriptiveWords.includes(keywordSearchTerm))
            setFiltered(subset)
            setSearchTerms(keywordSearchTerm) // 🛑 need to review
        } else {
            setFiltered(items)
        }
    }, [searchTerms, items, keywordSearchTerm, setSearchTerms])

    // LOADER
    if (!userSaves.length) return <div className="centerLoaderHome organizeTilesDiv"><div className="ui active centered inline loader"></div></div>

    return (
        <>
            <p style={{color: 'gray', paddingRight: "5em", display: "flex", justifyContent: "flex-end", fontSize: "17px"}}>Viewing {filteredItems.length} items</p>
            <div className="organizeTilesDiv">
                {
                    filteredItems.map(item => {
                        const savedItem = userSaves.find(save => save.itemId === item.id) || 0
                        const isSaved = !!savedItem //(!! converts returned value into a boolean)
                        
                        return <ItemDetail key={item.id} item={item} isSaved={isSaved} savedItemId={savedItem && savedItem.id}/>  
                    })
                }
            </div>
        </>
    )
} // end of ItemList