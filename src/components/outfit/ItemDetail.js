import "./Item.css"

export const ItemDetail = () => {
    return (
        <>

            <div className="oneItemTile">
                <img className="itemIMG" alt="itemIMG" src="https://i.pinimg.com/originals/fd/69/98/fd69989a72f58e02ef593ba358d55afa.jpg"></img>

                <div className="itemInfo">
                    <div className="itemTopInfo">
                        <span className="itemMustPackDiv">
                            <p>Luggage icon [--]{/* {ternary for if clicked and unclicked show image} */}</p>
                        </span>

                        <span className="itemSummary">
                            <p className="itemSummaryP">WHOJIE NOSEH NJSDNEON NSOEFHUSN </p>
                        </span>

                        <div className="imgNameRegionDate">
                            <span className="creatorImgWithName">
                                <img alt="userIMG" src="" />
                                <p>Created by Me</p>
                            </span>
                            <p className="itemUserRegion">Region: North America</p>
                        </div>
                    </div>

                    <div className="itemBottomInfo">
                        <div className="keywordDiv">
                            <p>Keywords</p>
                            <p>hot shorts sun bright</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}