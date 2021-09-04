import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import "./User.css"

export const UserList = () => {
    const { users, getUsers } = useContext(UserContext)

    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    debugger
    return (
        <>
            <div className="allUserDiv">
                {users.map(user => {
                    return (
                        <div className="oneUserInfo" key={user.id}>
                            <div className="userProfileURL" key={`userProfileURL--${user.id}`}>
                                <img src={user.profileURL} alt="" className="profileIMG" key={`profileIMG--${user.id}`} />
                            </div>
                            
                            <div className="userName" key={`userName--${user.id}`}>
                                <h2 className="userH2" key={`userH2--${user.id}`}>{user.firstName} {user.lastName}</h2>
                            </div>

                            <div className="regionName" key={`region--${user.region.id}`}>
                                <p className="userRegionP" key={`userRegionName--${user.region.name}`}></p>
                            </div>

                            <div className="userDateJoined" key={`userDateJoined--${user.id}`}>
                                <p className="userDateJoinedP" key={`userDateJoined--${user.region.name}`}></p>
                            </div>

                        </div>
                    )
                })}

            </div>
        </>
    )
}