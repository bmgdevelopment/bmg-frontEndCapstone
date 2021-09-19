import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./UserProvider"
import "./User.css"


export const UserList = () => {
    const { users, getUsers } = useContext(UserContext)
    const currentUserId = parseInt(sessionStorage.getItem("trendago_user"))


    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const sliceDate = (date) => {
        return date.slice(-4)
    }

    const listFilter = (user) => {
        return (user.id === currentUserId ? <></> :
            <div className="oneUserInfo" key={user.id}>
                <div className="userProfileIMG" key={`userProfileURL--${user.id}`}>
                    <Link to={`/trendyTravelers/detail/${user.id}`} key={`userPicLink--${user.id}`}>
                        <img src={user.profileURL} alt="profileIMG" className="profileIMG" key={`profileIMG--${user.id}`} />
                    </Link>
                </div>

                <div className="profileTextBox">
                    <div className="userName" key={`userName--${user.id}`}>
                        <Link to={`/trendyTravelers/detail/${user.id}`} key={`userNameLink--${user.id}`}>
                            <h2 className="userH2" key={`userH2--${user.id}`}>{user.firstName} {user.lastName}</h2>
                        </Link>
                    </div>

                    <div className="userRegionDiv" key={`region--${user.region.id}`}>
                        <p className="userRegionP" key={`userRegionName--${user.id}`}>Region: {user.region.name}</p>
                        <p className="userDateJoinedP" key={`userDateJoined--${user.id}`}>Member since {sliceDate(user.dateJoined)}</p>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="allUserDiv">
                <div className="trendTravH2Div">
                    <h1 className="trendyTravlersH2">Trendy Travlers</h1>
                </div>
                {users.map(user => {
                    return listFilter(user)
                })}

            </div>
        </>
    )
}