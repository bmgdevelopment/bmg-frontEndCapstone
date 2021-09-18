import React, { useState, useContext, useEffect } from "react";
// import ReactDOM from 'react-dom';
// import { Carousel } from '@trendyol-js/react-carousel';
import './CustomerReview.css'
import { UserContext } from "../user/UserProvider"
import { RegionContext } from "../region/RegionProvider"
import { CustomerReviewContext } from "../customerReview/CustomerReviewProvider"


export const CustomerReviewList = () => {
    const { users, getUsers } = useContext(UserContext)
    const { customerReviews, getReviews } = useContext(CustomerReviewContext)
    const { regions, getRegions } = useContext(RegionContext)

    const [reviewUser, setReviewUser] = useState({ region: {}, profileURL: {} })
    // const [ oneReview, setOneReview ] = useState( {})

    useEffect(() => {
        getUsers()
        getReviews()
        getRegions()
    }, [])

    // useEffect(() => {
    //     const thisUser = users.find(user => user.id === ) || {}
    //     setReviewUser(thisUser)

    // }, [])


    return (
        <>
            {/* <Carousel show={3.5} slide={3} swiping={true}>
                <div className="boxes">INFO HERE</div>               
                <div className="boxes"></div>               
                <div className="boxes"></div>               
            </Carousel> */}
            <div className="aside_and_mainFeed">

                <div className="mainFeedHome">

                    <div className="arrangeReviews">
                        <div className="profileBanner">
                            <div className="trendTravH2Div">
                                <h1 className="trendyTravlersH2 userItemsH2">Customer Reviews </h1>
                            </div>

                            <div className="boxes">
                                <div className="div1Review">
                                    <div>
                                        Matcbox
                                        <br />
                                        XXX
                                    </div>
                                    <div>
                                        ⭐️ ⭐️ ⭐️ ⭐️
                                    </div>
                                </div>

                                <div className="div2Review">
                                    <div>REVIEW SECTION</div>
                                </div>
                            </div>

                            {/* </> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
