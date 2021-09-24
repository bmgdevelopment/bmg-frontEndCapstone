import React from "react"
import { Link } from "react-router-dom"
import { Container, Icon, List, Segment } from 'semantic-ui-react'
import "./NavBar.css"

export const Footer = () => {
    return (
        <div>


    <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
      <Container textAlign='center'>
        <Link className="bmgRepoLink" to={{ pathname: "https://github.com/bmgdevelopment/bmg-frontEndCapstone" }} target="_blank">
        {/* <Link to={{ pathname: "https://github.com/bmgdevelopment/bmg-frontEndCapstone" }} target="_blank" /> */}
        <img className="bmgLogo" src="https://i.postimg.cc/1RjXCC0d/BMG-DEVELOPMENT-White.png" alt="BMG Dev Logo"/>
        </Link>
        <br/>
        <br/>
        <Link className="bmgRepoLink" to="https://github.com/bmgdevelopment/bmg-frontEndCapstone">
        Brittany Garrett | Github Link
        </Link>
        <br/>
   
      </Container>
    </Segment>
  </div>

   
    )
}

//MAY NEED ANOTHER FOOTER FOR BEFORE LOGIN VIEW
//INCLUDES CUSTOMER REVIEWS/ABOUT/CONTACT US/ GITHUB LINK/ CREATED BY BMG

