import React, { useContext, useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import plainLogoClear from "../images/plainLogoClear.png"
import { UserContext } from "../user/UserProvider"
import { Icon, Button, Popup } from 'semantic-ui-react'
import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react'

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

                
                {/* <Dropdown item simple color='teal' icon="sidebar">

                    <Dropdown.Menu>
                        <Dropdown.Item>Explore</Dropdown.Item>
                        <Dropdown.Item>Trendy Travelers</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Header>
                        <Link to={`/trendyTravelers/detail/${trendagoUser.id}`} className="profilePicDirectLink" key={`userNameLink--${trendagoUser.id}`}>
                        {trendagoUser.firstName}'s Menu
                        </Link>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            <i className='dropdown icon' />
                            <span className='text'>Profile</span>
                            <Dropdown.Menu>
                                <Dropdown.Item>My Trends</Dropdown.Item>
                                <Dropdown.Item>Add New Item</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Item>
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}

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
                            {<Popup
                                trigger={<img key="smallIconProfilePic" className="tinyProfileLink" alt="tinyProfileLink" src={trendagoUser.profileURL} />}
                                content="My Trends"
                                basic
                            />}

                            {/* <img key="smallIconProfilePic" className="tinyProfileLink" alt="tinyProfileLink" src={trendagoUser.profileURL} /> */}
                        </Link>
                        <Link to="items/create" className="addItemFormLink">
                            {<Popup
                                trigger={<Button icon><Icon circular inverted color='white' name='suitcase' /></Button>}
                                content="Create New Item"
                                basic
                            />}
                            {/* <Button icon><Icon circular color='white' name='suitcase' /></Button> */}
                            {/* <Button icon><Icon circular inverted color='white' name='bars' /></Button> */}
                        </Link>

                    </div>
                </ul>
            </nav>
        </>
    )
}
/*

import { Button, Popup } from 'semantic-ui-react'
    {<Popup
        trigger={<img key="smallIconProfilePic" className="tinyProfileLink" alt="tinyProfileLink" src={trendagoUser.profileURL} />}
        content="My Trends"
        basic
    />}

*/

