import React, { useContext, useEffect } from "react";
import { Carousel } from '@trendyol-js/react-carousel';
import { RegionContext } from "../region/RegionProvider"
import { CustomerReviewContext } from "./CustomerReviewProvider"
import { Grid, Header, Image, Segment, Container } from 'semantic-ui-react'
import trendagoCollage1 from '../images/trendagoCollage.png'
import trendagoContactUs from '../images/trendagoContactUs.png'
import './AboutReviewsContact.css'


export const CustomerReviewList = () => {
    const { customerReviews, getReviews } = useContext(CustomerReviewContext)
    const { regions, getRegions } = useContext(RegionContext)

    useEffect(() => {
        getRegions()
        getReviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const userMatchedReview = (review) => {

        return <>
            <div className="centeringBoxReview">
                <div className="boxes">
                    <div className="blackContainer">
                        <div className="div1Review">
                            <div className="reviewNameRegion">
                                <div>
                                    {
                                        !review.user.profileURL
                                            ? <div class="ui active centered inline loader"></div>
                                            : <img alt="reviewUserPic" src={review.user.profileURL} />
                                    }
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
                            <p className="reviewSummary" style={{ display: "flex", justifyContent: "center"}}>" {review.review} "</p>
                        </div>
                    </div>
                </div>
                <div className="imgBoxReview">  </div>
                {/* <div className="imgBoxReview" style={{ backgroundImage: `url(${regionObj.regionImage})` }} >  </div> */}
            </div>

        </>
    }

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
                                    You've safely landed on the best application that can bridge the gap between all trends across regions. Isn't it relieving that you no longer have to struggle with packing proper clothing for your trips? Catch your flights with confidence with our application!
                                </p>
                                <Header as='h3' style={{ fontSize: '3em', fontFamily: 'Cormorant Garamond' }}>
                                    Share your travel trends <br /> across the globe
                                </Header>
                                <p style={{ fontSize: '1.33em', color: 'gray' }}>
                                    Yes, that's right, you can share your trendy expertise right here with others who will visit your region. Sharing is caring so upload the trends you love and represent for your region!
                                </p>
                            </Grid.Column>

                            <Image className="aboutCollage" rounded size='large' src={trendagoCollage1} />
                        </Grid.Row>

                    </Grid>
                </Segment>
            </div>

            <div className="carouselDiv">
                {customerReviews.length ?
                    <Carousel show={2.75} slide={1} swiping={true}>
                        {
                            customerReviews.map(review => {
                                return userMatchedReview(review)
                            })
                        }
                    </Carousel>
                    :
                    <div className="ui active centered inline loader"></div>

                }
            </div>

            <div className="organizeSegment">
                <Segment style={{ padding: '14em 0em', marginBottom: '-4em', marginTop: '-20px', display: 'flex', justifyContent: 'center', marginLeft: '25em', marginRight: '30em' }} vertical >
                    <div style={{ marginTop: '-18em'}}>
                        <img alt="contactUs" src={trendagoContactUs} style={{height: '600px'}}/>
                    </div>
                    <Container text style={{ minWidth: "390px", right: "10em"}}>
                        <Header as='h3' style={{ marginTop: '-3em', fontSize: '3em', fontFamily: 'Cormorant Garamond' }}>
                            Let's Connect! <br />
                            Contact Us
                        </Header>
                        <p style={{ fontSize: '1.33em', color: 'gray' }}>
                            <button class="ui circular icon button"><i aria-hidden="true" class="mail icon"></i></button> (615) 669 - 9414 <br />
                            <button class="ui circular icon button"><i aria-hidden="true" class="question circle outline icon"></i></button> questions@trendago.com <br />
                            <button class="ui circular icon button"><i aria-hidden="true" class="map marker alternate icon"></i></button> 123 Fashion Lane Chicago, IL
                        </p>
                    </Container>
                </Segment>
            </div>
        </>
    )
}
