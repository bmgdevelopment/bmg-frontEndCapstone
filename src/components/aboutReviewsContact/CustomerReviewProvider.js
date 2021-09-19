import React, { createContext, useState } from "react";

const apiURL = "http://localhost:7001"
export const CustomerReviewContext = createContext()

export const CustomerReviewProvider = (props)=> {
    const [ customerReviews, setReviews ] = useState([])

    const getReviews = () => {
        return fetch(`${apiURL}/customerReviews`)
        .then(res => res.json())
        .then(setReviews)
    }

    const deleteReview = (reviewId) => {
        return fetch(`${apiURL}/customerReviews/${reviewId}`, {
            method: "DELETE",
        })
        .then(getReviews)
    }
return (
    <CustomerReviewContext.Provider value={
        { customerReviews, getReviews, deleteReview}
    }>
        { props.children }
    </CustomerReviewContext.Provider>)

} //end of provider