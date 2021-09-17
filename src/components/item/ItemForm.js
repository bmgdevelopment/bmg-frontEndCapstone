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
                    id: itemId,
                    descriptiveWords: item.descriptiveWords,
                    summary: item.summary,
                    itemImage: item.itemImage,
                    type: item.type,
                    userId: item.userId,
                    regionId: item.regionId
                })
                    .then(() => history.push(`/items/detail/${itemId}`))
            } else {
                addItem({
                    summary: item.summary,
                    descriptiveWords: item.descriptiveWords,
                    itemImage: item.itemImage,
                    type: item.type,
                    userId: userId,
                    regionId: item.regionId
                })
                    .then(() => history.push(`/items/detail/${itemId}`))
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
            <div className="itemFormContainerDiv">
                <div className="colorBanner"></div>

                <section className="registerTitle addItemTitle">
                    <div className="titleBox1">
                        <h1 className="registrationH1 addItemH1 h1 mb-3 font-weight-normal">Add Outfit & Accessories</h1>
                        <p className="registerTitleP ">We suggest you upload one outfit ensemble with accessories at a time</p>
                    </div>

                    <div className="titleBox2">
                        <Link to={`/items/detail/${item.id}`} className="X">
                            <button>X</button>
                        </Link>
                    </div>
                </section>


                <div className="registrationFields addItemFields">
                    <form className="form--login" onSubmit={handleSaveItem}>

                        <div className="allRegFields allAddFields">
                            <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemSummary"> Item Summary</label>
                                <textarea type="text" name="summary" id="itemSummary" className="itemSummaryInput itemFields" placeholder=" Please provide a short item summary (10 words or less)" required autoFocus value={item.summary} onChange={handleControlledInputChange} />
                            </fieldset>

                            <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemDescription"> Descriptive Words</label>
                                <textarea rows="5" type="text" name="descriptiveWords" id="itemDescription" className="itemDescriptionInput itemFields" placeholder=" Place descriptive words associated with your item" required value={item.descriptiveWords} onChange={handleControlledInputChange} />
                            </fieldset>

                            <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemURL">Item Image URL</label>
                                <input type="text" name="itemImage" id="itemImageURL" className=" itemFields" placeholder=" ex. www.google.com/outfitpic/2..." required value={item.itemImage} onChange={handleControlledInputChange} />
                            </fieldset>

                            <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemType"> ItemType </label>
                                <input type="text" name="type" id="itemType" className="itemTypeInput itemFields" placeholder="Outfit? Accessories? Or Outfit and accessories?" required value={item.type} onChange={handleControlledInputChange} />
                            </fieldset>

                            <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="inputRegionId">Region</label>
                                <select value={item.regionId} name="regionId" id="regionId" className="regionSelect itemFields" required onChange={handleControlledInputChange}>
                                    <option value="0">Select a home region</option>
                                    {regions.map(region => {
                                        return (
                                            <option value={region.id} key={region.id}>{region.name}</option>
                                        )
                                    })}
                                </select>
                                {/* <input type="regionId" name="regionId" id="regionId" className="form-control-registration regionSelect" placeholder=" Select region number (1-7)" required value={registerUser.regionId} onChange={handleControlledInputChange} />  */}

                            </fieldset>
                        </div>

                        <div className="completeRegistrationDiv completeItem">
                            <fieldset className="completeFieldset completeItemFieldset">
                                <button type="submit" className="completeRegisBtn addItemButton"> {itemId? <> Complete Update  </> : <> Save New Trend </>} </button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

} // end of ItemForm

/*
        <div className="formContainerDiv">
            <div className="colorBanner"></div>

            <section className="registerTitle addItemTitle">
            <div className="titleBox1">
            <h1 className="registrationH1 addItemH1 h1 mb-3 font-weight-normal">Add Outfit & Accessories </h1>
            <p className="registerTitleP addItemTitle">We suggest you upload one outfit ensemble with accessories per add</p>
            </div>

            <div className="titleBox2">

            </div>
             </section>

            <hr />

            <div className="registrationFields addItemFields">
                <form className="form--login" onSubmit={handleSaveItem}>

                    <div className="allRegFields allAddFields">
                        <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemSummary"> Item Summary</label>
                                <input type="text" name="summary" id="itemSummary" className="form-control-registration itemSummaryInput" placeholder=" Please provide a short item summary (10 words or less)" required autoFocus value={item.summary} onChange={handleControlledInputChange} />
                            </fieldset>

                        <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemDescription"> Descriptive Words</label>
                                <input type="text" name="descriptiveWords" id="itemDescription" className="form-control-registration itemDescriptionInput" placeholder=" Place descriptive words associated with your item" required value={item.descriptiveWords} onChange={handleControlledInputChange} />
                            </fieldset>

                        <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemURL">Item Image URL</label>
                                <input type="text" name="itemImage" id="itemImageURL" className="form-control-registration itemImageURLInput" placeholder=" ex. www.google.com/outfitpic/2..." required value={item.itemImage} onChange={handleControlledInputChange} />
                        </fieldset>

                        <fieldset className="regInputFields">
                            <label className="registrationLabel itemLabel" htmlFor="itemType"> ItemType </label>
                            <input type="text" name="type" id="itemType" className="form-control-registration itemTypeInput" placeholder="Outfit? Accessories? Or Outfit and accessories?" required value={item.type} onChange={handleControlledInputChange} />
                        </fieldset>

                        <fieldset className="regInputFields">
                            <label className="registrationLabel itemLabel" htmlFor="inputRegionId">Region</label>
                            <select value={item.regionId} name="regionId" id="regionId" className="form-control-registration regionSelect" required onChange={handleControlledInputChange}>
                                <option value="0">Select a home region</option>
                                {regions.map(region => {
                                    return (
                                        <option value={region.id} key={region.id}>{region.name}</option>
                                    )
                                })}
                            </select>
                    //    <input type="regionId" name="regionId" id="regionId" className="form-control-registration regionSelect" placeholder=" Select region number (1-7)" required value={registerUser.regionId} onChange={handleControlledInputChange} />
                        </fieldset>
                    </div>

                    <div className="completeRegistrationDiv completeItem">
                        <fieldset className="completeFieldset completeItemFieldset">
                            <button type="submit" className="completeRegisBtn addItemButton"> { item.id ? <> Update Trend </> : <> Save New Trend </>} </button>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
        */