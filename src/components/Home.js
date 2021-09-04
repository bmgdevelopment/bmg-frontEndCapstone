import React from "react"
 
export const Home = () => {
    return (
        <>
        <div className="aside_and_mainFeed">

            <aside className="asidePanelHome">
                <div className="asideSearchDiv">
                    <input>🔍</input><button>Search</button>
                </div>

                <div className="asideAddNewDiv">
                    <button>Add New Outfit/Accessory</button>
                </div>

                <div className="asideRegionsDiv">
                    <h4>REGION QUICK LINKS</h4>
                    <div className="regionBannerLinks">
                        <img className="regionBanner" alt="">🌏</img>
                        <img className="regionBanner" alt="">🌏</img>
                        <img className="regionBanner" alt="">🌏</img>
                        <img className="regionBanner" alt="">🌏</img>
                        <img className="regionBanner" alt="">🌏</img>
                        <img className="regionBanner" alt="">🌏</img>
                        <img className="regionBanner" alt="">🌏</img>
                    </div>
                </div>
            </aside>

            <div className="mainFeedHome">
                <div className="organizeTilesDiv">
                <img className="outfitAccTile" alt="">👚</img>
                <img className="outfitAccTile" alt="">👚</img>
                <img className="outfitAccTile" alt="">👚</img>
                <img className="outfitAccTile" alt="">👚</img>
                <img className="outfitAccTile" alt="">👚</img>
                <img className="outfitAccTile" alt="">👚</img>
                <img className="outfitAccTile" alt="">👚</img>
                <img className="outfitAccTile" alt="">👚</img>
                <img className="outfitAccTile" alt="">👚</img>
                </div>
            </div>

        </div>
        </>
    )
}