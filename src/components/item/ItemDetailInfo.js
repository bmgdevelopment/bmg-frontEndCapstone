import React, { useContext, useEffect, useState } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import { ItemContext } from "./ItemProvider"
import { SaveContext } from "../save/SaveProvider"
import { UserContext } from "../user/UserProvider"
import { Icon, Button } from 'semantic-ui-react'
import "./Item.css"

export const ItemDetailInfo = () => {
    const { itemId } = useParams()
    const { items, getItems, deleteItem, setSearchTerms } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)
    const { userSaves, getSavesByUserId, saveItem, deleteSave } = useContext(SaveContext)

    const [item, setItem] = useState({ user: {}, region: {} })
    const [itemUser, setItemUser] = useState({ region: {}, profileURL: {} })
    const [splitArr, setArr] = useState([])
    const [trueSave, setTrueSave] = useState(false)
    const [trueSaveId, setTrueSaveId] = useState(0)
    const [state, setState] = useState({})

    const currentUserId = parseInt(sessionStorage.getItem("trendago_user"))
    const history = useHistory()

    useEffect(() => {
        getUsers()
        getItems()
        getSavesByUserId(currentUserId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const thisItem = items.find(item => item.id === parseInt(itemId)) || { user: {}, region: {} }
        setItem(thisItem)
        setArr(shortKeywords(thisItem))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId, items])


    useEffect(() => {
        // debugger
        if (itemId) {
            const savedItemInfo = userSaves.find(save => save.itemId === parseInt(itemId))
            console.log(userSaves)
            const isSaved = !!savedItemInfo
            setTrueSave(isSaved)
            
            if (savedItemInfo) {
                setTrueSaveId(savedItemInfo.id)
                //  console.log(trueSave)
                //  console.log(trueSaveId)
            }
        }
    }, [userSaves, itemId])

    useEffect(() => {
        const thisUser = users.find(user => user.id === item.userId) || { region: {}, profileURL: {} }
        setItemUser(thisUser)
    }, [item.userId, users])

    const shortKeywords = (item) => {
        let splitSpliceArr = []
        if (item.id > 0) {
            splitSpliceArr = item.descriptiveWords.split(" ").slice(0, 10)
        }
        return splitSpliceArr
    }

    const removeItem = () => {
        deleteItem(item.id)
            .then(() => {
                history.push(`/trendyTravelers/detail/${itemUser.id}`)
            })
    }

    const handleSave = () => {
        const itemIdOfSave = parseInt(itemId)
        const saveUserId = currentUserId
        if (trueSave) {
            deleteSave(trueSaveId)
            getSavesByUserId(currentUserId)
            .then(() => setState({})) //used to re-render component smoothly
        } else {
            saveItem({
                itemId: itemIdOfSave,
                userId: saveUserId
            })
            getSavesByUserId(currentUserId)
            .then(() => setState({})) //used to re-render component smoothly
        }
    }

    // console.log(item)
    // console.log("trueSave? " + trueSave)
    // console.log("trueSaveId? " + trueSaveId)


    const buttonCheck = () => {
        if (item.userId === currentUserId) {
            return console.log("blank")
        } else if (trueSave) {
            console.log("yay")
            return <div className="top-right"><Button icon className="suitCaseSaveBtn"><Icon circular inverted color='teal' name='suitcase' onClick={handleSave} /></Button></div>
        } else {
            console.log("plain")
            return <div className="top-right"><Button icon className="suitCaseSaveBtn"><Icon circular inverted name='suitcase' onClick={handleSave} /></Button></div>
        }
    }


    // if (!item.id) return <h1>Loading...</h1>

    return (
        <>
            <div className="organizeTilesDiv">

                <div className="oneItemDetailTile">
                    <div className="container" >
                        <img key={`userItemSave--${item.id}`} className="oneItemTileIMG" alt="item" src={item.itemImage} />

                        <div className="tileInfoDiv">
                            <div className="tileDetail oneTileDetail">
                                <Link to={`/trendyTravelers/detail/${itemUser.id}`} key={`userNameLink--${itemUser.id}`}>
                                    <img src={itemUser.profileURL} alt="profileIMG" className="oneTileIMGicon" key={`profileIMGicon--${itemUser.id}`} />
                                    {itemUser.firstName} {itemUser.lastName}<br />
                                    <p className="tileRegion">{itemUser.region.name}</p>
                                </Link>
                            </div>
                        </div>

                        {buttonCheck()}

                    </div>


                    <div className="oneItemInfo" style={{ backgroundColor: "white"}}>

                        <div className="itemTopInfo">
                            <div className="itemInfoBtns">


                                {item.userId === currentUserId ?
                                    <button
                                        className="trashBtnItem"
                                        onClick={removeItem}
                                    >🗑</button>
                                    :
                                    <></>}

                                {item.userId === currentUserId ?
                                    <Link to={`/items/edit/${item.id}`} className="change">
                                        <button>𝌡</button>
                                    </Link> :
                                    <></>}

                                {item.userId === currentUserId &&
                                    <Link to={`/trendyTravelers/detail/${currentUserId}`} className="X">
                                        <button>X</button>
                                    </Link>
                                }

                                {item.userId !== currentUserId &&
                                    <Link to={"/"} className="X">
                                        <button>X</button>
                                    </Link>
                                }


                            </div>
                            <p className="itemSummaryTitleP">{item.summary}</p>
                        </div>

                        <div className="itemBottomInfo">
                            <div className="keywordDetailDiv">
                                <div className="arrangeKeywords">
                                    <p className="keywordsTitle">Keywords</p>
                                    <div className="keyWordBubbles">
                                        {splitArr.map(word => {
                                            return <button name={word} value={word} className="keyWordSelect" onClick={() => {
                                                history.push(`/?keywordSearchTerm=${word}`)
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