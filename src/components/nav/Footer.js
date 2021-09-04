import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const Footer = () => {
    return (
        <nav className="">
            <ul className="">
                <li className="">
                    <Link className="" to="/bmgGithub"></Link>
                </li>
                <li className="">Created by BMGDevelopment <Link className="" to="/bmgGithub"></Link>
                </li>
                <li className="">
                    <Link className="" to="/backToTop"></Link>
                </li>
            </ul>
        </nav>
    )
}

//MAY NEED ANOTHER FOOTER FOR BEFORE LOGIN VIEW
//INCLUDES CUSTOMER REVIEWS/ABOUT/CONTACT US/ GITHUB LINK/ CREATED BY BMG

