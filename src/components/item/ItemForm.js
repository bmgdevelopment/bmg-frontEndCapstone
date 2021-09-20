import React, { useContext, useEffect, useState } from "react"
import { UserContext } from "../user/UserProvider"
import { RegionContext } from "../region/RegionProvider"
import { ItemContext } from "./ItemProvider"
import { useHistory, useParams, Link } from 'react-router-dom';
import "./Item.css"

export const ItemForm = () => {
    const { getUsers } = useContext(UserContext)
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
                    .then(() => history.push(`/trendyTravelers/detail/${userId}`))
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
        <div className="formAdjustPosition">
        
            <div className="itemFormContainerDiv">
                <div className="colorBanner"></div>

                <section className="registerTitle addItemTitle">
                    <div className="titleBox1">
                        <h1 className="registrationH1 addItemH1 h1 mb-3 font-weight-normal">Add Outfit & Accessories</h1>
                        <p className="registerTitleP ">We suggest you upload one outfit ensemble with accessories at a time</p>
                    </div>

                    <div className="titleBox2">
                        {/* <Link to={`/items/detail/${item.id}`} className="X">
                            <button>X</button>
                        </Link> */}

                       { item.id ? 
                         <Link to={`/items/detail/${item.id}`} className="X">
                            <button>X</button>
                        </Link>
                        : 
                         <Link to={"/"} className="X">
                            <button>X</button>
                        </Link>}
                       
                    </div>
                </section>


                <div className="registrationFields addItemFields">
                    <form className="form--login" >

                        <div className="allRegFields allAddFields">
                            <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemSummary">{itemId ? <> Item Summary </> : <> Item Summary (10 words or less)</>}</label>
                                <textarea type="text" name="summary" id="itemSummary" className="itemSummaryInput itemFields" placeholder="" required autoFocus value={item.summary} onChange={handleControlledInputChange} />
                            </fieldset>

                            <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemDescription"> {itemId ? <> Descriptive Words </> : <> Place descriptive all words associated with your item </>} </label>
                                <textarea rows="5" type="text" name="descriptiveWords" id="itemDescription" className="itemDescriptionInput itemFields" placeholder="" required value={item.descriptiveWords} onChange={handleControlledInputChange} />
                            </fieldset>

                            <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemURL"> {itemId ? <> Item Image Address URL </> : <> Item Image Address URL (2:3 width to height ratio suggested) </>}</label>
                                <input type="text" name="itemImage" id="itemImageURL" className=" itemFields" placeholder=" ex. www.google.com/outfitpic/2..." required value={item.itemImage} onChange={handleControlledInputChange} />
                            </fieldset>

                            <fieldset className="regInputFields">
                                <label className="registrationLabel itemLabel" htmlFor="itemType"> ItemType {/* {itemId ? <> </> : <> </>} */}</label>
                                {itemId ? 
                                <input type="text" name="type" id="itemType" className="itemTypeInput itemFields" placeholder="Outfit? Accessories? Or Outfit and accessories?" required value={item.type} onChange={handleControlledInputChange} /> 
                                : 
                                <select name="type" id="itemType" className="itemTypeInput itemFields" placeholder="Outfit? Accessories? Or Outfit and accessories?" required value={item.type} onChange={handleControlledInputChange}>
                                    <option value="0">Select an item type</option>
                                    <option value="outfit">Outfit</option>
                                    <option value="accessory">Accessory</option>
                                    <option value="both">Outfit and Accessory</option>
                                </select>
                                }

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

                            </fieldset>
                        </div>

                        <div className="completeRegistrationDiv completeItem">
                            <fieldset className="completeFieldset completeItemFieldset">
                                <button
                                    className="completeRegisBtn addItemButton"
                                    disabled={isLoading}
                                    onClick={event => {
                                        event.preventDefault() // Prevent browser from submitting the form and refreshing the page
                                        handleSaveItem()
                                    }}>
                                    {itemId ? <> Complete Update  </> : <> Save New Trend </>}
                                </button>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    )

} // end of ItemForm

