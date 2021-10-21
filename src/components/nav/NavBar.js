import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import plainLogoClear from "../images/plainLogoClear.png"
import { UserContext } from "../user/UserProvider"
import { Icon, Button, Popup } from 'semantic-ui-react'
import "./NavBar.css"

export const NavBar = () => {
    const { users, getUsers } = useContext(UserContext)
    const [trendagoUser, setUser] = useState({ region: {}, profileURL: {} })

    const history = useHistory()
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))

    useEffect(() => {
        getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const thisUser = users.find(user => user.id === currentLoggedInUserId) || { region: {}, profileURL: {} }
        setUser(thisUser)
    }, [currentLoggedInUserId, users])

    const Logout = () => {
        history.push("/login")
        sessionStorage.removeItem("trendago_user")
    }

    return (
        <>
            <nav className="topNav">
                <div className="logoDiv">
                    <Link className="" to="/">
                        <img className="trendagoLogo" alt="trendagoLogo" src={plainLogoClear} />
                    </Link>
                </div>

                <ul className="navUL">
                    <div className="allNavLi">

                        <li className="aNavLink">
                            <Link className="" to="/">Explore</Link>
                        </li>
                        |
                        <li className="aNavLink">
                            <Link className="" to="/trendyTravelers">Trendy Travelers</Link>
                        </li>
                        |
                        <li className="aNavLink">
                            <Link className="" to="/customerReviews">About</Link>
                        </li>
                        |
                        <li className="aNavLink">
                            <Link className="" to="/login" onClick={Logout}>Logout</Link>
                        </li>
                    </div>

                    <div className="navSection1">


                        {!trendagoUser.profileURL.length ? <div className="ui active centered inline loader"></div> :


                            <Link to={`/trendyTravelers/detail/${trendagoUser.id}`} className="profilePicDirectLink" key={`userNameLink--${trendagoUser.id}`}>
                                {<Popup
                                    trigger={<img key="smallIconProfilePic" className="tinyProfileLink" alt="tinyProfileLink" src={trendagoUser.profileURL} />}
                                    content="My Closet"
                                    basic
                                />}
                            </Link>
                        }

                        <Link to="/items/create" className="addItemFormLink">
                            {<Popup
                                trigger={<Button icon><Icon circular inverted color='white' name='add' /></Button>}
                                content="Create New Item"
                                basic
                            />}
                        </Link>

                    </div>
                </ul>
            </nav>
        </>
    )
}
