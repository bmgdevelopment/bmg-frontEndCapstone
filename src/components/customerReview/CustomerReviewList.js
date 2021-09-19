import React, { useContext, useEffect } from "react";
// import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import './CustomerReview.css'
import { UserContext } from "../user/UserProvider"
import { CustomerReviewContext } from "../customerReview/CustomerReviewProvider"


export const CustomerReviewList = () => {
    const { users, getUsers } = useContext(UserContext)
    const { customerReviews, getReviews } = useContext(CustomerReviewContext)

    // const [reviewUser, setReviewUser] = useState({ region: {}, profileURL: {} })
    // const [oneReview, setOneReview] = useState({ userId: {} })

    useEffect(() => {
        getUsers().then(getReviews)
    }, [])

    useEffect(() => { }, [customerReviews, users])

    // debugger

    // useEffect(() => {
    //     for (const oneReview of customerReviews) {
    //         setOneReview(oneReview).then(() => {
    //             const thisUser = users.find(user => user.id === oneReview.userId) || { userId: {} }
    //             setReviewUser(thisUser)
    //         })
    //     }
    // }, [])



    const userMatchedReview = (review, users) => {
        const reviewInfo = users.map(user => {
            if (review.userId === user.id) {
                return <>
                    <div className="centeringBoxReview">
                        {/* <div className="imgBoxReview"></div> */}
                        <div className="boxes">
                            <div className="blackContainer">
                                <div className="div1Review">
                                    <div className="reviewNameRegion">
                                        <div>
                                            <img alt="reviewUserPic" src={user.profileURL} />
                                        </div>
                                        <div className="reviewPdiv">
                                            <p className="reviewFirstName">{user.firstName}</p>
                                            <p className="reviewUserRegion">{user.region.name}</p>
                                        </div>
                                    </div>
                                    <div>
                                        {review.rating === 1 && <p className="reviewStar">⭐️</p>}
                                        {review.rating === 2 && <p className="reviewStar">⭐️ ⭐️</p>}
                                        {review.rating === 3 && <p className="reviewStar">⭐️ ⭐️ ⭐️</p>}
                                        {review.rating === 4 && <p className="reviewStar">⭐️ ⭐️ ⭐️ ⭐️</p>}
                                        {review.rating === 5 && <p className="reviewStar">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>}
                                    </div>
                                </div>

                            <div className="div2Review">
                                <div className="reviewSummary">" {review.review} "</div>
                            </div>
                            </div>
                        </div>
                        <div className="imgBoxReview"></div>

                    </div>

                </>
            }
        })
        return reviewInfo
    }


    return (
        <>
            {/* <div className="arrangeReviews"> */}
            {/* <div className="profileBanner"> */}
            <div className="customerReviewsDiv">
                <h1 className="trendyTravlersH2 customerReviewsH2">Customer Reviews </h1>
            </div>
            <Carousel show={2.5} slide={2} swiping={true}>
                {
                    customerReviews.map(review => {
                        return userMatchedReview(review, users)
                    })
                }
            </Carousel>

            {/* </div> */}
            {/* </div> */}

            {/* <div className="aside_and_mainFeed">

                <div className="mainFeedHome">

                    <div className="arrangeReviews">
                        <div className="profileBanner">
                            <div className="trendTravH2Div">
                                <h1 className="trendyTravlersH2 userItemsH2">Customer Reviews </h1>
                            </div>
                            {
                                customerReviews.map(review => {
                                    return userMatchedReview(review, users)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
