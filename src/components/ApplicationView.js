import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { ItemProvider } from "./outfit/ItemProvider"
// import { ItemList } from "./outfit/ItemList"

import { ProfileDetail } from "./profile/ProfileDetail"

import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"

import { RegionProvider } from "./region/RegionProvider"

export const ApplicationView = () => {
    return (
        <>
            <UserProvider>

                <RegionProvider>
                    <ItemProvider>
                        <Route exact path="/profile">
                            <ProfileDetail />
                        </Route>
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

            <Route exact path="/">
                <Home />
            </Route>

            <UserProvider>
                <Route exact path="/trendyTravelers">
                    <UserList />
                </Route>
            </UserProvider>

        </>
    )
}