import React, { useContext, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ItemContext } from "./ItemProvider"
import { UserContext } from "../user/UserProvider"
import { Icon, Button } from 'semantic-ui-react'
import "./Item.css"

export const ItemDetailInfo = (props) => {
    const { items, getItems } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)

    const [item, setItem] = useState({ user: {}, region: {} })
    const [itemUser, setItemUser] = useState({ region: {}, profileURL: {} })

    // const history = useHistory()
    const { itemId } = useParams()

    useEffect(() => {
        getItems().then(() => {
            const thisItem = items.find(item => item.id === parseInt(itemId)) || { user: {}, region: {} }
            setItem(thisItem)
            shortKeywords(thisItem)
        })
    }, [getItems, itemId, items])

    useEffect(() => {
        getUsers().then(() => {
            const thisUser = users.find(user => user.id === item.userId) || { region: {}, profileURL: {} }
            setItemUser(thisUser)
        })
    }, [getUsers, item.userId, itemId, users])

    let splitArr = []
    const shortKeywords = (item) => {
        if (item.id > 0) {
            splitArr = item.descriptiveWords.split(" ").slice(0, 10)
        }
        return splitArr
    }

    return (
        <>
            <div className="organizeTilesDiv">


                <div className="oneItemDetailTile">
                    <div className="container">
                        <img key={`userItemSave--${item.id}`} className="oneItemTileIMG" alt="item" src={item.itemImage} />
                        {item ? <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div> : <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /> </Button></div>}

                        <div className="tileInfoDiv">
                            <p className="tileDetail oneTileDetail">
                                <Link to={`/trendyTravelers/detail/${itemUser.id}`} key={`userNameLink--${itemUser.id}`}>
                                    <img src={itemUser.profileURL} alt="profileIMG" className="oneTileIMGicon" key={`profileIMGicon--${itemUser.id}`} />
                                    {itemUser.firstName} {itemUser.lastName}<br />
                                    <p className="tileRegion">{itemUser.region.name}</p>
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="oneItemInfo">
                        <div className="itemTopInfo">
                            <Link to={"/"} className="X">
                                <button>X</button>
                            </Link>
                            <p className="itemSummaryTitleP">{item.summary}</p>
                        </div>

                        <div className="itemBottomInfo">
                            <div className="keywordDiv">
                                <div className="arrangeKeywords">
                                    <p>Keywords</p>
                                    <div className="keyWordBubbles">
                                        {splitArr.map(word => {
                                            return <p className="keyWordSelect">{word}</p>
                                        })}
                                        
                                        <p>here</p>
                                        <p>is</p>
                                        <p>where</p>
                                        <p>words</p>
                                        <p>can</p>
                                        <p>go</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

/*
const shortKeywords = (item) => {
    const splitArr = item.descriptiveWords.split(" ").slice(0,10)
    console.log(splitArr)
   return splitArr
}
*/