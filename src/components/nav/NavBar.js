import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()

    const Logout = () => {
        sessionStorage.removeItem("trendago_user")
        history.push("login")
    }

    return (
        <nav className="">
            <ul className="">
                <button>
                    <li>
                        <Link className="" to="/">
                            <img className="" alt="" to="/home" src=""/>
                        </Link>
                    </li>
                </button>

                <li className="">
                    <Link className="" to="/"></Link>
                </li>
                <li className="">
                    <Link className="" to="/profile">Profile</Link>
                </li>
                <li className="">
                    <Link className="" to="/customerReviews">Customer Reviews</Link>
                </li>
                <li className="">
                    <Link className="" to="/about">About</Link>
                </li>
                <li className="">
                    <Link className="" to="/contactUs">Contact Us</Link>
                </li>
                <li className="">
                    <Link className="" onClick={Logout}>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

