import React, { useEffect, useContext, useState } from "react"
import { useLocation } from "react-router-dom"
import { ItemContext } from "./ItemProvider"
import { ItemDetail } from "./ItemDetail"
import { SaveContext } from "../save/SaveProvider"
import "./Item.css"

function useQuery() {
    return new URLSearchParams(useLocation().search);
  } 

export const ItemList = () => {
    // const { users, getUsers } = useContext(UserContext)
    const { items, getItems, searchTerms } = useContext(ItemContext)
    const { userSaves, getSavesByUserId } = useContext(SaveContext)
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))
    const [filteredItems, setFiltered] = useState([])
    const query = useQuery() //using URL from browser
    const keywordSearchTerm = query.get('keywordSearchTerm')

    // console.log(keywordSearchTerm)

    useEffect(() => {
        getItems()
        getSavesByUserId(currentLoggedInUserId)
        // console.log(userSaves)
    }, [])

    useEffect(() => {
        if (searchTerms !== "" || keywordSearchTerm) {
            const subset = items.filter(item => item.descriptiveWords.toLowerCase().includes(keywordSearchTerm.toLowerCase())  )
            // || item.descriptiveWords.toLowerCase().includes(searchTerms.toLowerCase()) )
        //    if (subset.length) 
            setFiltered(subset)
        } else {
            setFiltered(items)
        }
    }, [searchTerms, items, keywordSearchTerm])
    
    // LOADER
    if (!userSaves.length) return <div className="centerLoaderHome organizeTilesDiv"><div className="ui active centered inline loader"></div></div>

    return (
        <>
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


/*
JSON-SERVER
Full-text search
Add q

GET /posts?q=internet
*/ 