import React from "react"

export const Home = () => {
    return (
        <>
            <div className="aside_and_mainFeed">

                <aside className="asidePanelHome">
                    <div className="asideSearchDiv">
                        <input></input><button>Search</button>
                    </div>

                    <div className="asideAddNewDiv">
                        <button>Add New Outfit/Accessory</button>
                    </div>

                    <div className="asideRegionsDiv">
                        <h4>REGION QUICK LINKS</h4>
                        <div className="regionBannerLinks">
                            <img className="regionBanner" alt=""></img>
                            <img className="regionBanner" alt=""></img>
                            <img className="regionBanner" alt=""></img>
                            <img className="regionBanner" alt=""></img>
                            <img className="regionBanner" alt=""></img>
                            <img className="regionBanner" alt=""></img>
                            <img className="regionBanner" alt=""></img>

                        </div>
                    </div>
                </aside>

                <div className="mainFeedHome">
                    <div className="organizeTilesDiv">

                        <div className="oneItemTile">
                            <img className="itemTileIMG" alt="itemIMG"></img>

                            <div className="itemInfo">
                                <div className="itemTopInfo">
                                    <div className="itemMustPackDiv">
                                        <p>Luggage icon [--]{/* {ternary for if clicked and unclicked show image} */}</p>
                                    </div>

                                    <div className="itemSummary">
                                        <p className="itemSummaryP">WHOJIE NOSEH NJSDNEON NSOEFHUSN </p>
                                    </div>

                                    <div className="">
                                        <img alt="itemCreatorImage" src=""/>
                                        <p>Created by Me</p>
                                        <p>Region: North America</p>
                                        <p>Date: 07/18/2021</p>
                                    </div>
                                </div>
                                <div className="itemBottomInfo">
                                    <div>
                                        <p>Keywords</p>
                                        <p>hot shorts sun bright</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img className="itemTile" alt="item"></img>
                        <img className="itemTile" alt="item"></img>
                        <img className="itemTile" alt="item"></img>
                        <img className="itemTile" alt="item"></img>
                        <img className="itemTile" alt="item"></img>
                        <img className="itemTile" alt="item"></img>
                        <img className="itemTile" alt="item"></img>
                        <img className="itemTile" alt="item"></img>
                    </div>
                </div>

            </div>
        </>
    )
}