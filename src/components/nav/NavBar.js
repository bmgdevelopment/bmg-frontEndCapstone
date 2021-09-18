import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import plainLogoClear from "../images/plainLogoClear.png"
import { UserContext } from "../user/UserProvider"
import { Icon, Button } from 'semantic-ui-react'

import "./NavBar.css"

export const NavBar = () => {
    const { users, getUsers } = useContext(UserContext)
    const [trendagoUser, setUser] = useState({ region: {}, profileURL: {} })

    const history = useHistory()
    const currentLoggedInUserId = parseInt(sessionStorage.getItem("trendago_user"))

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        const thisUser = users.find(user => user.id === currentLoggedInUserId) || { region: {}, profileURL: {} }
        setUser(thisUser)
    }, [currentLoggedInUserId, users])

    const Logout = () => {
        sessionStorage.removeItem("trendago_user")
        history.push("/login")
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
                            <Link className="" to="/customerReviews">Customer Reviews</Link>
                        </li>
                        |
                        <li className="aNavLink">
                            <Link className="" to="/about">About</Link>
                        </li>
                        |
                        <li className="aNavLink">
                            <Link className="" to="/contactUs">Contact Us</Link>
                        </li>
                        |
                        <li className="aNavLink">
                            <Link className="" onClick={Logout}>Logout</Link>
                        </li>
                    </div>
                    <div className="navSection1">
                        <Link to={`/trendyTravelers/detail/${trendagoUser.id}`} className="profilePicDirectLink" key={`userNameLink--${trendagoUser.id}`}>
                            <img key="smallIconProfilePic" className="tinyProfileLink" alt="tinyProfileLink" src={trendagoUser.profileURL} />
                        </Link>
                        <Link to="items/create" className="addItemFormLink">
                        <Button icon><Icon circular inverted color='white' name='suitcase' /></Button>
                        </Link>
                    </div>
                </ul>
            </nav>
        </>
    )
}

