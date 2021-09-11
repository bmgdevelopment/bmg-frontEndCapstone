import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import plainLogoClear from "../images/plainLogoClear.png"

export const NavBar = () => {
    const history = useHistory()

    const Logout = () => {
        sessionStorage.removeItem("trendago_user")
        debugger
        history.push("/login")
    }

    return (
        <nav className="topNav">
            <div className="logoDiv">
                    <Link className="" to="/">
                        <img className="trendagoLogo" alt="trendagoLogo" src={plainLogoClear} />
                    </Link>
              
            </div>

            <ul className="navUL">
                <div className="allNavLi">

                    {/* <li className="aNavLink">
                    <Link className="" to="/"></Link>
                </li> */}
                    <li className="aNavLink">
                        <Link className="" to="/profile">My Travel Trends</Link>
                    </li>
                    <li className="aNavLink">
                        <Link className="" to="/trendyTravelers">Trendy Travelers</Link>
                    </li>
                    <li className="aNavLink">
                        <Link className="" to="/customerReviews">Customer Reviews</Link>
                    </li>
                    <li className="aNavLink">
                        <Link className="" to="/about">About</Link>
                    </li>
                    <li className="aNavLink">
                        <Link className="" to="/contactUs">Contact Us</Link>
                    </li>
                    <li className="aNavLink">
                        <Link className="" onClick={Logout}>Logout</Link>
                    </li>
                </div>

            </ul>
        </nav>
    )
}

