import React, { useContext, useEffect, useState} from "react"
import { ItemContext } from "../item/ItemProvider"
import { SaveContext } from "./SaveProvider"

export const SaveInfo = () => {
    const { items, getItems } = useContext(ItemContext)
    const { userSaves, getSavesByUserId } = useContext(SaveContext)
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))

    useEffect(() => {
        getItems().then(getSavesByUserId(currentLoggedInUserId))
    }, [])

/*
1. Get all items (items)
2. Get all logged in user saves (usersaves)
3. Filter items by each item against the save.itemId
4. Mark each item with a save key/prop to later access in UserDetail.js
5. In UserDetail.js, use the save key/prop to determine the correct save button to display
*/ 

    useEffect(() => {
        items.map(item => {
            const savedItem = userSaves.find(save => save.itemId === item.id) || 0
            if (savedItem) {
                return savedItem
            } 
            return undefined
        })
        
    }, [])


}