import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserProvider"
import { ItemContext } from "../item/ItemProvider"
import { SaveContext } from "../save/SaveProvider"
import { useParams } from "react-router-dom"
import { Button, Icon } from 'semantic-ui-react'

import "./User.css"

export const UserDetail = () => {
    const { users, getUsers } = useContext(UserContext)
    const { items, getItems } = useContext(ItemContext)
    const { saves, getSaves } = useContext(SaveContext)

    const [user, setUser] = useState({ region: {}, profileURL: {} })
    const [allUserItems, setAllUserItems] = useState([])
    const [allUserSaves, setAllUserSaves] = useState([])

    const { userId } = useParams()

    useEffect(() => {
        getUsers().then(() => {
            const thisUser = users.find(user => user.id === parseInt(userId)) || { region: {} }
            setUser(thisUser)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId, users])

    useEffect(() => {
        getItems().then(() => {
            const userItems = items.filter(item => item.userId === parseInt(userId));
            setAllUserItems(userItems)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items])

    useEffect(() => {
        getSaves().then(() => {
            const userSaves = saves.filter(save => save.userId === parseInt(userId));
            setAllUserSaves(userSaves)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [saves])

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

<br/>

                        {
                            allUserSaves.length > 0 ?
                                <div className="trendTravH2Div">
                                    <h1 className="trendyTravlersH2 userItemsH2">Your Trends</h1>
                                </div> : <></>
                        }
                    <div className="organizeTilesDiv">
                        {
                            allUserItems.length === 0 && allUserSaves.length === 0 ? <div className="noItemsDiv"><p className="noItemsP">{`${user.firstName} has yet to add an item`}</p></div> :
                                allUserItems.map(item => {
                                    return (
                                        <div className="container">
                                            <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                                            {item.saved === true ? <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /></Button></div> : <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div>}
                                        </div>)
                                })
                        }
                    </div>

                    {
                        allUserSaves.length > 0 ?
                            <div className="trendTravH2Div">
                                <h1 className="trendyTravlersH2 saveH2">Saved Trends</h1>
                            </div> : <></>
                    }
                    
                    <div className="organizeTilesDiv">
                        {
                            allUserSaves.map(save => {
                                return (
                                    <>
                                        <div className="container">
                                            <img key={`userItemSave--${save.id}`} className="itemTile" alt="item" src={save.item.itemImage} />
                                            <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /></Button></div>
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