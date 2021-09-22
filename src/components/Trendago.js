import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationView } from "./ApplicationView"
import { NavBar } from "./nav/NavBar"
import { Footer } from "./nav/Footer"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { RegionProvider } from "./region/RegionProvider"
import { UserProvider } from "./user/UserProvider"
import "./Trendago.css"

export const Trendago = () => (
    <>
        <Route
            render={() => {
                if (sessionStorage.getItem("trendago_user")) {
                    return (
                        <>
                            <UserProvider>
                                <NavBar />
                            </UserProvider>
                            <ApplicationView />
                            <Footer />
                        </>
                    )
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login" component={Login} />
        {/* 
        <Route path="/login">
            <Login />
        </Route> */}

        <RegionProvider>
            <Route path="/register">
                <Register />
            </Route>
        </RegionProvider>

    </>
)