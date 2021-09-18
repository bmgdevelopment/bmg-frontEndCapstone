import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory, Link } from "react-router-dom"
import { SaveContext } from "../save/SaveProvider"
import { ItemContext } from "./ItemProvider"
import { UserContext } from "../user/UserProvider"
import { Icon, Button } from 'semantic-ui-react'
import "./Item.css"


// const SaveIconCheck = (props) => {
//     const saved = props.saves.find(save => save.userId === parseInt(sessionStorage.getItem("trendago_user")))
// // debugger
//     if (props.item.user.id !== parseInt(sessionStorage.getItem("trendago_user"))) {

//         if (saved) {
//             console.log("saved")
//             return <div className="top-right">
//                 <Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { props.deleteSave(saved.id).then(() => props.history.push("/")) }} /></Button>
//             </div>
//         } else {
//             console.log("not saved");
//             return <div className="top-right">
//                 <Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => { props.saveItem(props.item).then(() => props.history.push("/")) }} /> </Button>
//             </div>
//         }
//     } 
//     return null
// }


export const ItemDetail = (props) => {
    const { items } = useContext(ItemContext)
    // const { itemId } = useParams()
    const { users, getUsers } = useContext(UserContext)
    const { saveItem, deleteSave } = useContext(SaveContext)
    const history = useHistory()
    // const [allUserSaves, setAllUserSaves] = useState([])

    const [item] = useState(props.item || { user: {}, region: {} })
    const [allUserSaves] = useState(props.allUserSaves || [])
    const [itemUser, setItemUser] = useState({ region: {}, profileURL: {} })
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))
    // const [isSaved, setIsSaved] = useState(false)

    useEffect(() => {
        getUsers()
        // getSaves()
    }, [])

    // useEffect(() => { }, [allUserSaves])


    // useEffect(() => {
    //     const userSaves = saves.filter(save => save.userId === currentLoggedInUserId) || []
    //     setAllUserSaves(userSaves)
    //     console.log(saves)
    //     console.log(userSaves)
    //     console.log(allUserSaves)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    // useEffect(() => {
    //     for (const save of allUserSaves) {
    //         // debugger
    //         if (save.userId === currentLoggedInUserId && save.itemId === item.id) {
    //             setIsSaved(true)
    //             console.log(isSaved)
    //         }
    //     }
    // }, [allUserSaves, currentLoggedInUserId, isSaved, item.id])

    useEffect(() => {
        const thisUser = users.find(user => user.id === item.userId) || { region: {}, profileURL: {} }
        setItemUser(thisUser)
    }, [item.userId, users])


    const saveIconCheck = (item) => {
        console.log(allUserSaves)
        if (item.userId !== currentLoggedInUserId) {

            for (const save of allUserSaves) {
                // debugger
                if (save.itemId === item.id && save.userId === currentLoggedInUserId) {
                    // console.log("teal")
                    return <div className="top-right">
                        <Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { deleteSave(save.id).then(() => history.push("/")) }} /></Button>
                    </div>
                } else if (save.itemId !== item.id) {
                    return <div className="top-right">
                        <Button icon><Icon circular inverted color='grey' name='suitcase' onClick={() => { saveItem(item).then(() => history.push("/")) }} /> </Button>
                    </div>
                } else {
                    return <></>
                }
            }
        }

    }


    //     const saveIconCheck = (item) => {
    //         console.log(allUserSaves)
    //         // debugger
    //          const check = allUserSaves.map(save => {
    //            if (save.itemId === item.id && save.userId === currentLoggedInUserId) {
    //                 // console.log("teal")
    //                 return <div className="top-right">
    //                     <Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { deleteSave(save.id).then(() => history.push("/")) }} /></Button>
    //                 </div>
    //             } else if (save.itemId !== item.id && item.userId !== currentLoggedInUserId) {
    //                 return <div className="top-right">
    //                     <Button icon><Icon circular inverted color='grey' name='suitcase' onClick={() => { saveItem(item).then(() => history.push("/")) }} /> </Button>
    //                 </div>
    //             } else {
    //                 return <></>
    //             }

    //     })
    //     return check
    // }


    // const savedItemBtn = () => {
    //     return <div className="top-right">
    //         <Button icon><Icon circular inverted color='teal' name='suitcase' /> </Button>
    //     </div>
    // }

    // const unsavedItemBtn = () => {
    //     return <div className="top-right">
    //         <Button icon><Icon circular inverted color='white' name='suitcase' /> </Button>
    //     </div>
    // }

    // const saveOrUnsaveEvent = () => {
    //     // debugger
    //     // console.log(allUserSaves)
    //     for (const save of allUserSaves) {
    //         if (save.userId === currentLoggedInUserId && save.itemId === item.id) {
    //             //console.log("already saved")
    //             savedItemBtn()
    //             deleteSave(save.id)
    //             .then(() => history.push("/"))
    //         } else if (save.itemId !== item.id && item.userId !== currentLoggedInUserId) {
    //             unsavedItemBtn()
    //             saveItem({
    //                 userId: currentLoggedInUserId,
    //                 itemId: item.id
    //             })
    //             .then(() => history.push("/"))
    //         } else {
    //          return <></>
    //          }
    //     }
    // }

    return (
        <>
            <div className="organizeTilesDiv">

                <div className="container">
                    <Link to={`/items/detail/${item.id}`}>
                        <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                    </Link>

                    {saveIconCheck(item)}
                    {/* {saveOrUnsaveEvent()} */}

                    {/* {item.userId !== currentLoggedInUserId &&
                        <div className="top-right">
                            <Button icon><Icon circular inverted color='white' name='suitcase' onClick={saveOrUnsaveEvent} /> </Button>
                        </div>
                    } */}

                    {/* {
                        allUserSaves.map(save => {
                
                           return save.userId === currentLoggedInUserId && save.itemId === item.id ?
                                <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { deleteSave(save.id).then(() => history.push("/")) }} /></Button></div>
                                :
                                <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => { saveItem(item).then(() => history.push("/")) }} /> </Button></div>
                        
                        })
                    } */}


                    {/* {item.userId !== currentLoggedInUserId && !isSaved &&
                        <div className="top-right">
                            <Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => { saveItem(item).then(() => history.push("/")) }} /> </Button>
                        </div>
                    }
                    {item.userId !== currentLoggedInUserId && isSaved &&
                        <div className="top-right">
                            <Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { deleteSave(2).then(() => history.push("/")) }} /></Button>
                        </div>
                    } */}

                    <div className="tileInfoDiv">
                        <div className="tileDetail">
                            <Link to={`/trendyTravelers/detail/${itemUser.id}`} key={`userNameLink--${itemUser.id}`}>
                                <img src={itemUser.profileURL} alt="profileIMG" className="profileIMGicon" key={`profileIMGicon--${itemUser.id}`} />
                                {itemUser.firstName} {itemUser.lastName}<br />
                                <p className="tileRegion">{itemUser.region.name}</p>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}




/*

*/

// eslint-disable-next-line no-lone-blocks
/* {
    allUserSaves.map(save => {

        return save.userId === currentLoggedInUserId && save.itemId === item.id ?
            <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { deleteSave(save.id).then(() => history.push("/")) }} /></Button></div>
            :
            <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => { saveItem(item).then(() => history.push("/")) }} /> </Button></div>


    })
} */