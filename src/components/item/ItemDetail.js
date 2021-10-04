import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { SaveContext } from "../save/SaveProvider"
import { UserContext } from "../user/UserProvider"
import { Icon, Button } from 'semantic-ui-react'
import "./Item.css"

export const ItemDetail = (props) => {
    const { users, getUsers } = useContext(UserContext)
    const { userSaves, getSavesByUserId, saveItem, deleteSave } = useContext(SaveContext)

    const { item } = props

    const [itemUser, setItemUser] = useState({ region: {}, profileURL: {} })
    const [state, setState] = useState({})
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))

    useEffect(() => {
        getUsers()
        getSavesByUserId(currentLoggedInUserId)
    }, [])

    useEffect(() => {
        const thisUser = users.find(user => user.id === item.userId) || { region: {}, profileURL: {} }
        setItemUser(thisUser)
    }, [item.userId, users])

    const handleSave = () => {
        const itemIdOfSave = item.id
        const saveUserId = currentLoggedInUserId

        if ( props.isSaved ) {
            deleteSave(props.savedItemId)
                .then(() =>{ 
                    setState({}) //used to re-render component smoothly
                } ) 
                console.log("removedSave")
                getSavesByUserId(currentLoggedInUserId)
            } else {
                saveItem({
                    itemId: itemIdOfSave,
                    userId: saveUserId
                })
                .then(() =>{ 
                    setState({}) //used to re-render component smoothly
                } )
                console.log("addedSave")
                getSavesByUserId(currentLoggedInUserId)
        }
    }

    return (
        <>
            <div className="organizeTilesDiv">

                <div className="container">
                    <Link to={`/items/detail/${item.id}`}>
                        <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                    </Link>

                    {item.userId === currentLoggedInUserId ?
                        <></>
                        :
                        props.isSaved ?
                            <div className="top-right"><Button icon className="suitCaseSaveBtn"><Icon circular inverted color='teal' name='suitcase' onClick={handleSave} /></Button></div>
                            :
                            <div className="top-right"><Button icon className="suitCaseSaveBtn"><Icon circular inverted name='suitcase' onClick={handleSave} /></Button></div>
                    }

                    {!itemUser.profileURL
                        ? <div class="ui active centered inline loader"></div>
                        :
                        <div className="tileInfoDiv">
                            <div className="tileDetail">
                                <Link to={`/trendyTravelers/detail/${itemUser.id}`} key={`userNameLink--${itemUser.id}`}>
                                    <img src={itemUser.profileURL} alt="profileIMG" className="profileIMGicon" key={`profileIMGicon--${itemUser.id}`} />
                                    {itemUser.firstName} {itemUser.lastName}<br />
                                    <p className="tileRegion">{itemUser.region.name}</p>
                                </Link>
                            </div>
                        </div>
                    }

                </div>

            </div>
        </>
    )
}