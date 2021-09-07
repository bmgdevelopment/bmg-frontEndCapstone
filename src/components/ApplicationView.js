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
            {/* HOME VIEW WITH HARD CODED INFO */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* ONE USER PROFILE DETAIL */}
            <UserProvider>
                <RegionProvider>
                    <ItemProvider>
                        <Route exact path="/profile">
                            <ProfileDetail />
                        </Route>
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

            {/* ALL USERLIST */}
            <UserProvider>
                <Route exact path="/trendyTravelers">
                    <UserList />
                </Route>
            </UserProvider>

        </>
    )
}