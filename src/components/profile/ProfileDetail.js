import React, { useEffect, useContext, useState } from "react"
import { ItemContext } from "../outfit/ItemProvider"
import { UserContext } from "../user/UserProvider"
import { SaveContext } from "../save/SaveProvider"
import { Button, Icon } from 'semantic-ui-react'

import "../Trendago.css"

export const ProfileDetail = () => {
    const { items, getItems } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)
    const { saves, getSaves } = useContext(SaveContext)

    const [currentUser, setCurrentUser] = useState({ region: {}, profileURL: {} })
    const [allUserItems, setAllUserItems] = useState([])
    const [allUserSaves, setAllUserSaves] = useState([])

    const currentUserId = parseInt(sessionStorage.getItem("trendago_user"))

    useEffect(() => {
        getUsers().then(() => {
            const thisUser = users.find(user => user.id === currentUserId) || { region: {}, profileURL: {} }
            setCurrentUser(thisUser)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getItems().then(() => {
            const userItems = items.filter(item => item.userId === currentUserId); 
            setAllUserItems(userItems)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        getSaves().then(() => {
            const userSaves = saves.filter(save => save.userId === currentUserId);
            setAllUserSaves(userSaves)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="aside_and_mainFeed">

                <div className="mainFeedHome">

                    <div>
                        <div className="profileBanner">
                            <img src={currentUser.region.regionImage} alt="profileIMG" className="profileBannerBkgd" key={`profileIMGBanner--${currentUser.id}`} />
                        </div>

                        <div className="userProfileTitle">
                            <h2 className="userProfileH2">{currentUser.firstName} {currentUser.lastName}</h2>
                            <p className="profileDetailsP">
                                Member since {`${currentUser.dateJoined}`} from {currentUser.region.name}    
                            </p>
                        </div>

                        <div className="userProfileIMGSolo" key={`userProfileURL--${currentUser.id}`}>
                            <img src={currentUser.profileURL} alt="profileIMG" className="userProfileIMGBanner" key={`profileIMG--${currentUser.id}`} />
                        </div>

                    </div>

                    <div className="organizeTilesDiv">
                        {
                           allUserItems.length === 0 && allUserSaves.length === 0 ? <div className="noItemsDiv"><p className="noItemsP">{`${currentUser.firstName} has yet to add an item`}</p></div> :
                           allUserItems.map(item => {
                               return (
                                   <div className="container">
                                       <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                                       {item.saved === true ? <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase'/></Button></div> : <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase'/></Button></div>}
                                   </div>)
                           })
                        }
                        {
                               allUserSaves.map(save => {
                                return (
                                    <>
                                        <div className="container">
                                            <img key={`userItemSave--${save.id}`} className="itemTile" alt="item" src={save.item.itemImage} />
                                            <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase'/></Button></div>                                        
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="backToTopDiv">
                <button className="backToTop">⬆</button>
            </div>
        </>
    )


} // end of ItemList