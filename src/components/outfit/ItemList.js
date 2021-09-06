import React, { useEffect, useContext } from "react"
import { ItemContext } from "./ItemProvider"
import "./Item.css"

export const ItemList = () => {
    const { items, getItems } = useContext(ItemContext)

    useEffect(() => {
        getItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
        
        </>
    )








} // end of ItemList