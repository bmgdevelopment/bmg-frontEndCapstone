import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import "./Login.css"

const apiURL = "http://localhost:7001"

export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)
    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`${apiURL}/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false) //user[0] sets the right match to the index 0 ?
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                    sessionStorage.setItem("trendago_user", exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <div className="login-body">
            <main className="container--login">
                <dialog className="dialog dialog--auth" open={existDialog}>
                    <div>User does not exist</div>
                    <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
                </dialog>

                <section className="formSection">
                    <form className="form--login" onSubmit={handleLogin}>
                        <h1 className="loginTitle">TRENDAGO</h1>
                        <h4>Please sign in</h4>

                        <div className="loginFields">

                            <fieldset>
                                <label htmlFor="inputEmail"> Email address </label>
                                <input type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    required autoFocus
                                    value={loginUser.email}
                                    onChange={handleInputChange} />
                            </fieldset>

                            <fieldset>
                                <button type="submit" className="sign-in">
                                    Sign in
                                </button>
                            </fieldset>
                        </div>

                        <div>
                            <Segment placeholder>
                                <Grid columns={2} relaxed='very' stackable>
                                    <Grid.Column>
                                        <Form onSubmit={handleLogin}>
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
                                            {/* <Form.Input
                                                icon='lock'
                                                iconPosition='left'
                                                label='Password'
                                                type='password'
                                            /> */}

                                            <Button type="submit" className="login" content='Login' primary />
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
                    </form>
                </section>
                
                <section className="link--register">
                    <Link to="/register" className="register">Create an account</Link>
                </section>
            </main>
        </div>
    )
}
