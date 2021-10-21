import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { Button, Divider, Form, Grid, Segment, Container } from 'semantic-ui-react'
import "./Login.css"
import bmgBlue from '../images/bmgBlue.png'

const apiURL = "http://localhost:7001"

export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }

    const existingUserCheck = () => {
        return fetch(`${apiURL}/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false) //user[0] sets the right match to the index 0
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    // The user id is saved under the key trendago_user in sessionStorage. Change below if needed!
                    sessionStorage.setItem("trendago_user", exists.id)
                    history.push("/")
                } else {
                    window.alert("User does not exist, please register for access")
                }
            })
    }

    return (
        <>
            <div className="login-body">
                <main className="container--login">

                    <section className="formSection">
                        <h1 className="loginTitle">TRENDAGO</h1>

                        <div className="reactLoginForm">
                            <Segment placeholder style={{ minHeight: '0' }}>
                                <Grid columns={2} relaxed='very' stackable>
                                    <Grid.Column>
                                        <Form>
                                            <Form.Input
                                                icon='user'
                                                id="email"
                                                className="form-control"
                                                iconPosition='left'
                                                label='Email Address'
                                                placeholder='Email Address'
                                                value={loginUser.email}
                                                onChange={handleInputChange}
                                            />


                                            <Button onClick={handleLogin} type="submit" className="login" content='Login' primary />
                                        </Form>
                                    </Grid.Column>

                                    <Grid.Column verticalAlign='middle'>
                                        <Link to="/register" className="register">
                                            <Button content='Register' icon='signup' size='big' />
                                        </Link>
                                    </Grid.Column>
                                </Grid>

                                <Divider vertical>Or</Divider>
                            </Segment>

                        </div>
                    </section>
                </main>

                <div>
                    <Segment inverted vertical style={{ margin: '0', background: 'transparent' }}>
                        <Container textAlign='center' >
                            <Link className="bmgRepoLink" to={{ pathname: "https://github.com/bmgdevelopment/bmg-frontEndCapstone" }} target="_blank">
                                <img className="bmgLogo repoBMG" style={{ height: '100px' }} src={bmgBlue} alt="BMG Dev Logo" />
                            </Link>
                        </Container>
                    </Segment>
                </div>
            </div>
        </>)
}
