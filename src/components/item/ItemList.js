import React, { useEffect, useContext, useState } from "react"
import { ItemContext } from "./ItemProvider"
import { ItemDetail } from "./ItemDetail"
import { SaveContext } from "../save/SaveProvider"
import "./Item.css"

import { Icon, Button } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"


export const ItemList = () => {
    // const { users, getUsers } = useContext(UserContext)
    const { items, getItems, searchTerms } = useContext(ItemContext)
    const [filteredItems, setFiltered] = useState([])

    const { saves, getSaves,saveItem, deleteSave } = useContext(SaveContext)
    const [allUserSaves, setAllUserSaves] = useState([])

    const { isSaved, setIsSaved } = useState(false)

    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))
    const history = useHistory()

    useEffect(() => {
        getItems().then(getSaves)
    }, [])

    // useEffect(() => {
    //     getItems().then(getSaves).then(() => {
    //         if (saves.length > 0) {
    //             const userSaves = saves.filter(save => save.userId === currentLoggedInUserId) 
    //             setAllUserSaves(userSaves)
    //             console.log(userSaves)
    //             // console.log(allUserSaves)
    //         }
    //     })
    // }, [])

    useEffect(() => {
        const userSaves = saves.filter(save => save.userId === currentLoggedInUserId) || []
        setAllUserSaves(userSaves)
        // console.log(allUserSaves)
    }, [allUserSaves, currentLoggedInUserId, saves])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = items.filter(item => item.descriptiveWords.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(items)
        }
    }, [searchTerms, items])
    
    useEffect(() => {}, [searchTerms])

    
    //     const saveIconCheck = (item) => {
    //     // console.log(allUserSaves)
    //     for (const save of allUserSaves) {
    //         if (save.itemId === item.id && save.userId === currentLoggedInUserId) {
    //             return <div className="top-right">
    //                 <Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { deleteSave(save.id).then(() => history.push("/")) }} /></Button>
    //             </div>
    //         } else if (save.itemId !== item.id && item.userId !== currentLoggedInUserId) {
    //             return <div className="top-right">
    //                 <Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => { saveItem(item).then(() => history.push("/")) }} /> </Button>
    //             </div>
    //         } else {
    //             return <></>
    //         }
    //     }
    // }
    



    // const saveIconCheck = (item) => {
    //     // console.log(allUserSaves)
    //     for (const save of allUserSaves) {
    //         if (save.itemId === item.id && save.userId === currentLoggedInUserId) {
    //             return <div className="top-right">
    //                 <Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { deleteSave(save.id).then(() => history.push("/")) }} /></Button>
    //             </div>
    //         } else if (save.itemId !== item.id && item.userId !== currentLoggedInUserId) {
    //             return <div className="top-right">
    //                 <Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => { saveItem(item).then(() => history.push("/")) }} /> </Button>
    //             </div>
    //         } else {
    //             return <></>
    //         }
    //     }
    // }

    return (
        <>
            <div className="organizeTilesDiv">
                {
                    filteredItems.map(item => {
                        return <ItemDetail key={item.id} item={item} allUserSaves={allUserSaves} />  
                    })
                }
               
            </div>
        </>
    )
} // end of ItemList
