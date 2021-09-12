import React, { useEffect, useContext, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { UserContext } from "../user/UserProvider"
import { SaveContext } from "../save/SaveProvider"
// import { ItemDetail } from "./ItemDetail"
import { Link } from "react-router-dom"
import { Button, Icon } from 'semantic-ui-react'
import "./Item.css"

export const ItemList = () => {
    const { users, getUsers } = useContext(UserContext)
    const { items, getItems, searchTerms } = useContext(ItemContext)
    const { saves, getSaves } = useContext(SaveContext)

    const currentUserId = parseInt(sessionStorage.getItem("trendago_user"))
    const [filteredItems, setFiltered] = useState([])

    const [currentUser, setCurrentUser] = useState({ region: {}, profileURL: {} })
    const [allUserSaves, setAllUserSaves] = useState([])

    useEffect(() => {
        getUsers().then(() => {
            const thisUser = users.find(user => user.id === currentUserId) || { region: {}, profileURL: {} }
            setCurrentUser(thisUser)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUserId, users])

    useEffect(() => {
        getItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getSaves().then(() => {
            const userSaves = saves.filter(save => save.userId === currentUserId);
            setAllUserSaves(userSaves)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = items.filter(item => item.descriptiveWords.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(items)
        }
    }, [searchTerms, items])


    return (
        <>
            <div className="organizeTilesDiv">
                {
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
                }
            </div>
        </>
    )
} // end of ItemList

/*

*/