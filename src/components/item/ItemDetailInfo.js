import React, { useContext, useEffect, useState } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import { ItemContext } from "./ItemProvider"
import { UserContext } from "../user/UserProvider"
import { Icon, Button } from 'semantic-ui-react'
import "./Item.css"

export const ItemDetailInfo = (props) => {
    const { items, getItems, setSearchTerms } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)

    const [item, setItem] = useState({ user: {}, region: {} })
    const [itemUser, setItemUser] = useState({ region: {}, profileURL: {} })
    const [splitArr, setArr] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("trendago_user"))


    const history = useHistory()
    const { itemId } = useParams()

    useEffect(() => {
        getUsers()
        getItems()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const thisItem = items.find(item => item.id === parseInt(itemId)) || { user: {}, region: {} }
        setItem(thisItem)
        setArr(shortKeywords(thisItem))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId, items])

    useEffect(() => {
        const thisUser = users.find(user => user.id === item.userId) || { region: {}, profileURL: {} }
        setItemUser(thisUser)
    }, [item.userId, itemId, users])

    const shortKeywords = (item) => {
        let splitSpliceArr = []
        if (item.id > 0) {
            splitSpliceArr = item.descriptiveWords.split(" ").slice(0, 10)
        }
        return splitSpliceArr
    }

    const noSaveBtn = (item) => {
        return item.userId === currentUserId ? <></> : <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div>
    }

    return (
        <>
            <div className="organizeTilesDiv">


                <div className="oneItemDetailTile">
                    <div className="container">
                        <img key={`userItemSave--${item.id}`} className="oneItemTileIMG" alt="item" src={item.itemImage} />
                        {item ? noSaveBtn(item) : <></>}
                        {/* <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /> </Button></div> */}

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
                            <div className="itemInfoBtns">

                                {item.userId === currentUserId ?
                                    <Link to={`/items/edit/${item.id}`} className="change">
                                        <button>𝌡</button>
                                    </Link> :
                                    <></>}

                                <Link to={"/"} className="X">
                                    <button>X</button>
                                </Link>
                            </div>
                            <p className="itemSummaryTitleP">{item.summary}</p>
                        </div>

                        <div className="itemBottomInfo">
                            <div className="keywordDetailDiv">
                                <div className="arrangeKeywords">
                                    <p className="keywordsTitle">Keywords</p>
                                    <div className="keyWordBubbles">
                                        {splitArr.map(word => {
                                            return <button value={word} className="keyWordSelect" onClick={(event) => {
                                                setSearchTerms(event.target.value).then(() => history.push("/"))
                                            }}>{word}</button>
                                        })}
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

<p value={word} className="keyWordSelect">{word}</p>

const shortKeywords = (item) => {
    const splitArr = item.descriptiveWords.split(" ").slice(0,10)
    console.log(splitArr)
   return splitArr
}
*/