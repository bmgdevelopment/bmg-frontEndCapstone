import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import { ItemContext } from "../item/ItemProvider"
import { ItemDetail } from "../item/ItemDetail"
import { SaveContext } from "../save/SaveProvider"
import { useParams, Link } from "react-router-dom"
import "./User.css"

export const UserDetail = () => {
    const { users, getUsers } = useContext(UserContext)
    const { items, getItems } = useContext(ItemContext)
    const { saves, getSaves, userSaves, getSavesByUserId } = useContext(SaveContext)

    const [user, setUser] = useState({ region: {}, profileURL: {} })
    const [allUserItems, setAllUserItems] = useState([])
    const [allUserSaves, setAllUserSaves] = useState([])
    const [matchedSaves, setMatchedSaves] = useState([])
    const [matchedSaves2, setMatchedSaves2] = useState([])
    
    const currentUserId = parseInt(sessionStorage.getItem("trendago_user"))
    const { userId } = useParams()

    useEffect(() => {
        getUsers()
        getItems()
        getSaves()
        getSavesByUserId(currentUserId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const thisUser = users.find(user => user.id === parseInt(userId)) || { region: {}, profileURL: {} }
        setUser(thisUser)
    }, [userId, users])

    useEffect(() => {
        const userItems = items.filter(item => item.userId === parseInt(userId));
        setAllUserItems(userItems)
    }, [items, userId])

    useEffect(() => {
        const userSavesByParamId = saves.filter(save => save.userId === parseInt(userId));
        setAllUserSaves(userSavesByParamId)
    }, [saves, userId])

    /* This useEffect filters the user in profile view's owned items against the currently logged in user's saves*/
    useEffect(() => {
        // console.log(userSaves) //current logged in saves
        if (currentUserId !== parseInt(userId)) {
            // debugger
            let currentLoggedInSaves = [];

            if (allUserItems.length) {
                for (const userItem of allUserItems) {
                    userSaves.filter(userSave => {
                        if (userSave.itemId === userItem.id) {
                            currentLoggedInSaves.push(userSave)
                        }
                        return currentLoggedInSaves
                    })
                }
                setMatchedSaves(currentLoggedInSaves)
            }
        }
    }, [allUserItems, userSaves, userId, currentUserId])

    /* This useEffect filters the user in profile view's saved items against the currently logged in user's saves*/
     useEffect(() => {
        // console.log(userSaves) //current logged in saves
        if (currentUserId !== parseInt(userId)) {
            // debugger
            let currentLoggedInSavesFound = [];

            if (allUserSaves.length) {
                for (const userSave of allUserSaves) {
                    userSaves.filter(loggedInUserSave => {
                        if (loggedInUserSave.itemId === userSave.itemId) {
                            currentLoggedInSavesFound.push(loggedInUserSave)
                        }
                        return currentLoggedInSavesFound
                    })
                }
                setMatchedSaves2(currentLoggedInSavesFound)
            }
        }
    }, [allUserSaves, userSaves, userId, currentUserId])
    

    const saveBtnCheck = (item) => {
        const savedItem = matchedSaves.find(match => match.itemId === item.id) || 0
        const isSaved = !!savedItem //(!! converts returned value into a boolean)

        return <ItemDetail key={item.id} item={item} isSaved={isSaved} savedItemId={savedItem && savedItem.id} />
    }

    const saveBtnCheck2 = (save) => {
        // debugger
        console.log("matchedSaves" + matchedSaves2)
        console.log(matchedSaves2)

        if (matchedSaves.length) {

            const savedItem = matchedSaves2.find(match => {
                console.log(match.itemId)
                if (match.item.id) {
                    return match.item.id === save.item.id
                }
                })
            const isSaved = !!savedItem //(!! converts returned value into a boolean)
            console.log("savedItem:" + savedItem)
            return <ItemDetail key={save.item.id} item={save.item} isSaved={isSaved} savedItemId={savedItem && savedItem.id} />
        }
    }

    return (
        <>
            <div className="aside_and_mainFeed">
                <div className="mainFeedHome">

                    {
                        <div>
                            <div className="profileBanner">
                                <img src={user.region.regionImage} alt="profileIMG" className="profileBannerBkgd" key={`profileIMGBanner--${user.id}`} />
                            </div>

                            <div className="userProfileTitle">
                                <h2 className="userProfileH2">{user.firstName} {user.lastName}</h2>
                                <p className="profileDetailsP">
                                    Member since {(`${user.dateJoined}`).slice(-4)} from {user.region.name}
                                </p>
                            </div>

                            <div className="userProfileIMGSolo" key={`userProfileURL--${user.id}`}>
                                <img src={user.profileURL} alt="profileIMG" className="userProfileIMGBanner" key={`profileIMG--${user.id}`} />
                            </div>

                        </div>
                    }

                    <br />

                    {/* USER'S UPLOADED TRENDS THAT THEY OWN */}
                    {/* ------------------------------------ */}
                    {
                        allUserItems.length > 0
                            ? <>
                                <div className="trendTravH2Div">
                                    <h1 className="trendyTravlersH2 userItemsH2">{user.firstName}'s Trends</h1>
                                </div><p style={{ color: 'gray', paddingRight: "3em", marginBottom: "-10px", display: "flex", justifyContent: "flex-end", fontSize: "17px" }}>{allUserItems.length} items</p></>
                            : <></>
                    }
                    <div className="organizeTilesDiv">
                        {
                            allUserItems.length === 0 && allUserSaves.length === 0 ?
                                <div className="noItemsDiv"><p className="noItemsP">{`${user.firstName} has yet to add an item`}</p></div>
                                :
                                allUserItems.map(item => {
                                    return (currentUserId === parseInt(userId) || currentUserId === item.userId
                                        ?
                                        <Link to={`/items/detail/${item.id}`}>
                                            <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                                        </Link>
                                        : saveBtnCheck(item)
                                    )
                                })
                        }
                    </div>

                    {/* USER'S SAVED TRENDS THAT THEY DO NOT OWN */}
                    {/* ------------------------------------ */}
                    {
                        allUserSaves.length > 0
                            ? <>
                                <div className="trendTravH2Div">
                                    <h1 className="trendyTravlersH2 saveH2">{user.firstName}'s Saved Trends</h1>
                                </div><p style={{ color: 'gray', paddingRight: "3em", marginBottom: "-10px", display: "flex", justifyContent: "flex-end", fontSize: "17px" }}>{allUserSaves.length} saved items</p>
                            </>
                            : <></>
                    }

                    <div className="organizeTilesDiv">
                        {
                            allUserSaves.map(save => {
                                return (
                                    <>
                                    {currentUserId === parseInt(userId) || currentUserId === save.item.userId
                                            ? <ItemDetail key={save.item.id} item={save.item} isSaved={!!save.item} savedItemId={save.item && save.id} />
                                            : saveBtnCheck2(save)
                                            // : save.userId === currentUserId
                                            //     ? <ItemDetail key={save.item.id} item={save.item} isSaved={save.item.isSaved} savedItemId={save.item && save.item.id} />

                                                // : saveBtnCheck2(save.item)
                                        }

                                    </>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </>
    )

} //end of UserDetail