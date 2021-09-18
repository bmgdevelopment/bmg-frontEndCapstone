import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { ItemProvider } from "./item/ItemProvider"
import { ItemDetail } from "./item/ItemDetail"
import { ItemDetailInfo } from "./item/ItemDetailInfo"
import { ItemForm } from "./item/ItemForm"
// import { ItemList } from "./item/ItemList"
// import { ItemSearch } from "./item/ItemSearch"

import { ProfileDetail } from "./profile/ProfileDetail"

import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"
import { UserDetail } from "./user/UserDetail"

import { RegionProvider } from "./region/RegionProvider"
import { SaveProvider } from "./save/SaveProvider"
import { CustomerReviewProvider } from "./customerReview/CustomerReviewProvider"
import { CustomerReviewList } from "./customerReview/CustomerReviewList"

export const ApplicationView = () => {
    return (
        <>
            <UserProvider>
                <RegionProvider>
                    <ItemProvider>
                        <SaveProvider>

                            {/* HOME VIEW WITH HARD CODED INFO */}
                            <Route exact path="/">
                                <Home />
                            </Route>

                            {/* ONE USER PROFILE DETAIL */}
                            <Route exact path="/profile">
                                <ProfileDetail />
                            </Route>

                            {/* ONE USER PROFILE DETAIL */}
                            <Route exact path="/trendyTravelers/detail/:userId(\d+)">
                                <UserDetail />
                            </Route>

                            {/* ONE ITEM DETAIL */}
                            <Route exact path="/items/">
                                <ItemDetail />
                            </Route>

                            {/* ONE ITEM DETAIL WITH INFO */}
                            <Route exact path="/items/detail/:itemId(\d+)">
                                <ItemDetailInfo />
                            </Route>

                        </SaveProvider>
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

            <UserProvider>
                {/* ALL USERLIST */}
                <Route exact path="/trendyTravelers">
                    <UserList />
                </Route>
            </UserProvider>


            <UserProvider>
                <RegionProvider>
                    <ItemProvider>

                        {/* ONE ITEM EDIT*/}
                        <Route exact path="/items/edit/:itemId(\d+)">
                            <ItemForm />
                        </Route>

                        {/* CREATE NEW ITEM*/}
                        <Route exact path="/items/create">
                            <ItemForm />
                        </Route>

                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

            <UserProvider>
                <RegionProvider>
                    <ItemProvider>
                        <CustomerReviewProvider>
                            {/* CUSTOMER REVIEWS */}
                            <Route exact path="/customerReviews">
                                <CustomerReviewList />
                            </Route>
                        </CustomerReviewProvider>
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

        </>
    )
}