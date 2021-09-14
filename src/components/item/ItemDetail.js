import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { ItemContext } from "./ItemProvider"
import { UserContext } from "../user/UserProvider"
import { SaveContext } from "../save/SaveProvider"
import { Icon, Button } from 'semantic-ui-react'
import "./Item.css"

export const ItemDetail = (props) => {
    const { items } = useContext(ItemContext)
    const { users, getUsers } = useContext(UserContext)
    const { saves, getSaves, saveItem, deleteSave } = useContext(SaveContext)
    const history = useHistory()
    const [item, setItem] = useState({ user: {}, region: {} })
    const [itemUser, setItemUser] = useState({ region: {}, profileURL: {} })
    const [allUserSaves, setAllUserSaves] = useState([])
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))

    const { itemId } = useParams()

    useEffect(() => {
        getSaves()
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const thisUser = users.find(user => user.id === item.userId) || { region: {}, profileURL: {} }
        setItemUser(thisUser)
    }, [item.userId, users])

    useEffect(() => {
        const userSaves = saves.filter(save => save.userId === currentLoggedInUserId) || []
        setAllUserSaves(userSaves)
    }, [currentLoggedInUserId, saves])

    useEffect(() => {
        if (props.item) {
            setItem(props.item)
        } else {
            const thisItem = items.find(item => item.id === parseInt(itemId)) || { user: {}, region: {} }
            setItem(thisItem)
        }
    }, [item, itemId, items, props.item])

    // const saveIconCheck = () => {
    //     if (props.item.userId === currentLoggedInUserId) {
    //         allUserSaves.map(save => {
    //             if (save.itemId === props.item.id) {
    //                 return <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /> </Button></div>
    //             } else {
    //                 return <></>
    //             }
    //         })
    //     } else {
    //         return <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div>
    //     }
    // }

    // const saveIconCheck = () => {
    //     if (props.item.userId === currentLoggedInUserId) {
    //         return <></>
    //     } else if (props.item.userId === !currentLoggedInUserId) {
    //         allUserSaves.map(save => {
    //             if (save.itemId === props.item.id && save.userId === currentLoggedInUserId) {
    //                 return  <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /> </Button></div>
    //             }
    //         })
    //     } else {
    //         return <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div>
    //     }
    // }

    const saveIconCheck = () => {
        if (props.item.userId === currentLoggedInUserId) {
            return <></>
        } else if (props.item.userId === !currentLoggedInUserId) {
            let savingBtn;
            // eslint-disable-next-line array-callback-return
            allUserSaves.map(save => {
                save.userId === currentLoggedInUserId ?
                    savingBtn = <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { deleteSave(save.id).then(() => history.push("/")) }} /></Button></div>
                    :
                    savingBtn = <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => { saveItem(item).then(() => history.push("/")) }} /> </Button></div>
            })
            return savingBtn
        } 
    }

    return (
        <>
            <div className="organizeTilesDiv">

                <div className="container">
                    <Link to={`/items/detail/${item.id}`}>
                        <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                    </Link>
                    {/* {item  ? noSaveBtn() : <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /> </Button></div>} */}
                    {/* {save.userId === currentLoggedInUserId ? <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => {deleteSave(save.id).then(() => history.push("/"))}}/></Button></div> : <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => {saveItem(item).then(() => history.push("/"))}}/> </Button></div>} */}
                    {saveIconCheck()}


                    <div className="tileInfoDiv">
                        <p className="tileDetail">
                            <Link to={`/trendyTravelers/detail/${itemUser.id}`} key={`userNameLink--${itemUser.id}`}>
                                <img src={itemUser.profileURL} alt="profileIMG" className="profileIMGicon" key={`profileIMGicon--${itemUser.id}`} />
                                {itemUser.firstName} {itemUser.lastName}<br />
                                <p className="tileRegion">{itemUser.region.name}</p>
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

/*
{save.userId === currentLoggedInUserId ? <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => {deleteSave(save.id).then(() => history.push("/"))}}/></Button></div> : <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => {saveItem(item).then(() => history.push("/"))}}/> </Button></div>}

*/