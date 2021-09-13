import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ItemContext } from "./ItemProvider"
import { UserContext } from "../user/UserProvider"
import { Icon, Button } from 'semantic-ui-react'
import "./Item.css"

export const ItemDetail = (props) => {
    const { items } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)

    const [item, setItem] = useState({ user: {}, region: {} })
    const [itemUser, setItemUser] = useState({ region: {}, profileURL: {} })

    const { itemId } = useParams()

    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const thisUser = users.find(user => user.id === item.userId) || { region: {}, profileURL: {} }
        setItemUser(thisUser)
    }, [item.userId, users])

    useEffect(() => {
        if (props.item) {
            setItem(props.item)
        } else {
            const thisItem = items.find(item => item.id === parseInt(itemId)) || { user: {}, region: {} }
            setItem(thisItem)
        }
    }, [itemId, items, props.item])

    return (
        <>
            <div className="organizeTilesDiv">

                <div className="container">
                    <Link to={`/items/detail/${item.id}`}>
                        <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                    </Link>
                    {item ? <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div> : <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /> </Button></div>}
                    
                    <div className="tileInfoDiv">
                        <p className="tileDetail">
                            <Link to={`/trendyTravelers/detail/${itemUser.id}`} key={`userNameLink--${itemUser.id}`}>
                                <img src={itemUser.profileURL} alt="profileIMG" className="profileIMGicon" key={`profileIMGicon--${itemUser.id}`} />
                                {itemUser.firstName} {itemUser.lastName}<br />
                                <p className="tileRegion">{itemUser.region.name}</p>
                            </Link>
                        </p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

/*
<Link to={`/trendyTravelers/detail/${itemUser.id}`} key={`userNameLink--${itemUser.id}`}>

src={itemUser.profileURL} alt="profileIMG" className="profileIMGicon" key={`profileIMGicon--${itemUser.id}`}
*/