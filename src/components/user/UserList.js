import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"


export const UserList = () => {
    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // debugger
    return (
        <>
            <div className="allUserDiv">
                <div className="trendTravH2Div">
                    <h1 className="trendyTravlersH2">Trendy Travlers</h1>
                </div>
                {users.map(user => {
                    return (
                        <div className="oneUserInfo" key={user.id}>
                            <div className="userProfileIMG" key={`userProfileURL--${user.id}`}>
                                <img src={user.profileURL} alt="profileIMG" className="profileIMG" key={`profileIMG--${user.id}`} />
                            </div>

                            <div className="profileTextBox">
                                <div className="userName" key={`userName--${user.id}`}>
                                    <h2 className="userH2" key={`userH2--${user.id}`}>{user.firstName} {user.lastName}</h2>
                                </div>

                                <div className="userRegionDiv" key={`region--${user.region.id}`}>
                                    <p className="userRegionP" key={`userRegionName--${user.id}`}>Region: {user.region.name}</p>
                                    <p className="userDateJoinedP" key={`userDateJoined--${user.id}`}>Member since {user.dateJoined}</p>
                                </div>

                              
                            </div>

                        </div>
                    )
                })}

            </div>
        </>
    )
}