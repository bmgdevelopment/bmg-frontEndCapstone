import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationView } from "./ApplicationView"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { RegionProvider } from "./region/RegionProvider"
import "./Trendago.css"

export const Trendago = () => (
    <>
        <Route 
        render={() => {
            if(sessionStorage.getItem("trendago_user")) {
                return (
                    <>
                    <NavBar />
                    <ApplicationView />
                    </>
                )
            } else {
                return <Redirect to="login" />;
            }
        }}
        />

        <Route path="/login">
            <Login />
        </Route>

<RegionProvider>
        <Route path="/register">
            <Register />
        </Route>
</RegionProvider>

    </>
)