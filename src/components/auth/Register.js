import React, { useState, useEffect, useContext } from "react"
import { useHistory, Link } from "react-router-dom";
import { RegionContext } from "../region/RegionProvider"
import "./Login.css"
import "./Register.css"

const apiURL = "http://localhost:7001"


export const Register = () => {

    const { regions, getRegions } = useContext(RegionContext)
    const registerDate = Date(Date.now()).slice(0, 15)

    useEffect(() => {
        getRegions()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const [registerUser, setRegisterUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        profileURL: "",
        regionId: 0,
        dateJoined: registerDate
    })

    // const [conflictDialog, setConflictDialog] = useState(false)
    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        return fetch(`${apiURL}/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length) //🤓 !! means true? 
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch(`${apiURL}/users`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`,
                            gender: registerUser.gender,
                            profileURL: registerUser.profileURL,
                            regionId: registerUser.regionId,
                            dateJoined: registerDate
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
                // else {
                //     setConflictDialog(true)
                // }
            })

    }

    return (
        <div className="formContainerDiv">
            <div className="colorBanner"></div>

            <section className="registerTitle">
                <h1 className="registrationH1 h1 mb-3 font-weight-normal"> Register for TRENDAGO</h1>
                <p className="registerTitleP">Immediate access upon registration</p>
            </section>

            <hr />

            {/* <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog> */}

            <div className="registrationFields">
                <form className="form--login" onSubmit={handleRegister}>

                    <div className="allRegFields">
                        <fieldset className="regInputFieldHorizontal">
                            <div className="sideByDiv">
                                <label className="registrationLabel" htmlFor="firstName"> First Name </label>
                                <input type="text" name="firstName" id="firstName" className="form-control-registration" placeholder=" First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                            </div>
                            <div className="sideByDiv">
                                <label className="registrationLabel" htmlFor="lastName"> Last Name </label>
                                <input type="text" name="lastName" id="lastName" className="form-control-registration" placeholder=" Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                            </div>

                            <div className="sideByDiv">
                                <label className="registrationLabel" htmlFor="inputGender">M | F</label>
                                <input type="gender" name="gender" id="gender" className="form-control-registration-gender" placeholder="" required value={registerUser.gender} onChange={handleInputChange} />
                            </div>
                        </fieldset>

                        <fieldset className="regInputFields">
                            <label className="registrationLabel" htmlFor="inputEmail"> Email address </label>
                            <input type="email" name="email" id="email" className="form-control-registration emailInput" placeholder=" Email address" required value={registerUser.email} onChange={handleInputChange} />
                        </fieldset>

                        <fieldset className="regInputFields">
                            <label className="registrationLabel" htmlFor="inputprofileURL">Profile URL</label>
                            <input type="profileURL" name="profileURL" id="profileURL" className="form-control-registration profileInput" placeholder=" Profile URL" required value={registerUser.profileURL} onChange={handleInputChange} />
                        </fieldset>

                        <fieldset className="regInputFields">
                            <label className="registrationLabel" htmlFor="inputRegionId">Region</label>
                            <select value={registerUser.regionId} name="regionId" id="regionId" className="form-control-registration regionSelect" required onChange={handleInputChange}>
                                <option value="0">Select a home region</option>
                                {regions.map(region => {
                                    return (
                                        <option value={region.id} key={region.id}>{region.name}</option>
                                    )
                                })}
                            </select>
                        </fieldset>
                    </div>

                    <div className="completeRegistrationDiv">
                        <fieldset className="completeFieldset">
                            <button type="submit" className="completeRegisBtn"> Complete Registration </button>
                            <p className="returnToLogin">Have an acount? Click <Link to="/login" className="login">here</Link></p>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    )
}

