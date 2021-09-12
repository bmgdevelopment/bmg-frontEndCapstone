import React, { useEffect, useContext, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { ItemDetail } from "./ItemDetail"
// import { UserContext } from "../user/UserProvider"
// import { SaveContext } from "../save/SaveProvider"
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
    
    //     useEffect(() => {
    //         getUsers().then(() => {
    //             const thisUser = users.find(user => user.id === currentUserId) || { region: {}, profileURL: {} }
    //             setCurrentUser(thisUser)
    //         })
    //         // eslint-disable-next-line react-hooks/exhaustive-deps
    //     }, [currentUserId])

    // useEffect(() => {
    //     getSaves().then(() => {
    //         const userSaves = saves.filter(save => save.userId === currentUserId);
    //         setAllUserSaves(userSaves)
    //     })
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    useEffect(() => {
        // debugger
        if (searchTerms !== "") {
            const subset = items.filter(item => item.descriptiveWords.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(items)
        }
    }, [searchTerms, items])

    // useEffect(() => {
        console.log(searchTerms)
    // }, [searchTerms])

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

/*
 filteredItems.map(item => {
                        return (
                            // <ItemDetail key={item.id} item={item} />

                            <Link to={`/items/detail/${item.id}`}>

                                <div className="container">
                                    <img className="itemTile" key={`itemTile--${item.id}`} alt="item" src={item.itemImage}></img>
                                    <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /></Button></div>
                                    <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div>
                                </div>
                            </Link>
                        )
                    })
*/