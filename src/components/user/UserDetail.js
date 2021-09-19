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
    const { saves, getSaves } = useContext(SaveContext)
    const { regions, getRegions } = useContext(RegionContext)

    const [user, setUser] = useState({ region: {}, profileURL: {} })
    const [allUserItems, setAllUserItems] = useState([])
    const [allUserSaves, setAllUserSaves] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("trendago_user"))
    const { userId } = useParams()

    useEffect(() => {
        getUsers()
        getItems()
        getRegions()
        getSaves()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const thisUser = users.find(user => user.id === parseInt(userId)) || { region: {} }
        setUser(thisUser)
    }, [userId, users])

    useEffect(() => {
        const userItems = items.filter(item => item.userId === parseInt(userId));
        setAllUserItems(userItems)
    }, [items, userId])

    useEffect(() => {
        const userSaves = saves.filter(save => save.userId === parseInt(userId));
        setAllUserSaves(userSaves)
    }, [saves, userId])

    const noSaveBtn = (item) => {
        return item.userId === currentUserId && <></>
    }

    const userItemMatch = (save) => {
        let userImgLink;
        // debugger
        for (const sortedUser of users) {
            for (const region of regions) {
                userImgLink = save.userId === sortedUser.id ?
                    <div className="tileInfoDiv">
                        <p className="tileDetail">
                            <Link to={`/trendyTravelers/detail/${sortedUser.id}`} key={`userNameLink--${sortedUser.id}`}>
                                <img src={sortedUser.profileURL} alt="profileIMG" className="profileIMGicon" key={`profileIMGicon--${sortedUser.id}`} />
                                {sortedUser.firstName} {sortedUser.lastName}<br />
                                <p className="tileRegion">{region.name}</p>
                            </Link>
                        </p>
                    </div>
                    :
                    <></>
            }
        }
        return userImgLink;
    }


    /*
    {save.userId === user.Id ? <div className="tileInfoDiv">
                            <p className="tileDetail">
                                <Link to={`/trendyTravelers/detail/${user.id}`} key={`userNameLink--${user.id}`}>
                                    <img src={user.profileURL} alt="profileIMG" className="profileIMGicon" key={`profileIMGicon--${user.id}`} />
                                    {user.firstName} {user.lastName}<br />
                                    <p className="tileRegion">{region.name}</p>
                                </Link>
                            </p>
                        </div> : <></>}
    */

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
                                    Member since {`${user.dateJoined}`} from {user.region.name}
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
                        allUserItems.length > 0 ?
                            <div className="trendTravH2Div">
                                <h1 className="trendyTravlersH2 userItemsH2">{user.firstName}'s Trends</h1>
                            </div> : <></>
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
                                                {currentUserId === user.id || currentUserId === item.userId ? noSaveBtn(item) : <div className="top-right"><Button icon><Icon circular inverted color='grey' name='suitcase' /></Button></div>}
                                            </Link>
                                        </div>)
                                })
                        }
                    </div>

                    {/* USER'S SAVED TRENDS THAT THEY DO NOT OWN */}
                    {/* ------------------------------------ */}
                    {
                        allUserSaves.length > 0 ?
                            <div className="trendTravH2Div">
                                <h1 className="trendyTravlersH2 saveH2">{user.firstName}'s Saved Trends</h1>
                            </div> : <></>
                    }

                    <div className="organizeTilesDiv">
                        {
                            allUserSaves.map(save => {
                                return (
                                    <>
                                        <div className="container">
                                            <Link to={`/items/detail/${save.itemId}`}>
                                                <img key={`userItemSave--${save.id}`} className="itemTile" alt="item" src={save.item.itemImage} />
                                                {/* {currentUserId === save.userId ? <><div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /></Button></div></> : <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div>} */}
                                           
                                           { currentUserId === save.userId && <> <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /></Button></div></>}
                                           { currentUserId !== save.userId && <> <div className="top-right"><Button icon><Icon circular inverted color='grey' name='suitcase' /></Button></div></>}
                                           {/* { currentUserId === item.userId && <></>} */}
                                          
                                            </Link>
                                            {userItemMatch(save)}

                                            {/* 
                                    { currentUserId === user.id && <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div>}
                                    */}

                                            {/* 
                                           
                                                <div className="tileInfoDiv">
                                                <p className="tileDetail">
                                                    <Link to={`/trendyTravelers/detail/${save.user.id}`} key={`userNameLink--${save.user.id}`}>
                                                        <img src={save.user.profileURL} alt="profileIMG" className="profileIMGicon" key={`profileIMGicon--${save.user.id}`} />
                                                        {save.user.firstName} {save.user.lastName}<br />
                                                        <p className="tileRegion">{save.item.userId}</p>
                                                    </Link>
                                                </p>
                                            </div> 
                                            */}

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
       {
        allUserSaves.map(save => {
            return (
                <img key={`userItemSave--${save.id}`} className="itemTile" alt="item" src={save.item.itemImage}></img>
            )
        })
    }

    // import  mustPackGrayFalse from "..images/mustPackGrayFalse.png"
// import mustPackStarTrue from "../images/mustPackStarTrue.png"

        <div className="container">
            <img key={`userItemSave--${save.id}`} className="itemTile" alt="item" src={save.item.itemImage} />
            {item.saved === true ? <div className="top-right"><button classname="redHeartBtn">❤️</button></div> : <div className="top-right"><button classname="outlineHeartBtn">♡</button></div> }
        </div>


*/