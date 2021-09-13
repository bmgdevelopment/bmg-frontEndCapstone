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
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items])

    useEffect(() => {
        getUsers().then(() => {
            const thisUser = users.find(user => user.id === item.userId) || { region: {}, profileURL: {} }
            setItemUser(thisUser)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId, users])

    return (
        <>
            <div className="organizeTilesDiv">
                {/* <div className="container">
                <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                {item ? <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div> : <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /> </Button></div>}
            </div>
            <div>
                {itemUser.id === item.userId ? <p className="trendByName">{`Trend provided by ${itemUser.firstName} ${itemUser.lastName}`}</p> : <></>}
                {itemUser.id === item.userId ? <p className="itemUserRegion">{`Region: ${itemUser.region.name} `}</p> : <></>}
            </div>
            <Link to={"/"}>
                <button>X</button>
            </Link> */}

                <div className="oneItemTile">
                    <div className="itemInfo">
                        <div className="itemTopInfo">
                            <div className="container">
                                <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                                {item ? <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div> : <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /> </Button></div>}
                            </div>
                            <span className="itemSummary">
                                <p className="itemSummaryP">{item.summary}</p>
                            </span>

                            <div className="imgNameRegionDate">
                                <span className="creatorImgWithName">
                                    <img alt="userIMG" src="" />
                                    <div>
                                        {itemUser.id === item.userId ? <p className="trendByName">{`Trend provided by ${itemUser.firstName} ${itemUser.lastName}`}</p> : <></>}
                                        {itemUser.id === item.userId ? <p className="itemUserRegion">{`Region: ${itemUser.region.name} `}</p> : <></>}
                                    </div>
                                </span>
                            </div>
                        </div>

                        <div className="itemBottomInfo">
                            <div className="keywordDiv">
                                <p>Keywords</p>
                                <p>{item.descriptiveWords}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Link to={"/"}>
                    <button>X</button>
                </Link>

            </div>
        </>
    )
}