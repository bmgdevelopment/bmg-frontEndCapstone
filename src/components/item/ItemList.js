import React, { useEffect, useContext, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { ItemDetail } from "./ItemDetail"
// import { SaveContext } from "../save/SaveProvider"
import "./Item.css"

export const ItemList = () => {
    // const { users, getUsers } = useContext(UserContext)
    const { items, getItems, searchTerms } = useContext(ItemContext)
    const [filteredItems, setFiltered] = useState([])

    // const { saves, getSaves } = useContext(SaveContext)
    // const [allUserSaves, setAllUserSaves] = useState([])
    // const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))

    useEffect(() => {
        getItems()
        // getSaves()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     const userSaves = saves.filter(save => save.userId === currentLoggedInUserId) || []
    //     setAllUserSaves(userSaves)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = items.filter(item => item.descriptiveWords.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(items)
        }
    }, [searchTerms, items])

    useEffect(() => {
        // console.log(searchTerms)
    }, [searchTerms])

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
