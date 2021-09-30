import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import { ItemContext } from "../item/ItemProvider"
import { RegionContext } from "../region/RegionProvider"
import { SaveContext } from "../save/SaveProvider"
import { useParams, Link } from "react-router-dom"
import { Button, Icon } from 'semantic-ui-react'
import "./User.css"

export const UserDetail = () => {
    const { users, getUsers } = useContext(UserContext)
    const { items, getItems } = useContext(ItemContext)
    const { saves, getSaves, userSaves, getSavesByUserId, deleteSave, saveItem } = useContext(SaveContext)
    const { regions, getRegions } = useContext(RegionContext)

    const [user, setUser] = useState({ region: {}, profileURL: {} })
    const [allUserItems, setAllUserItems] = useState([])
    const [allUserSaves, setAllUserSaves] = useState([])
    const [matchedSaves, setMatchedSaves] = useState([])
    const [state, setState] = useState({})
    const currentUserId = parseInt(sessionStorage.getItem("trendago_user"))
    const { userId } = useParams()

    useEffect(() => {
        getUsers()
        getItems()
        getRegions()
        getSaves()
        getSavesByUserId(currentUserId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const thisUser = users.find(user => user.id === parseInt(userId)) || { region: {}, profileURL: {} }
        setUser(thisUser)
    }, [userId, users, user.id])

    useEffect(() => {
        const userItems = items.filter(item => item.userId === parseInt(userId));
        setAllUserItems(userItems)
    }, [items, userId])

    useEffect(() => {
        const userSaves = saves.filter(save => save.userId === parseInt(userId));
        setAllUserSaves(userSaves)
    }, [saves, userId])


    useEffect(() => {
        console.log(userSaves)
        if (currentUserId !== parseInt(userId)) {
            // debugger
            let currentLoggedInSaves = [];
            if (allUserItems.length) {
                for (const userItem of allUserItems) {
                    userSaves.filter(userSave => {
                        if (userSave.itemId === userItem.id) {
                            currentLoggedInSaves.push(userSave)
                        }
                    })
                }
                setMatchedSaves(currentLoggedInSaves)
                console.log(allUserItems)
                console.log("Match saves:" + matchedSaves)
                console.log(matchedSaves)
            }
        }

    }, [allUserItems, userSaves, userId, currentUserId])

    const handleDelete = (matchId) => {
        deleteSave(matchId)
            .then(() => setState({})) //used to re-render component smoothly
    }

    const handleSave = (itemId) => {
        saveItem({
            itemId: itemId,
            userId: currentUserId
        })
            .then(() => setState({})) //used to re-render component smoothly
    }

    // 🛑 NOT ITERATING THROUGH ALL MATCHEDSAVES
    const saveBtnCheck = (item) => {
        if (matchedSaves.length) {
            for (const match of matchedSaves) {
                if (match.itemId === item.id) {
                    return <div className="top-right"><Button icon className="suitCaseSaveBtn"><Icon circular inverted color='teal' name='suitcase' /></Button></div>
                } else {
                    return <div className="top-right"><Button icon className="suitCaseSaveBtn"><Icon circular inverted name='suitcase' /></Button></div>
                }
            }
        } else {
            console.log("no saves to match with user items")
            return <div className="top-right"><Button icon className="suitCaseSaveBtn"><Icon circular inverted name='suitcase'  /></Button></div>
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
                                    return (
                                        <div className="container">
                                            <Link to={`/items/detail/${item.id}`}>
                                                <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                                            </Link>
                                            {currentUserId === userId || currentUserId === item.userId
                                                ? <></>
                                                : saveBtnCheck(item)
                                            }
                                        </div>)
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
                                        <div className="container">
                                            <Link to={`/items/detail/${save.itemId}`}>
                                                <img key={`userItemSave--${save.id}`} className="itemTile" alt="item" src={save.item.itemImage} />
                                            </Link>
                                            {currentUserId === userId || currentUserId === save.item.userId
                                                ? <></>
                                                : save.userId === currentUserId
                                                    ? <div className="top-right"><Button icon className="suitCaseSaveBtn"><Icon circular inverted color='teal' name='suitcase' /></Button></div>
                                                    : saveBtnCheck(save.item)
                                            }

                                        </div>
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



/*
*/