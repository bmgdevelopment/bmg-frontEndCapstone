import React from "react"
import { ItemProvider } from "./item/ItemProvider"
import { ItemSearch } from "./item/ItemSearch"
import { UserProvider } from "./user/UserProvider"
import { SaveProvider } from "./save/SaveProvider"
import { RegionProvider } from "./region/RegionProvider"
import { ItemList } from "./item/ItemList"
import "./item/Item.css"

export const Home = () => {

    return (
        <>
            <UserProvider>
                <RegionProvider>
                    <ItemProvider>
                        <SaveProvider>
                            <div className="searchBarHomeDiv">
                            <ItemSearch />
                            </div>

                            <div className="aside_and_mainFeed_home">

                                {/* MAIN FEED TO KEEP */}
                                <div className="mainFeedHome">
                                    <br />
                                    {
                                        <div className="trendTravH2Div">
                                            <h1 className="exploreTrends">Explore All Trends</h1>
                                        </div>
                                    }
                                    <ItemList />

                                </div>
                            </div>
                        </SaveProvider>
                    </ItemProvider>
                </RegionProvider>
            </UserProvider>

        </>
    )
}