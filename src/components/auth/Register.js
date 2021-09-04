import React, { useState } from "react"
import { useHistory, Link } from "react-router-dom";
import "./Login.css"

const apiURL = "http://localhost:7000"


export const Register = () => {

    const registerDate = Date(Date.now()).slice(0, 15)

    const [registerUser, setRegisterUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "Non-binary",
        profileURL: "🙍🏽‍♀️🙎🏽‍♂️",
        regionId: 0,
        dateJoined: registerDate
    })
    const [conflictDialog, setConflictDialog] = useState(false)
    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`${apiURL}/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length) //🤓 !! means true? 
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    // If your json-server URL is different, please change it below!
                    fetch(`${apiURL}/users`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                // The user id is saved under the key trendago_user in sessionStorage. Change below if needed!
                                sessionStorage.setItem("trendago_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Trendago</h1>

                <div className="">
                    <fieldset>
                        <label htmlFor="firstName"> First Name </label>
                        <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="lastName"> Last Name </label>
                        <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
                    </fieldset>

                    <fieldset>
                        <label htmlFor="inputGender">  </label>
                        <input type="gender" name="gender" id="gender" className="form-control" placeholder="Gender Initial (M/F/N)" required value={registerUser.gender} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputprofileURL">  </label>
                        <input type="profileURL" name="profileURL" id="profileURL" className="form-control" placeholder="Profile URL" required value={registerUser.profileURL} onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputRegionId">   </label>
                        <input type="regionId" name="regionId" id="regionId" className="form-control" placeholder="Select region number (1-7)" required value={registerUser.regionId} onChange={handleInputChange} />
                    </fieldset>
                </div>

                <div className="">
                    <fieldset>
                        <button type="submit"> Complete Registration </button>
                    </fieldset>
                    <fieldset>
                        <p>Have an acount? Click <Link to="/login" className="login">here</Link></p>
                    </fieldset>
                </div>
                
            </form>
        </main>
    )
}
