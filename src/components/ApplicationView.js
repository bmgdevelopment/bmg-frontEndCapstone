import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"

export const ApplicationView = () => {
    return (
        <>
        
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