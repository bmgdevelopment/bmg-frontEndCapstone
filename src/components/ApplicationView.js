import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

export const ApplicationView = () => {
    return (
        <>
        <h2>Hello from Trendago ❤️!</h2>

        <Route exact path="/">
            <Home />
        </Route>
        </>
    )
}