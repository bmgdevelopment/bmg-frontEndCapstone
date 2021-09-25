import React from "react"
import { Link } from "react-router-dom"
import { Container, Icon, List, Segment } from 'semantic-ui-react'
import "./NavBar.css"

export const Footer = () => {
    return (
        <div>


    <Segment inverted vertical>
      <Container textAlign='center'>
        <Link className="bmgRepoLink" to={{ pathname: "https://github.com/bmgdevelopment/bmg-frontEndCapstone" }} target="_blank">
        <img className="bmgLogo" src="https://i.postimg.cc/1RjXCC0d/BMG-DEVELOPMENT-White.png" alt="BMG Dev Logo"/>
        </Link>
        <br/>
        <br/>
        <Link style={{ marginTop: '-20px ', marginBottom: '10px'}} className="bmgRepoLink" to={{ pathname: "https://github.com/bmgdevelopment/bmg-frontEndCapstone" }} target="_blank">
        Brittany Garrett | Trendago Github Repo
        </Link>
        <br/>
   
      </Container>
    </Segment>
  </div>

   
    )
}

//MAY NEED ANOTHER FOOTER FOR BEFORE LOGIN VIEW
//INCLUDES CUSTOMER REVIEWS/ABOUT/CONTACT US/ GITHUB LINK/ CREATED BY BMG

