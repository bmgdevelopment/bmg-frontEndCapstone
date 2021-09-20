import React, { useContext, useEffect } from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import { UserContext } from "../user/UserProvider"
import { CustomerReviewContext } from "./CustomerReviewProvider"
import { Grid, Header, Image, Segment } from 'semantic-ui-react'
import  trendagoCollage1 from '../images/trendagoCollage.png'
import './AboutReviewsContact.css'


// 🛑 HAVING ISSUES OF LOADING WITHOUT GOING TO ANOTHER PAGE THEN RETURNING

export const CustomerReviewList = () => {
    const { users, getUsers } = useContext(UserContext)
    const { customerReviews, getReviews } = useContext(CustomerReviewContext)

    // useEffect(() => {
    //     getUsers()
    // }, [])

    // useEffect(() => {
    //     getReviews()
    // }, [])

    useEffect(() => {
        getUsers()
        getReviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => { }, [customerReviews, users])
    


    const userMatchedReview = (review, users) => {
        // eslint-disable-next-line array-callback-return
        const reviewInfo = users.map(user => {
            if (review.userId === user.id) {
                return <>
                    <div className="centeringBoxReview">
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
                                    <p className="reviewSummary">" {review.review} "</p>
                                </div>
                            </div>
                        </div>
                        <div className="imgBoxReview">  </div>
                        {/* { review.userId === user.id && <div className="imgBoxReview" style={{ backgroundImage: `url(${user.region.regionImage})` }} >  </div> } */}
                       
                        
                    </div>

                </>
            }
        })
        return reviewInfo
    }

    return (
        <>
        <div className="organizeSegment">
            <Segment vertical>
                <Grid container stackable verticalAlign='middle'>

                    <Grid.Row style={{paddingLeft: '120px'}}>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '3em', fontFamily: 'Cormorant Garamond' }}>
                                TRENDAGO <br/> For stylish traveling trends 
                            </Header>
                            <p style={{ fontSize: '1.33em', color: 'gray' }}>
                                You've safely landed on the best application that can bridge the gap between all trends across regions. Isn't it relieving that you no longer have to struggle with packing proper clothing for your trips? Catch your flights with confidence! 
                            </p>
                            <Header as='h3' style={{ fontSize: '3em', fontFamily: 'Cormorant Garamond' }}>
                                Share your travel trends <br/> across the globe
                            </Header>
                            <p style={{ fontSize: '1.33em', color: 'gray' }}>
                                Yes that's right, you can share your trendy expertise right here with others who will visit your region. Sharing is caring so upload the trends you love and represent for your region!
                            </p>
                        </Grid.Column>

                         {/* <Grid.Column floated='right' width={8}>
                            <Image className="aboutCollage" rounded size='large' src={trendagoCollage1} />
                        </Grid.Column>  */}
                            <Image className="aboutCollage" rounded size='large' src={trendagoCollage1} />
                    </Grid.Row>

                </Grid>
            </Segment>
        </div>


            <Carousel show={2.5} slide={1} swiping={true}>
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
