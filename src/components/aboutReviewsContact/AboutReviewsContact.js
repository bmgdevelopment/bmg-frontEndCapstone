import React, { useContext, useEffect } from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import { RegionContext } from "../region/RegionProvider"
import { CustomerReviewContext } from "./CustomerReviewProvider"
import { Grid, Header, Image, Segment } from 'semantic-ui-react'
import trendagoCollage1 from '../images/trendagoCollage.png'
import './AboutReviewsContact.css'


// 🛑 HAVING ISSUES OF LOADING WITHOUT GOING TO ANOTHER PAGE THEN RETURNING

export const CustomerReviewList = () => {
    const { customerReviews, getReviews } = useContext(CustomerReviewContext)
    const { regions, getRegions } = useContext(RegionContext)

    useEffect(() => {
        getRegions()
        getReviews()
    }, [])

    // useEffect(() => { }, [customerReviews, regions])

    const userMatchedReview = (review) => {

        return <>
            <div className="centeringBoxReview">
                <div className="boxes">
                    <div className="blackContainer">
                        <div className="div1Review">
                            <div className="reviewNameRegion">
                                <div>
                                    <img alt="reviewUserPic" src={review.user.profileURL} />
                                </div>
                                <div className="reviewPdiv">
                                    <p className="reviewFirstName">{review.user.firstName}</p>
                                    {regions.map(region => {
                                        return review.user.regionId === region.id && <p className="reviewUserRegion">{region.name}</p>
                                    })
                                    }
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
                {/* <div className="imgBoxReview" style={{ backgroundImage: `url(${regionObj.regionImage})` }} >  </div> */}


            </div>

        </>
    }

    // if (!userSaves.length) return <h1>Loading...</h1>


    return (
        <>
            <div className="organizeSegment">
                <Segment vertical>
                    <Grid container stackable verticalAlign='middle'>

                        <Grid.Row style={{ paddingLeft: '120px' }}>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '3em', fontFamily: 'Cormorant Garamond' }}>
                                    TRENDAGO <br /> For stylish traveling trends
                                </Header>
                                <p style={{ fontSize: '1.33em', color: 'gray' }}>
                                    You've safely landed on the best application that can bridge the gap between all trends across regions. Isn't it relieving that you no longer have to struggle with packing proper clothing for your trips? Catch your flights with confidence!
                                </p>
                                <Header as='h3' style={{ fontSize: '3em', fontFamily: 'Cormorant Garamond' }}>
                                    Share your travel trends <br /> across the globe
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

            {customerReviews.length ?
                <Carousel show={2.5} slide={1} swiping={true}>
                    {
                        customerReviews.map(review => {
                            return userMatchedReview(review)
                        })
                    }
                </Carousel>
                :
                <h1>Loading...</h1>
            }


            {/* <Carousel show={2.5} slide={1} swiping={true}>
                {
                    customerReviews.map(review => {
                        return userMatchedReview(review)
                    })
                }
            </Carousel> */}


            {/* 
            <Carousel show={2.5} slide={1} swiping={true}>
                {
                    customerReviews.map(review => {
                        return userMatchedReview(review, users)
                    })
                }
            </Carousel> */}

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
