import React, { useEffect, useContext, useState } from "react"
import { ItemContext } from "../item/ItemProvider"
import { UserContext } from "../user/UserProvider"
import { SaveContext } from "../save/SaveProvider"
import { Link } from "react-router-dom"
import "../Trendago.css"
import "../user/User.css"

export const ProfileDetail = () => {
    const { items, getItems } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)
    const { saves, getSaves } = useContext(SaveContext)
    const [allUserSaves, setAllUserSaves] = useState([])

    const [currentUser, setCurrentUser] = useState({ region: {}, profileURL: {}, dateJoined: {} })
    const [allUserItems, setAllUserItems] = useState([])
    const currentUserId = parseInt(sessionStorage.getItem("trendago_user"))

    useEffect(() => {
        getUsers()
        getItems()
        getSaves()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const thisUser = users.find(user => user.id === currentUserId) || { region: {}, profileURL: {}, dateJoined: {} }
        setCurrentUser(thisUser)
    }, [currentUserId, users, currentUser])

    useEffect(() => {
        const userItems = items.filter(item => item.userId === currentUserId);
        setAllUserItems(userItems)
    }, [currentUserId, items, allUserItems])

    useEffect(() => {
        const userSaves = saves.filter(save => save.userId === currentUserId);
        setAllUserSaves(userSaves)
    }, [currentUserId, saves, allUserSaves])

    return (

        <>
            <div className="profileAdjust">
                <div className="aside_and_mainFeed">
                    <div className="mainFeedHome">

                        <div>
                            <div className="profileBanner">
                                <img src={currentUser.region.regionImage} alt="profileIMG" className="profileBannerBkgd" key={`profileIMGBanner--${currentUser.id}`} />
                            </div>

                            <div className="userProfileTitle">
                                <h2 className="userProfileH2">{currentUser.firstName} {currentUser.lastName}</h2>
                                <p className="profileDetailsP">
                                    Member since {currentUser.dateJoined} from {currentUser.region.name}
                                </p>
                            </div>

                            <div className="userProfileIMGSolo" key={`userProfileURL--${currentUser.id}`}>
                                <img src={currentUser.profileURL} alt="profileIMG" className="userProfileIMGBanner" key={`profileIMG--${currentUser.id}`} />
                            </div>

                        </div>

                        <br />

                        {
                            allUserItems.length > 0 ?
                                <div className="trendTravH2Div">
                                    <h1 className="trendyTravlersH2 userItemsH2">Your Trends</h1>
                                </div> : <></>
                        }

                        <div className="organizeTilesDiv">
                            {
                                allUserItems.length === 0 && allUserSaves.length === 0 ? <div className="noItemsDiv"><p className="noItemsP">{`${currentUser.firstName} has yet to add an item`}</p></div> :
                                    allUserItems.map(item => {
                                        return (
                                            <div className="container">
                                                <Link to={`/items/detail/${item.id}`}>
                                                    <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                                                </Link>
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
                                                <Link to={`/items/detail/${save.itemId}`}>
                                                    <img key={`userItemSave--${save.id}`} className="itemTile" alt="item" src={save.item.itemImage} />
                                                    {/* <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /></Button></div> */}
                                                </Link>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                <div className="backToTopDiv">
                    <button className="backToTop">???</button>
                </div>
            </div>
        </>
    )


} // end of ProfileDetail