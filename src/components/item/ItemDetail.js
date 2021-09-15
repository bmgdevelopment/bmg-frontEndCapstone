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
    const { users, getUsers } = useContext(UserContext)
    const { saves, getSaves, saveItem, deleteSave } = useContext(SaveContext)
    const history = useHistory()

    const [item] = useState(props.item || { user: {}, region: {} })
    const [itemUser, setItemUser] = useState({ region: {}, profileURL: {} })
    const [isSaved, setIsSaved] = useState(false)
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))
    // const [allUserSaves, setAllUserSaves] = useState([])

    const { itemId } = useParams()

    useEffect(() => {
        getSaves()
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     const userSaves = saves.filter(save => save.userId === currentLoggedInUserId) || []
    //     setAllUserSaves(userSaves)
    //     console.log(allUserSaves)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    useEffect(() => {
        for (const save of saves) {
            if (save.user.id === currentLoggedInUserId) {
                console.log(saves)
                setIsSaved(true)
            }
        }
    }, [currentLoggedInUserId, saves])



    useEffect(() => {
        const thisUser = users.find(user => user.id === item.userId) || { region: {}, profileURL: {} }
        setItemUser(thisUser)
    }, [item.userId, users])


    // const saveIconCheck = () => {
    //     if (props.item.userId === currentLoggedInUserId) {
    //         return <></>
    //     } else if (props.item.userId === !currentLoggedInUserId) {
    //         allUserSaves.map(save => {
    //             if (save.itemId === props.item.id && save.userId === currentLoggedInUserId) {
    //                 return <div className="top-right"><Button icon><Icon circular inverted color='teal' name='suitcase' /> </Button></div>
    //             }
    //         })
    //     } else {
    //         return <div className="top-right"><Button icon><Icon circular inverted color='white' name='suitcase' /></Button></div>
    //     }
    // }



    return (
        <>
            <div className="organizeTilesDiv">

                <div className="container">
                    <Link to={`/items/detail/${item.id}`}>
                        <img key={`userItemSave--${item.id}`} className="itemTile" alt="item" src={item.itemImage} />
                    </Link>


                    {item.userId !== currentLoggedInUserId && isSaved &&
                        <div className="top-right">
                            <Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { deleteSave(2).then(() => history.push("/")) }} /></Button>
                        </div>
                    }
                    {item.userId !== currentLoggedInUserId && !isSaved &&

                        <div className="top-right">
                            <Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => { saveItem(item).then(() => history.push("/")) }} /> </Button>
                        </div>
                    }


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
saves.map(save =>  {
return
    {save.userId === currentLoggedInUserId &&
            <div className="top-right">
            <Button icon><Icon circular inverted color='teal' name='suitcase' onClick={() => { deleteSave(2).then(() => history.push("/")) }} /></Button>
        </div>
    }

    {save.userId !== currentLoggedInUserId &&
        <div className="top-right">
            <Button icon><Icon circular inverted color='white' name='suitcase' onClick={() => { saveItem(item).then(() => history.push("/")) }} /> </Button>
        </div>
    }
})


*/