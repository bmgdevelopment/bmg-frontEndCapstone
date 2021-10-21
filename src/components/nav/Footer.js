import React from "react"
import { Link } from "react-router-dom"
import { Container, Segment } from 'semantic-ui-react'
import "./NavBar.css"

export const Footer = () => {
  return (
    <div>
      <Segment inverted vertical>
        <Container textAlign='center' style={{ paddingBottom: '20px' }}>
          <Link className="bmgRepoLink" to={{ pathname: "https://github.com/bmgdevelopment/bmg-frontEndCapstone" }} target="_blank">
            <img className="bmgLogo" style={{ height: '100px' }} src="https://i.postimg.cc/1RjXCC0d/BMG-DEVELOPMENT-White.png" alt="BMG Dev Logo" />
          </Link>
          <br />

          <Link style={{ marginTop: '-30px ', marginBottom: '20px' }} className="bmgRepoLink" to={{ pathname: "https://github.com/bmgdevelopment/bmg-frontEndCapstone" }} target="_blank">
            Brittany Garrett | Trendago Github Repo
          </Link>
          <br />

        </Container>
      </Segment>
    </div>

  )
}

