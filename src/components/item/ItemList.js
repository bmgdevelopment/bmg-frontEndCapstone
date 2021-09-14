import React, { useEffect, useContext, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { ItemDetail } from "./ItemDetail"
// import { UserContext } from "../user/UserProvider"
// import { Link } from "react-router-dom"
// import { Button, Icon } from 'semantic-ui-react'
import "./Item.css"

export const ItemList = () => {
    // const { users, getUsers } = useContext(UserContext)
    // const { saves, getSaves } = useContext(SaveContext)
    const { items, getItems, searchTerms } = useContext(ItemContext)
    const [filteredItems, setFiltered] = useState([])
    
    // const currentUserId = parseInt(sessionStorage.getItem("trendago_user"))
    // const [currentUser, setCurrentUser] = useState({ region: {}, profileURL: {} })
    // const [allUserSaves, setAllUserSaves] = useState([])
    
    useEffect(() => {
        getItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    useEffect(() => {
        // debugger
        if (searchTerms !== "") {
            const subset = items.filter(item => item.descriptiveWords.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(items)
        }
    }, [searchTerms, items])

    useEffect(() => {
        console.log(searchTerms)
    }, [searchTerms])

// debugger
    return (
        <>
            <div className="organizeTilesDiv">
                {
                    filteredItems.map(item => {
                        return <ItemDetail key={item.id} item={item} />
                    })
                }
            </div>
        </>
    )
} // end of ItemList
