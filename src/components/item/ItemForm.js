import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../user/UserProvider"
import { RegionContext } from "../region/RegionProvider"
import { ItemContext } from "./ItemProvider"
import { useHistory, useParams, Link } from 'react-router-dom';
import "./Item.css"

export const ItemForm = () => {
    const { users, getUsers } = useContext(UserContext)
    const { regions, getRegions } = useContext(RegionContext)
    const { addItem, getItemById, updateItem } = useContext(ItemContext)

    const [item, setItem] = useState({
        descriptiveWords: "",
        summary: "",
        itemImage: "",
        type: "",
        userId: 0,
        regionId: 0
    })

    const [isLoading, setIsLoading] = useState(true)

    const { itemId } = useParams()
    const history = useHistory()

    const handleControlledInputChange = event => {
        const newItem = { ...item }
        newItem[event.target.name] = event.target.value
        setItem(newItem)
    }

    const handleSaveItem = () => {
        const userId = parseInt(sessionStorage.getItem("trendago_user"))

        if (item.descriptiveWords === "" && item.summary === "" && item.type === "" && item.itemImage === "" && userId === 0 && item.regionId === 0) {
            window.alert("Please complete the form to submit your item")
        } else {
            setIsLoading(true);
            if (itemId) {
                updateItem({
                    id: item.id,
                    descriptiveWords: item.descriptiveWords,
                    summary: item.summary,
                    itemImage: item.itemImage,
                    type: item.type,
                    userId: item.userId,
                    regionId: item.userId
                })
                    .then(() => history.push(`/items/detail/${item.id}`))
            } else {
                addItem({
                    summary: item.summary,
                    descriptiveWords: item.descriptiveWords,
                    itemImage: item.itemImage,
                    type: item.type,
                    regionId: item.regionId
                })
                    .then(() => history.push(`/items/detail/${item.id}`))
            }
        }
    }

    useEffect(() => {
        getUsers().then(getRegions).then(() => {
            if (itemId) {
                getItemById(itemId)
                .then(item => {
                    setItem(item)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
        <p>TEST</p>
        </>
    )

} // end of ItemForm

/*
        <div className="formContainerDiv">
            <div className="colorBanner"></div>

            <section className="registerTitle">
                <h1 className="registrationH1 h1 mb-3 font-weight-normal"> Register for TRENDAGO</h1>
                <p className="registerTitleP">Immediate access upon registration</p>
            </section>

            <hr />

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog> 

            <div className="registrationFields">
                <form className="form--login" onSubmit={item}>

                    <div className="allRegFields">
                        <fieldset className="regInputFieldHorizontal">
                            <div className="sideByDiv">
                                <label className="registrationLabel" htmlFor="firstName"> First Name </label>
                                <input type="text" name="firstName" id="firstName" className="form-control-registration" placeholder=" First name" required autoFocus value={item} onChange={item} />
                            </div>
                            <div className="sideByDiv">
                                <label className="registrationLabel" htmlFor="lastName"> Last Name </label>
                                <input type="text" name="lastName" id="lastName" className="form-control-registration" placeholder=" Last name" required value={item} onChange={item} />
                            </div>

                            <div className="sideByDiv">
                                <label className="registrationLabel" htmlFor="inputGender">M | F</label>
                                <input type="gender" name="gender" id="gender" className="form-control-registration-gender" placeholder="" required value={item} onChange={item} />
                            </div>
                        </fieldset>

                        <fieldset className="regInputFields">
                            <label className="registrationLabel" htmlFor="inputEmail"> Email address </label>
                            <input type="email" name="email" id="email" className="form-control-registration emailInput" placeholder=" Email address" required value={item} onChange={item} />
                        </fieldset>

                        <fieldset className="regInputFields">
                            <label className="registrationLabel" htmlFor="inputprofileURL">Profile URL</label>
                            <input type="profileURL" name="profileURL" id="profileURL" className="form-control-registration profileInput" placeholder=" Profile URL" required value={item} onChange={item} />
                        </fieldset>

                        <fieldset className="regInputFields">
                            <label className="registrationLabel" htmlFor="inputRegionId">Region</label>
                            <select value={item.regionId} name="regionId" id="regionId" className="form-control-registration regionSelect" required onChange={item}>
                                <option value="0">Select a home region</option>
                                {regions.map(region => {
                                    return (
                                        <option value={region.id} key={region.id}>{region.name}</option>
                                    )
                                })}
                            </select>
                       <input type="regionId" name="regionId" id="regionId" className="form-control-registration regionSelect" placeholder=" Select region number (1-7)" required value={registerUser.regionId} onChange={item} /> 
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
        </div>*/