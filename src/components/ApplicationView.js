import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { ItemProvider } from "./item/ItemProvider"
import { ItemDetail} from "./item/ItemDetail"
import { ItemDetailInfo} from "./item/ItemDetailInfo"
// import { ItemList } from "./item/ItemList"
// import { ItemSearch } from "./item/ItemSearch"

import { ProfileDetail } from "./profile/ProfileDetail"

import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"
import { UserDetail } from "./user/UserDetail"

import { RegionProvider } from "./region/RegionProvider"
import { SaveProvider } from "./save/SaveProvider"

export const ApplicationView = () => {
    return (
        <>
            {/* HOME VIEW WITH HARD CODED INFO */}
            <UserProvider>
                <RegionProvider>
                    <ItemProvider>
                        <SaveProvider>
                            <Route exact path="/">
                                <Home />
                            </Route>
                        </SaveProvider>
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

            {/* ONE USER PROFILE DETAIL */}
            <UserProvider>
                <RegionProvider>
                    <ItemProvider>
                        <SaveProvider>
                            <Route exact path="/profile">
                                <ProfileDetail />
                            </Route>
                        </SaveProvider>
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

            {/* ALL USERLIST */}
            <UserProvider>
                <Route exact path="/trendyTravelers">
                    <UserList />
                </Route>
            </UserProvider>

            {/* ONE USER PROFILE DETAIL */}
            <UserProvider>
                <RegionProvider>
                    <ItemProvider>
                        <SaveProvider>
                            <Route exact path="/trendyTravelers/detail/:userId(\d+)">
                                <UserDetail />
                            </Route>
                        </SaveProvider>
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

            {/* ONE ITEM DETAIL */}
            <UserProvider>
                <RegionProvider>
                    <ItemProvider>
                        <SaveProvider>
                            <Route exact path="/items/">
                                <ItemDetail />
                            </Route>
                        </SaveProvider>
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

            {/* ONE ITEM DETAIL */}
            <UserProvider>
                <RegionProvider>
                    <ItemProvider>
                        <SaveProvider>
                            <Route exact path="/items/detail/:itemId(\d+)">
                                <ItemDetailInfo />
                            </Route>
                        </SaveProvider>
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

        </>
    )
}